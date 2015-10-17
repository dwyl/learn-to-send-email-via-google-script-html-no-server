# Send Email from HTML Form the *Easy* Way!

An Example of using an HTML to send an Email without a Backend Server using a Google Script - No PHP, Python, Ruby, Java, Node.js etc.

## Why?

We needed a way of sending an email from from a "*static*" HTML page
when you don't (*want* to) *have* a *server*.

## What?

Instead of using a server to send your email,
which is *easy* but requires *maintenance*,  
use Google to send mail on your behalf
and use Google Spreadsheets to keep track of the data!


## How?

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

You should expect to see:

![3-script-editor-showing-script](https://cloud.githubusercontent.com/assets/194400/10560379/9efa5b3a-7501-11e5-96ba-a9e3b2d77ee4.png)

### 3. Set the `TO_ADDRESS` in the Script

Change the value of the `TO_ADDRESS` to which ever email you want to receive
the contact form message.





## Background Reading

+ Google Apps Scripts Basics: https://developers.google.com/apps-script/articles
+ Logger (like console.log):
https://developers.google.com/apps-script/reference/base/logger
