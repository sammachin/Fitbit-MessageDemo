import * as messaging from "messaging";

console.log("App Started");
var document = require('document');

//When a button is pressed
document.onkeypress = function (e) {
    console.log("Key pressed: " + e.key);
    //Create obkect containing details of button
    var display = document.getElementById("response");
    display.text = "...";
    var data = {'key' : e.key}
      if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
          //Send object as JSON string to companion
          messaging.peerSocket.send(JSON.stringify(data));
      }
};

//When companion sends a message
messaging.peerSocket.onmessage = evt => {
  //Write to the display
  var display = document.getElementById("response");
  display.text = evt.data;
}
