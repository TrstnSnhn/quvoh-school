import { test } from "node:test";
import assert from "node:assert/strict";
import { validateInquiry, buildMessage, formatDate, messengerLink } from "../assets/main.js";

test("requires name, contact, dates, and a guest count", () => {
  const e = validateInquiry({ name: " ", contact: "", checkIn: "", checkOut: "", guests: "" }, "2026-09-17");
  assert.deepEqual(Object.keys(e).sort(), ["checkIn", "checkOut", "contact", "guests", "name"]);
});

test("rejects check-out on or before check-in, and check-in in the past", () => {
  assert.ok(validateInquiry({ checkIn: "2026-10-02", checkOut: "2026-10-02", guests: "4" }, "2026-09-17").checkOut);
  assert.ok(validateInquiry({ checkIn: "2026-09-01", checkOut: "2026-09-02", guests: "4" }, "2026-09-17").checkIn);
});

test("limits guests to 1 through 8", () => {
  const base = { name: "Ana", contact: "0917 000 0000", checkIn: "2026-10-02", checkOut: "2026-10-03" };
  assert.ok(validateInquiry({ ...base, guests: "0" }, "2026-09-17").guests);
  assert.ok(validateInquiry({ ...base, guests: "9" }, "2026-09-17").guests);
  assert.deepEqual(validateInquiry({ ...base, guests: "8" }, "2026-09-17"), {});
});

test("builds a draft with dates, stay times, guests, and the optional question", () => {
  const msg = buildMessage({ checkIn: "2026-04-18", checkOut: "2026-04-19", guests: "6", message: "  Can we cook dinner?  " });
  assert.match(msg, /Preferred check-in: April 18, 2026, 2:00 p\.m\./);
  assert.match(msg, /Preferred check-out: April 19, 2026, 12:00 noon/);
  assert.match(msg, /Number of guests: 6/);
  assert.match(msg, /Question: Can we cook dinner\?/);
  assert.doesNotMatch(buildMessage({ checkIn: "2026-04-18", checkOut: "2026-04-19", guests: "2", message: "" }), /Question:/);
  assert.equal(formatDate("2026-12-01"), "December 1, 2026");
});

test("greets with the guest name and builds a prefilled Messenger link", () => {
  const msg = buildMessage({ name: " Ana ", checkIn: "2026-04-18", checkOut: "2026-04-19", guests: "2", message: "" });
  assert.match(msg, /^Hi! This is Ana\./);
  const url = new URL(messengerLink(msg));
  assert.equal(url.origin + url.pathname, "https://m.me/61566061342446");
  assert.equal(url.searchParams.get("text"), msg);
});
