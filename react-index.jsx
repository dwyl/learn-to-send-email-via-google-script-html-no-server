import React, { useState, useEffect } from "react";
import Axios from "axios";

function ContactForm() {
  // save form values in state
  // create a new property in state for each input
  const [email, setEmail] = useState();

  // create a boolean for whether submit button is enabled or not
  // set initial state to disabled
  const [enabled, setEnabled] = useState(false);

  // on component load, hide thank you message
  useEffect(() => {
    const thankYouMessage = document.querySelector(".thankyou_message");
    thankYouMessage.style.display = "none";
  }, []);

  // create a unique handler for each input
  function handleChange(e) {
    const text = e.currentTarget.value;

    // validate data
    const emailRegexPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // enable submit button when it passes validation
    setEnabled(emailRegexPattern.test(text));

    // store current input in state
    setEmail(text);
  }

  // form submission function
  function submitForm(e) {
    // prevent default behaviour (full page reload)
    e.preventDefault();

    // create a FormData object to store inputs in
    const formData = new FormData();

    // add each input to FormData object
    // Email (uppercase) is input's "name" attribute
    // email (lowercase) is input's value - stored in state
    formData.append("Email", email);

    // use FormData to send POST request through Axios
    // url is the Web app URL acquired at the end of step 6
    fetch(
      "https://script.google.com/macros/s/...your-google-script-url-here.../exec",
      {
        body: formData,
        method: "post",
      }
    )
      //handle success
      .then(function (response) {
        if (response.status === 200) {
          const formElements = document.querySelector(".form-elements");
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          const thankYouMessage = document.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "flex";
          }
        }
      })

      // handle failure
      .catch(function (response) {
        //handle error
        alert(
          `Form Submission Error. Please Try Again Later. Response Code: ${response.status}`
        );
      });
  }

  // render form
  return (
    <div className="subscribe-form">
      <h3 className="column-header">Newsletter</h3>
      <p>Stay in the know about community events, sales, and updates.</p>
      <form className="gform" onSubmit={submitForm}>
        <div className="form-elements">
          <input
            onChange={handleChange}
            className="form-control subscribe"
            placeholder="Enter your email"
            type="text"
            name="Email"
            id="Email"
          />
          {
            // enabled is true when it passes validation
            // reverse makes it read disabled = false
          }
          <button
            className="btn btn-primary subscribe-button"
            type="submit"
            disabled={!enabled}
          >
            Subscribe
          </button>
        </div>
        <div className="thankyou_message">
          <h5 className="fw-bold">
            Thank you for contacting us! We will get back to you soon.
          </h5>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
