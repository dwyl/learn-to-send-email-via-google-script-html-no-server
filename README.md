# Send Email from a *Static* HTML Form using Google Apps Mail!

A ***Step-by-Step Example*** of using an **HTML Form** to send a "Contact Us" Message via Email without a Backend Server using a Google Script - No PHP, Python, Ruby, Java, Node.js etc.

## Why?

We needed a way of sending an email from a "*static*" HTML page
when you don't (*want* to) *have* a *server*.

### *Key Advantages*

+ No "*Backend*" to Deploy/Maintain/Pay for
+ ***Fully Customisabe*** - every aspect is customisable!
+ Email *sent via* ***Google Mail*** which is ***Whitelisted Everywhere*** (*high deliverability success*)
+ **Collect/Store** any **form data** in a ***Spreadsheet*** for easy viewing  
(*perfect if you need to share it with non-technical people*)

## What?

Instead of using a server to send your email,
which is *easy* but requires *maintenance*,  
use Google to send mail on your behalf
and use Google Spreadsheets to keep track of the data!

> You *could* use a "*free*" service like http://formspree.io/ to process your form submissions
if you don't care where you are sending your data and want to manage the data submitted  
in your email inbox (*messy ... yuck*!)  
*Or*... you can *invest* a few minutes and keep data private/manageable.
*Take your pick*.

## *How*?

### 1. Make a Copy of the Sample Spreadsheet

> Sample: https://docs.google.com/spreadsheets/d/1UZdTuBtfmr-p0yQL6pwL5IrIWLsNLRX05Q-qP6nFu8U/

In Google Sheets, Click "**File**" > "**Make a copy**..."

