import * as messaging from "messaging";
import { me } from "companion"

console.log("Companion Running ");

//Server where the API is runnong (must be HTTPS)
const host = "https://bz1ikefgtf.execute-api.us-east-1.amazonaws.com/api/";

// The Device application caused the Companion to start
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

if (me.launchReasons.peerAppLaunched) {
  // The Device application caused the Companion to start
  console.log("Device application was launched!")
}

//When the watch sends a message
messaging.peerSocket.onmessage = evt => {
  console.log("Data recieved: " + evt.data); //Log it
  var url = host + "/fitbit"; // add a path to the URL
  fetch(url, {
      method : "POST",
      headers : myHeaders,
      body: evt.data}) // Build the request
    .then(function(response){
      return response.json();}) //Extract JSON from the response
    .then(function(data) {             
      console.log("Got response from server:", JSON.stringify(data)); // Log ig
      messaging.peerSocket.send(JSON.stringify(data)); }) // Send it to the watch as a JSON string
    .catch(function(error) {
      console.log(error);}); // Log any errors with Fetch
}