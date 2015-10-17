/******************************************************************************
 * This tutorial is based on the work of Martin Hawksey twitter.com/mhawksey  *
 * But has been simplified and cleaned up to make it more beginner friendly   *
 * All credit still goes to Martin and any issues/complaints/questions to me. *
 ******************************************************************************/

function doPost(e) {
  Logger.log(e);
  try {
    MailApp.sendEmail("contact.nelsonic@gmail.com", "data", JSON.stringify(e.parameters));
    // return json success results
    return ContentService
          .createTextOutput(JSON.stringify({"result":"success", "data": JSON.stringify(e.parameters) }))
          .setMimeType(ContentService.MimeType.JSON);
  } catch(error) { // if error return this
    Logger.log(error);
    return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "error": e}))
          .setMimeType(ContentService.MimeType.JSON);
  }
}
