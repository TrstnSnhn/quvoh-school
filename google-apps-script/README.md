# Saving inquiries to Google Sheets

The website posts each inquiry to a Google Apps Script web app, which appends a row to the inquiries sheet.

1. Open the sheet, then **Extensions > Apps Script**.
2. Replace the editor contents with `Code.gs` from this folder and save.
3. Click **Deploy > New deployment**, choose type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**, approve the permissions, and copy the **Web app URL** (ends in `/exec`).
5. Paste that URL into `SHEET_ENDPOINT` at the top of `assets/main.js`, then commit and push.

After changing `Code.gs`, use **Deploy > Manage deployments > Edit > New version** so the same URL keeps working.

Rows: Submitted at, Name, Contact, Check-in, Check-out, Guests, Message. The header row is added on the first submission if the sheet is empty.
