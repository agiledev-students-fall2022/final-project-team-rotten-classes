Anything related to utils should be put into this folder following the format:
* Javascript file: firebase.utils.js

Contents include:
* The main purpose of this folder is to process data. While components folder deals with the overall view and layout of the page, utils folder deals with processing and validating data.
* If we need user login to save his/her favorite course, we may need Google firebase.
* If we need to implement "Contact Us" page, we need form validation to make sure user's email is under the correct email format, and message is not empty.
* The above "Contact Us" needs 3rd party API. We need to put the helper function inside utils folder to check and process first before sending to back-end.