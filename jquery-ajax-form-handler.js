// Requested by Naza ... See: http://stackoverflow.com/a/46181
function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
jQuery( document ).ready(function( $ ) {
    // variable to hold request
    var request;
    // bind to the submit event of our form
    $("#gform").submit(function(event){
        // prevent default posting of form
        event.preventDefault();
        var email = $('#email').val();
        console.log(' >> '+ email);
        if(!validateEmail(email)) { // validate the email address
          $('#email-invalid').show();
          return false;
        }
        // abort any pending request
        if (request) {
            request.abort();
        }
        var $form = $(this); // setup some local variables
        // let's select and cache all the fields
        var $inputs = $form.find("input, select, button, textarea");
        // serialize the data in the form
        var serializedData = $form.serialize();
        // disable the inputs for the duration of the ajax request
        $inputs.prop("disabled", true);
        // $('#gform').text('Sending data...');
        $('button').attr("disabled", "disabled");
        request = $.ajax({ // send the data to Google Apps
          url: event.target.action, // defined in the form action!
          type: "post",
          data: serializedData
        });
        // callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR) {
          console.log(response, textStatus, jqXHR);
          $('#thankyou_message').show('slow');
          $('#gform').hide();
        });
        // callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // log the error to the console
            console.error(
                "The following error occured: "+
                textStatus, errorThrown
            );
        });
        // callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            $inputs.prop("disabled", false);
        });
    });
});
