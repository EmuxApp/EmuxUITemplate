/*
    {APPNAME}
 
    Copyright (C) Emux Technologies. All Rights Reserved.
 
    https://emux.app
    Licenced by the {APPNAME} Terms of Service, which can be found at https://emux.app/terms.
*/

// TODO: Initialise your Firebase project here!

// Code in here will run when all code is loaded
$(function() {
    screens.switch("screen1"); // Switch to screen1
});

// TODO: Replace `setTimeout` with your event handler (eg. Firebase's
// `onAuthStateChanged`) so that you can hide the splash when all Firebase data
// has been loaded
setTimeout(function() {
    $("#loader").fadeOut(); // Fades out the splash screen after 3 seconds
}, 3000);