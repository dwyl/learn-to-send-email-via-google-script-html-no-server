
function validEmail(email) { // see:
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

function validateHuman(honeypot) {
  if (honeypot) {  //if hidden form filled up
    console.log("Robot Detected!");
    return true;
  } else {
    console.log("Welcome Human!");
  }
}

// get all data in form and return object
function getFormData() {
  var gforms = document.getElementsByClassName("gform");
  var allData = []; // Data from all gforms will be stored here
  var fieldDataOnly = []; //Stripping Data to eliminate formDataNameOrder, formGoogleSheetName & formGoogleSendEmail

  for (var i = 0; i < gforms.length; i++) {
    var form = gforms[i];
    var elements = form.elements; // all form elements
    var fields = Object.keys(elements).filter(function(k) {
          // the filtering logic is simple, only keep fields that are not the honeypot
          return (elements[k].name !== "honeypot");
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });
    var data = {};
    fields.forEach(function(k){
      data[k] = elements[k].value;
      var str = ""; // declare empty string outside of loop to allow
                    // it to be appended to for each item in the loop
      if(elements[k].type === "checkbox"){ // special case for Edge's html collection
        str = str + elements[k].checked + ", "; // take the string and append 
                                                // the current checked value to 
                                                // the end of it, along with 
                                                // a comma and a space
        data[k] = str.slice(0, -2); // remove the last comma and space 
                                    // from the  string to make the output 
                                    // prettier in the spreadsheet
      }else if(elements[k].length){
        for(var i = 0; i < elements[k].length; i++){
          if(elements[k].item(i).checked){
            str = str + elements[k].item(i).value + ", "; // same as above
            data[k] = str.slice(0, -2);
          }
        }
      }
    });

    var copyOfData = Object.assign({}, data); //copies data by value, not reference
    fieldDataOnly.push(copyOfData); //appends copy of data into array without formDataNameOrder, formGoogle...etc.

    // add form-specific values into the data
    data.formDataNameOrder = JSON.stringify(fields);
    data.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    data.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    allData.push(data); //appends all data collected into array
  }
  return { data: allData, fieldDataOnly: fieldDataOnly };
}

function handleFormSubmit(event) {    // handles form submit without any jquery
  event.preventDefault();             // we are submitting via xhr below
  var data = getFormData();           // get the values submitted in the form
  var testData = data.fieldDataOnly;  // create separate test data variable to check if form is empty
  var data = data.data;               // create data variable for all form data values

  /* OPTION: Remove this comment to enable SPAM prevention, see README.md
  if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
    return false;
  }
  */

  //Test if form data (testData) is empty 
  function isEmpty(samp) {
    for (var prop in samp) {
      if(samp[prop] !== "") {
        return false;
      }
    }
    return true;
  }

  //loop through gform data & only act on completed forms
  for (var i = 0; i < testData.length; i++) {
    var j = 0; //variable to later set for iteration number
    if (isEmpty(testData[i])) {
      //do nothing
    } else {
      j = i; //sets iteration number to j
      if( data[i].email && !validEmail(data[i].email) ) {   // if email is not valid show error
        var invalidEmail = document.getElementsByClassName("email-invalid");
        if (invalidEmail[j]) {
          invalidEmail[j].style.display = "block";
          return false;
        }
      } else {
        var url = event.target.action;  //
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            console.log( xhr.status, xhr.statusText )
            console.log(xhr.responseText);

            var gform = document.getElementsByClassName("gform");
            gform[j].className += " gform_submitted"; //adds class name for submitted gform
            var submittedGform = document.getElementsByClassName("gform_submitted");

            for (var i = 0; i < submittedGform.length; i++) {
              submittedGform[i].style.display = "none"; // hides all submitted gforms
              submittedGform[i].reset(); //clears gform data if multiple forms are submitted without refreshing
            }

            var thankYouMessage = document.getElementsByClassName("thankyou_message");
            if (thankYouMessage[j]) {
              thankYouMessage[j].style.display = "block";
            }
            return;
        };
        // url encode form data for sending as post data
        var theData = data[j];
        var encoded = Object.keys(theData).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(theData[k])
        }).join('&')
        xhr.send(encoded);
      }
      return;
    }
  }
}

function loaded() {
  console.log("Contact form submission handler loaded successfully.");
  // bind to the submit event of our form
  var form = document.getElementsByClassName("gform");
  for (var i = 0; i < form.length; i++) {
    form[i].addEventListener("submit", handleFormSubmit, false);
  }
};
document.addEventListener("DOMContentLoaded", loaded, false);