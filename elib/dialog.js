/*
    {APPNAME}
 
    Copyright (C) Emux Technologies. All Rights Reserved.
 
    https://emux.app
    Licenced by the {APPNAME} Terms of Service, which can be found at https://emux.app/terms.
*/
 
var dialog = (function() {
    function open(title, content, buttons = [{text: "Close", onclick: "dialog.close();", type: "blue"}], allowEscape = true) {
        $(".dialog").html(`
            <div class="dialogTitle cutOff"></div>
            <div class="dialogContent"></div>
            <div class="dialogActions"></div>
        `);
     
        $(".dialogTitle").text(title);
        $(".dialogContent").html(content);
     
        for (var i = 0; i < buttons.length; i++) {
            $(".dialogActions").html(
                $(".dialogActions").html() +
                "<button class='" + buttons[i].type + "' onclick='" +
                buttons[i].onclick +
                "'>" +
                buttons[i].text +
                "</button>"
            );
        }
     
        if (allowEscape) {
            $(".dialogBackground").attr("onclick", "dialog.close();");
        } else {
            $(".dialogBackground").attr("onclick", "");
        }
     
        $(".dialogBackground").fadeIn();
        $(".dialog").fadeIn();
    }
     
    function close() {
        $(".dialogBackground").fadeOut();
        $(".dialog").fadeOut();
    }
 
    window.alert = function(text, title = "Information") {
        open(title, text, [{text: "OK", onclick: "dialog.close();", type: "primary"}]);
    };
 
    return {open, close};
})();