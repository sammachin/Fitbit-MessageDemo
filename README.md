# Fitbit-MessageDemo


![screenshot](https://raw.githubusercontent.com/sammachin/Fitbit-MessageDemo/master/screenshot.png)


Example app for the FitBit Ionic to show communication between a watch app and a Web API via a companion app.

The app simply looks for button presses (up or down) and then sends those over the message channel to the companion app which in turn forms a new JSON payload containing the button that was pressed and POSTs that to a Web API.

I've also included a VERY simple WebAPI with this running on AWS Lambda which simply responds with JSON containing the timestamp in Unix time. eg:
`{"ts":"1512407727"}`

You can change this endpoint by editing the host const in line 7 of the companion app

When the server responds the companion app then sends that JSON over the message channel back to the watch which displays it on the screen.

This isn't really meant to do much but I found it a useful learning excersise for understanding communication so I'm shaing it for others to use as a base. 

PR's welcome 



## Privacy Policy

If you use the app "as-is" then your watch/phone will make requests to my lambda function telling me which buton you pressed, to the best of my knowledge there is no personal data included in these requests and I am not aiming to collect anything as such, the only information that is recorded is the standard AWS Lambda & APi Gateway server logs. 
