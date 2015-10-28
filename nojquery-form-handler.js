// Requested by Naza ... See: http://stackoverflow.com/a/46181
// jQuery( document ).ready(function( $ ) {
//     // variable to hold request
//     var request;
//     // bind to the submit event of our form
//     $("#gform").submit(function(event){
//         // prevent default posting of form
//         event.preventDefault();
//         var email = $('#email').val();
//         console.log(' >> '+ email);
//         if(!validateEmail(email)) { // validate the email address
//           $('#email-invalid').show();
//           return false;
//         }
//         // abort any pending request
//         if (request) {
//             request.abort();
//         }
//         var $form = $(this); // setup some local variables
//         // let's select and cache all the fields
//         var $inputs = $form.find("input, select, button, textarea");
//         // serialize the data in the form
//         var serializedData = $form.serialize();
//         // disable the inputs for the duration of the ajax request
//         $inputs.prop("disabled", true);
//         // $('#gform').text('Sending data...');
//         $('button').attr("disabled", "disabled");
//         request = $.ajax({ // send the data to Google Apps
//           url: event.target.action, // defined in the form action!
//           type: "post",
//           data: serializedData
//         });
//         // callback handler that will be called on success
//         request.done(function (response, textStatus, jqXHR) {
//           console.log(response, textStatus, jqXHR);
//           $('#thankyou_message').show('slow');
//           $('#gform').hide();
//         });
//         // callback handler that will be called on failure
//         request.fail(function (jqXHR, textStatus, errorThrown){
//             // log the error to the console
//             console.error(
//                 "The following error occured: "+
//                 textStatus, errorThrown
//             );
//         });
//         // callback handler that will be called regardless
//         // if the request failed or succeeded
//         request.always(function () {
//             $inputs.prop("disabled", false);
//         });
//     });
// });

function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
// get all data in form and return object
function getFormData() {
  var data   = {
    city         : document.getElementById("city").value,
    start_date   : document.getElementsByName("start_date") > 0 ? document.getElementsByName("start_date")[1].value : '',
    end_date     : document.getElementsByName("end_date")   > 0 ? document.getElementsByName("end_date")[1].value   : '',
    sleeps       : document.getElementsByName("sleeps")         ? document.getElementsByName("sleeps")[0].value     : '',
    email        : document.getElementById("email") ? document.getElementById("email").value : '',
    phone_number : document.getElementById("phone") ? document.getElementById("phone").value : '8888888'
  }
  console.log(data);
  return data;
}
// handles form submit withtout any jquery
function handleFormSubmit(event) {
  event.preventDefault();     // we are submitting via xhr below
  var data = getFormData();   // get the values submitted in the form
  if( !validEmail(data.email) ) {
    document.getElementById('email-invalid').style.display = 'block';
    return false;
  } else {
    var url = event.target.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        console.log( xhr.status, xhr.statusText )
        console.log(xhr.responseText);
        document.getElementById('gform').style.display = 'none'; // hide form
        document.getElementById('thankyou').style.display = 'block';
        document.getElementById('browse_all').style.display = 'block';
        return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
  }
}
function loaded() {
  // bind to the submit event of our form
  var form = document.getElementById('gform');
  form.addEventListener("submit", handleFormSubmit, false);
};
document.addEventListener('DOMContentLoaded', loaded, false);
