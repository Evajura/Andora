/**
 * Paste this into Extensions > Apps Script in the consent-log spreadsheet.
 * Deploy it as a Web app that executes as you and permits access to anyone.
 * Keep the spreadsheet restricted to authorized Andora staff.
 */
const SHEET_NAME = 'Cookie Consent Log';
const HEADERS = [
  'Consent ID',
  'Necessary',
  'Analytics',
  'Advertising',
  'GPC Enabled',
  'Consent Version',
  'Choice Timestamp',
  'Received Timestamp',
];

function doPost(event) {
  const lock = LockService.getScriptLock();
  try {
    const record = JSON.parse(event.postData.contents);
    validateRecord(record);
    lock.waitLock(10000);

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    sheet.appendRow([
      safeCell(record.consentId),
      record.necessary,
      record.analytics,
      record.advertising,
      record.globalPrivacyControl,
      record.version,
      new Date(record.updatedAt),
      new Date(),
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function validateRecord(record) {
  if (!record || typeof record !== 'object') throw new Error('Invalid record');
  if (!/^[0-9a-f-]{36}$/i.test(record.consentId)) throw new Error('Invalid consent ID');
  ['necessary', 'analytics', 'advertising', 'globalPrivacyControl'].forEach((key) => {
    if (typeof record[key] !== 'boolean') throw new Error(`Invalid ${key}`);
  });
  if (!Number.isInteger(record.version) || record.version < 1) throw new Error('Invalid version');
  if (Number.isNaN(Date.parse(record.updatedAt))) throw new Error('Invalid timestamp');
}

function safeCell(value) {
  const text = String(value);
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}
