(function() {

  var form, data;
  var file;
  var fReader = new FileReader();

  fReader.onloadend = function(e) {
    if (e.target.error != null) {
      showError("File " + file.name + " could not be read.");
      return;
    } else {
      data['fileData'] = e.target.result;
      // data['formDataNameOrder'] = JSON.stringify(JSON.parse(data['formDataNameOrder']).concat('fileData'));
      submitForm();
    }
  };

  function validEmail(email) {
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
  function getFormData(form) {
    var elements = form.elements;

    var fields = Object.keys(elements).filter(function(k) {
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

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      var value = element.value;
      // file = element.files && element.files[0];
      // if (file) {

      //   fReader.readAsDataURL(file);
        
        // fReader.readAsDataURL(file);
        // fReader.readAsBinaryString(file);
        // fReader.onload = function() {
        //   console.log(btoa(fReader.result));
        // };

        // fReader.onload = (function(theFile) {
        //   return function(e) {
        //     var binaryData = e.target.result;
        //     //Converting Binary Data to base 64
        //     var base64String = window.btoa(binaryData);
        //     //showing file converted to base64
        //     value = base64String;
        //     alert('File converted to base64 successfuly!');
        //   };
        // })(file);
        
        // value = element.files[0].name;
      //   value = file.name;
      // }
      formData[name] = value;

      // when our element has multiple items, get their values
      if (element.length) {
        var arr = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            arr.push(item.value);
          }
        }
        formData[name] = arr.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    console.log(formData);
    return formData;
  }

  function getFile() {
    var files = document.getElementById("image").files;

    file = files && files[0];
    if (!file) {
      return;
    }

    fReader.readAsDataURL(file);
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    form = event.target;
    data = getFormData(form);         // get the values submitted in the form

    // Modify data if we have a file, get that before continuing!
    getFile();

    /* OPTION: Remove this comment to enable SPAM prevention, see README.md
    if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
      return false;
    }
    */
  }

  function submitForm() {
    if( data.email && !validEmail(data.email) ) {   // if email is not valid show error
      var invalidEmail = form.querySelector(".email-invalid");
      if (invalidEmail) {
        invalidEmail.style.display = "block";
        return false;
      }
    } else {
      disableAllButtons(form);
      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          console.log(xhr.status, xhr.statusText);
          console.log(xhr.responseText);
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
          return;
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&');
      xhr.send(encoded);
    }
  }
  
  function loaded() {
    console.log("Contact form submission handler loaded successfully.");
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();
