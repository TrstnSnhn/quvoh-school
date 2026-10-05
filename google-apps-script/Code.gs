// Receives inquiries from the website and appends them to the Quvoh inquiries sheet.
// Setup steps are in google-apps-script/README.md.

const SHEET_ID = "1LHYejy1-sFlfyn2rZH-HFABiXL_PH_sQ_eazTlrHB14";
const HEADERS = ["Submitted at", "Name", "Contact", "Check-in", "Check-out", "Guests", "Message"];
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    if (data.website) return reply({ ok: true }); // honeypot filled: bot, drop silently

    const row = toRow(data);
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
      if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
      sheet.appendRow(row);
    } finally {
      lock.releaseLock();
    }
    return reply({ ok: true });
  } catch (err) {
    console.error(err);
    return reply({ ok: false, error: "Could not save the inquiry." });
  }
}

function toRow(data) {
  const name = clean(data.name, 80);
  const contact = clean(data.contact, 120);
  const guests = Number(data.guests);
  if (!name || !contact) throw new Error("Missing name or contact");
  if (!ISO_DATE.test(data.checkIn) || !ISO_DATE.test(data.checkOut)) throw new Error("Bad dates");
  if (!Number.isInteger(guests) || guests < 1 || guests > 8) throw new Error("Bad guest count");
  return [new Date(), name, contact, data.checkIn, data.checkOut, guests, clean(data.message, 600)];
}

// Trims, caps length, and stops text being read as a spreadsheet formula.
function clean(value, max) {
  const text = String(value || "").trim().slice(0, max);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function reply(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
