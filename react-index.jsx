import React, { useState, useEffect } from "react";

export default function ContactForm() {
  // create a boolean for whether submit button is enabled or not
  // set initial state to disabled
  const [enabled, setEnabled] = useState(false);
  // create variable to hold dat list regex
  let dataList;

  // Define a RegEx schema matching each input's "name" attribute
  // If you don't want to validate an input, put /.+/
  //
  //     /.+/  =  match anything, but can't be empty
  //
  const schema = {
    // text input
    FName: /.+/,
    LName: /.+/,
    Email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    // text area
    Msg: /.+/,
    // color input
    Clr: /.+/,
    // radio button group
    radioGroup: /.+/,
    // checkboxes
    checkboxes: /.+/,
    // menu selects
    menu: /.+/,
    // list
    list: /.+/,
    // datalist
    datalist: new RegExp(dataList),
    // honeypot (must be blank)
    honeypot: /^$/,
  };

  // on component load
  useEffect(() => {
    // Hide thank you message
    document.querySelector(".thankyou_message").style.display = "none";
    // Hide Honey Pot
    document.querySelector(".honeypot-field").style.display = "none";

    // Set the first item in list to be checked on each radio button set
    document.querySelectorAll(".radio-buttons").forEach((buttonSet) => {
      buttonSet.querySelector("input[type=radio]").checked = true;
    });

    // set the first item in list to be checked on each menu set
    document.querySelectorAll(".select-menu:first-child").selected = true;

    // grab the values in the datalist for validation
    dataList = Array.from(document.querySelector(".dataList").children)
      .map(({ value }) => {
        value = value.replaceAll("\\", "\\\\");
        value = value.replaceAll(".", ".");
        value = value.replaceAll("^", "^");
        value = value.replaceAll("$", "$");
        value = value.replaceAll("*", "*");
        value = value.replaceAll("+", "\\+");
        value = value.replaceAll("-", "-");
        value = value.replaceAll("?", "?");
        value = value.replaceAll("(", "(");
        value = value.replaceAll(")", ")");
        value = value.replaceAll("[", "[");
        value = value.replaceAll("]", "]");
        value = value.replaceAll("{", "{");
        value = value.replaceAll("}", "}");
        value = value.replaceAll("|", "|");
        return value;
      })
      .join("|");

    console.log(new RegExp(dataList));

    // CHECK ALL FORMS ON PAGE
    // IF AN INPUT.NAME IS NOT PRESENT IN SCHEMA THEN ADD IT WITH DEFAULT /.+/
  }, []);

  // validate data upon change
  function handleChange() {
    const form = document.querySelector(".gform");

    // start out with valid, then check for invalid
    let valid = true;

    // grab the data from the form
    const data = new FormData(form);

    //cycle through all data
    for (const [nameAttribute, value] of data) {
      console.log(`Name: ${nameAttribute}  Value: ${value}`);
      // if there's any invalid data, flag it as invalid
      if (!schema[nameAttribute].test(value)) valid = false;
    }

    // if it makes it through all inputs without flagging it as bad,
    // then input is valid
    setEnabled(valid);
  }

  // form submission function
  function submitForm(e) {
    // prevent default behaviour (full page reload)
    e.preventDefault();

    const form = document.querySelector(".gform");

    // create a FormData object to store inputs in
    const data = new FormData(form);

    // use FormData to send POST request through Axios
    // url is the Web app URL acquired at the end of step 6
    fetch(
      "https://script.google.com/macros/s/...your-google-script-url-here.../exec",
      {
        body: data,
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
    <>
      <form className="gform" onSubmit={submitForm} onChange={handleChange}>
        <div className="form-elements">
          {
            // Text Fields
          }
          <fieldset>
            <legend>
              <h3>Input Boxes</h3>
            </legend>
            <label for="first-name">First Name</label>
            <input
              placeholder="First Name..."
              type="text"
              name="FName"
              id="first-name"
            />
            <br />
            <label for="last-name">Last Name</label>
            <input
              placeholder="Last Name..."
              type="text"
              name="LName"
              id="last-name"
            />
            <br />
            <label for="email-address">Email Address</label>
            <input
              placeholder="Email..."
              type="email"
              name="Email"
              id="email-address"
              required
            />
          </fieldset>
          {
            // Text Area
          }
          <fieldset>
            <legend>
              <h3>Text Area</h3>
            </legend>
            <label for="message">Message</label>
            <textarea
              placeholder="Message..."
              rows="5"
              name="Msg"
              id="message"
            />
          </fieldset>
          {
            // color
          }
          <fieldset>
            <legend>
              <h3>Color Selector</h3>
            </legend>
            <label for="color">Favourite Color: </label>
            <input id="color" type="color" name="Clr" />
          </fieldset>
          {
            // radio buttons
          }

          <fieldset class="radio-buttons">
            <legend>
              <h3>Radio Buttons</h3>
            </legend>
            <h5>Choose Your Favorite Programming Language</h5>
            <input
              id="radio-group-javascript"
              type="radio"
              name="radioGroup"
              value="js"
            />
            <label for="radio-group-javascript">Javascript</label>
            <input
              id="radio-group-java"
              type="radio"
              name="radioGroup"
              value="java"
            />
            <label for="radio-group-java">Java</label>
            <input
              id="radio-group-cplusplus"
              type="radio"
              name="radioGroup"
              value="c++"
            />
            <label for="radio-group-cplusplus">C++</label>
            <input
              id="radio-group-python"
              type="radio"
              name="radioGroup"
              value="python"
            />
            <label for="radio-group-python">Python</label>
            <input
              id="radio-group-other"
              type="radio"
              name="radioGroup"
              value="other"
            />
            <label for="radio-group-other">Other</label>
          </fieldset>
          {
            // Check Boxes
          }

          <fieldset>
            <legend>
              <h3>Check Boxes</h3>
            </legend>
            <h5>What are you Most Comfortable With?</h5>
            <input
              id="checkboxes-javascript"
              type="checkbox"
              name="checkboxes"
              value="js"
            />
            <label for="checkboxes-javascript">Javascript</label>
            <input
              id="checkboxes-java"
              type="checkbox"
              name="checkboxes"
              value="java"
            />
            <label for="checkboxes-java">Java</label>
            <input
              id="checkboxes-cplusplus"
              type="checkbox"
              name="checkboxes"
              value="c++"
            />
            <label for="checkboxes-cplusplus">C++</label>
            <input
              id="checkboxes-python"
              type="checkbox"
              name="checkboxes"
              value="python"
            />
            <label for="checkboxes-python">Python</label>
            <input
              id="checkboxes-other"
              type="checkbox"
              name="checkboxes"
              value="other"
            />
            <label for="checkboxes-other">Other</label>
          </fieldset>
          {
            // Menu
          }

          <fieldset>
            <legend>
              <h3>Menu</h3>
            </legend>
            <label for="menu">Select a Language:</label>
            <select id="menu" name="menu" class="select-menu">
              <option>Javascript</option>
              <option>Java</option>
              <option>C++</option>
              <option>Python</option>
              <option>Other</option>
            </select>
          </fieldset>
          {
            // List
          }
          <fieldset>
            <legend>
              <h3>List</h3>
            </legend>
            <label for="list">Select Your Favorite Language:</label>
            <select id="list" name="list" multiple size="5">
              <option>Javascript</option>
              <option>Java</option>
              <option>C++</option>
              <option>Python</option>
              <option>Other</option>
            </select>
          </fieldset>
          {
            // Data List
          }
          <fieldset class="pure-group">
            <legend>
              <h3>Data List</h3>
            </legend>
            <label for="datalist">
              Select From The Pre-Determined Options:
            </label>
            <input id="datalist" list="progLang" name="datalist" />
            <datalist id="progLang" className="dataList">
              <option value="Javascript" />
              <option value="Java" />
              <option value="C++" />
              <option value="Python" />
              <option value="Other" />
            </datalist>
          </fieldset>
          {
            // Honey Pot
          }
          <fieldset class="honeypot-field">
            <label for="honeypot">
              To help avoid spam, utilize a Honeypot technique with a hidden
              text field; must be empty to submit the form! Otherwise, we assume
              the user is a spam bot.
            </label>
            <input id="honeypot" type="text" name="honeypot" value="" />
          </fieldset>
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
    </>
  );
}