![1-make-copy](https://cloud.githubusercontent.com/assets/194400/10559679/d0056a0c-74ee-11e5-9fdc-c12e13684a46.png)

This should give you something like this:

![2-copy-of-sheet](https://cloud.githubusercontent.com/assets/194400/10559710/3aec92f0-74ef-11e5-9295-f1988a23257b.png)

> Note: Feel free to change the name of the Copy to anything you want,
it will not affect the outcome.

### 2. Open the Script Editor

Open the **Script editor...** by clicking "**Tools**" > "**Script editor...**"

![2 script-editor](https://cloud.githubusercontent.com/assets/194400/10559732/8db2b9f6-74ef-11e5-8bf2-de286f079929.png)

Here's a *snapshot* of the script you need (*at this point in the exercise*): [google-script-just-email.js](https://raw.githubusercontent.com/nelsonic/html-form-send-email-via-google-script-without-server/1d1c6727f69dec64a6b7f6bd6ff0dd72d0374210/google-script-just-email.js)

### 3. Set the `TO_ADDRESS` in the Script

In the editor window you should expect to see:

![3-script-editor-showing-script](https://cloud.githubusercontent.com/assets/194400/10560379/9efa5b3a-7501-11e5-96ba-a9e3b2d77ee4.png)

Change the value of the `TO_ADDRESS` to which ever email you want to receive
the contact form message.

### 4. Save a *New Version* of your Script

It's not immediately *obvious* but you have to *click* on "*Manage Versions...*"

![19 google-script-no-save-new-version](https://cloud.githubusercontent.com/assets/194400/10558249/527f3c98-74c1-11e5-8290-5af7fa7f5f75.png)

Then *create* your new version:

![20 google-script-save-new-version](https://cloud.githubusercontent.com/assets/194400/10558250/53d21d5e-74c1-11e5-88c5-7bc2d8ce6228.png)

### 5. Publish the *Updated* Script as a Web App

![20 a-publish](https://cloud.githubusercontent.com/assets/194400/10558288/50980aa8-74c2-11e5-8576-72084a564779.png)

Select the *latest* project version to deploy:

![21 deploy-new-version](https://cloud.githubusercontent.com/assets/194400/10558251/570a5428-74c1-11e5-8ced-5dd26d3de3c4.png)

### 6. Authorize the Script to Send Emails

![5 auth-required](https://cloud.githubusercontent.com/assets/194400/10560412/89d3fb0c-7502-11e5-81ce-fb239bf545b2.png)

![5-allow-sending-emails](https://cloud.githubusercontent.com/assets/194400/10560416/a86a26ae-7502-11e5-9add-d5081d409af4.png)

Copy the web app URL to your clip board / note pad.
Then Click "OK".

![22 1-deploy-as-web-app](https://cloud.githubusercontent.com/assets/194400/10558255/6eec31e2-74c1-11e5-9c07-cea6209526df.png)


### 7. Create your *basic* HTML Form

Using the template in `index.html` in this repo,
create your own html file with the basic form. (*save the file*)

> Remember to change the Form `action` URL to the one you copied in
the previous step:

![7-html-form](https://cloud.githubusercontent.com/assets/194400/10560470/e2d7fcb6-7503-11e5-9d9a-3771423e51fa.png)

### 8. Open the HTML Form (*page*) in your Browser

Fill in some sample data in the HTML Form:

![html form](https://cloud.githubusercontent.com/assets/194400/10560494/674b64c4-7504-11e5-801a-b537d276f671.png)

Submit the form. You should see a confirmation that it was sent:
![form sent](https://cloud.githubusercontent.com/assets/194400/10560501/8f605dd4-7504-11e5-8cd7-06d768beba4d.png)

### 9. Check the email inbox for the address you set

Open the inbox for the email address you set in **Step 3** (*above*)

![email received](https://cloud.githubusercontent.com/assets/194400/10560512/f87f1652-7504-11e5-8b0f-c342c395a193.png)


> ***Done***. That's it. You just created an HTML form that sends email!

# *Part Two - Make It Look Good* ...

We are going to keep this ***Super Lean*** by using [**PURE CSS**](http://purecss.io/start/)
for our Style (*fix the "ugly" HTML Form in step 8*).
And `submit` the form using [**JQuery** "***AJAX***"](http://api.jquery.com/jquery.ajax/) to keep the person
on your page/site (*avoid "ugly" response page*)

### 10. Submit the Form using **JavaScript** "***AJAX***"

To *prevent* the page from changing to the `JSON` response/result
we need to submit the form using ***AJAX***.

Update your `index.html` to include the following JavaScript file at the *end* of your file
(*before the closing `</body>` tag)

```js
<script data-cfasync="false" type="text/javascript"
src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"></script>
```

This will now display a "Thank You" *message* when the form is submitted:

![thankyou message](https://cloud.githubusercontent.com/assets/194400/10561147/4086a89a-7517-11e5-840d-7f490353e225.png)

Keeps the person on the same page. No refresh.

### 11. Customise the  Message Shown when Form Submitted

Taylor your message by editing the `thankyou_message` div:

![10-customise-the-thankyou-message](https://cloud.githubusercontent.com/assets/194400/10561213/9e6d3342-7518-11e5-9860-43a268102de2.png)


### 12. Use CSS to Make the Form *Look Good*

For `this` *example* we are using ***Pure CSS***: http://purecss.io/start/
because its ***light weight*** (***4.0KB minified and gzipped***)
and *solves* our current "*problem*": Making it Look Good.

![PureCSS-Logo-Intro](https://github-cloud.s3.amazonaws.com/assets/194400/10565838/72d6d52a-75d2-11e5-9b92-ca02b1124920.png)

![PureCSS-module-sizes](https://github-cloud.s3.amazonaws.com/assets/194400/10565844/8f4885a0-75d2-11e5-9490-e3fc42c32616.png)

Without spending *too much* time on this, we can make the form *look*
***a lot*** nicer:

![contact form with pure css](https://github-cloud.s3.amazonaws.com/assets/194400/10566392/f38bc454-75dd-11e5-85dd-6819494a98f2.png)

### 13. Make the email look good too!

By default, the sent email just dumps a blob of JSON into the message body. This isn't very pretty and a bit confusing for a non-technical user. With a bit of an edit to the Google script we can improve this.

The lines in the script that we need to concern ourselves with are: 

```javascript
MailApp.sendEmail(TO_ADDRESS, "Contact Form Submitted",
                  JSON.stringify(e.parameters));
```

That is using Google's `MailApp.sendEmail()` method, which you can read more about:  
https://developers.google.com/apps-script/reference/mail/mail-app

That method will accept an object of config, rather than just the arguments as specified above. That gives you access to some extra options, in particular `htmlBody`. We can convert it like so: 

```javascript
MailApp.sendEmail({
  to: TO_ADDRESS,
  subject: "Contact form submitted",
  htmlBody: // Put some HTML here
});
```

While we're here, there's also a `replyTo` option which I thought would be good to utilise (just in case your form notification recipient tries to reply in their email client), since we can easily grab that from the `e.parameters` object. Lets put that in: 

```javascript
MailApp.sendEmail({
  to: TO_ADDRESS,
  subject: "Contact form submitted",
  replyTo: "" + e.parameters.email,
  htmlBody: // Put some HTML here
});
```

(I had to concatenate the variable with a string to get it to work. I'm sure there's a better way to do that, but it worked for me) Also, it's hard-coded, so you will always need a field named `email` in the form.

Lets format the `htmlBody` now.  
Initially, I used the following code: 

```javascript
htmlBody: (
  "<p><strong>Name:</strong> " + e.parameters.name + "</p>" +
  "<p><strong>Email address:</strong> " + e.parameters.email + "</p>" +
  "<p><strong>Message:</strong></p> <div>" + e.parameters.message + "</div>"
)
```

Which, while it worked, I wasn't super happy with, since it meant you had to update things in multiple places if you added a new field to the form. What we really want to do is take the parameters object and loop over it, returning an HTML representation of it. Fortunately, we can do that! Here's my code: 

```javascript
var mailData = e.parameters // just so we don't have to write `e.parameters` everywhere

function formatMailBody(obj) {
  var result = "";
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + p + "</h4><div>" + obj[p] + "</div>";
      // the text-transform CSS is just there to make the heading in the email body look a bit nicer, since it's all lower case in the object
    }
  }
  return result;
}

MailApp.sendEmail({
  to: TO_ADDRESS,
  subject: "Contact form submitted",
  replyTo: "" + mailData.email, // we can update this too, now that we have the maildata variable.
  htmlBody: formatMailBody(mailData)
});
```

That should be quite straight forward, create a function where we loop over the key-value pairs, and put the key in an `<h4>` (no real reason, it was just around the right font size in my email client) and the value in a `<div>`. I went for a `<div>` because we don't know what the field wil be, single-line or multiline, so it should probably always sit under the heading. There's a tiny amount of CSS there to do some basic formatting to my taste. You can DWYL of course! ;-)  
Then call the function for the `htmlBody`.


# *Part Three - Store Submitted Contact Form Data in a Spreadsheet*

Sending the form data directly to your email inbox is a *good*
first step, but we can do better.

### 14. Add the `record_data` Function to your Google Apps Script

![record_data example](https://cloud.githubusercontent.com/assets/194400/10581613/8b4f9ad4-767b-11e5-90cc-962a9d6acc91.png)

This will record the data received from the `POST` as a *row* in the spreadsheet.  
See: [**google-apps-script.js**](https://github.com/nelsonic/html-form-send-email-via-google-script-without-server/blob/master/google-apps-script.js) for the full code you can *copy-paste*.

### 15. Save a New Version and Re-Publish it

Follow Steps 4, 5 & 6 to save a new version and ***re-publish*** the script.

### 16. Re-Test Submitting the Form

![submit the form](https://cloud.githubusercontent.com/assets/194400/10582654/cf3081e6-7680-11e5-9fd1-b989a8ba0b65.png)

### 17 Confirm the Data was Inserted into the Spreadsheet

![17-confirm-data-inserted](https://cloud.githubusercontent.com/assets/194400/10582676/eb8af5d8-7680-11e5-92bb-30dd08d2d7b3.png)


# *Want more*?

If you want us to take this tutorial further, [***please let us know***!](https://github.com/nelsonic/html-form-send-email-via-google-script-without-server/issues)


## Add your own fields!

In response to [Henry Beary's request](https://github.com/dwyl/html-form-send-email-via-google-script-without-server/issues/9)
we made the form handler *generic* which means you can now add any fields you want to the form.

remember to include the fields *inside* the form that has the id `gform`
and ensure that the `name` of the form element matches the new column heading in your spreadsheet.
e.g:
```HTML
<fieldset class="pure-group">
  <label for="color">Favourite Color: </label>
  <input id="color" name="color" placeholder="green" />
</fieldset>
```
This will allow you to capture the person's favourite color:
e.g:
![new-field-contains-data](https://cloud.githubusercontent.com/assets/194400/11547132/9f162f6a-9949-11e5-89ac-aeb91e025844.png)

Let us know if you have any questions!


## Background Reading

+ Google Apps Scripts Basics: https://developers.google.com/apps-script/articles
+ Logger (like console.log):
https://developers.google.com/apps-script/reference/base/logger
+ Simple Mail Merge using Google Spreadsheets:
https://developers.google.com/apps-script/articles/mail_merge
+ Original Tutorial: AJAX post to google spreadsheet: http://stackoverflow.com/questions/10000020/ajax-post-to-google-spreadsheet which points to:
  + https://mashe.hawksey.info/2011/10/google-spreadsheets-as-a-database-insert-with-apps-script-form-postget-submit-method/
