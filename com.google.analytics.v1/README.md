# Install tracker in Google Tag Manager

Description: GTM Google Analytics custom task to copy GA payload and send to StreamProcessor collector endpoint.
* 1. Create a variable in google tag manager, paste the code from client.js and name it "customTask"
* 2. Create a string variable named collectorEndpoint and set the value to the domain of your collector (something like mycollector.com or europe-west1-mycollector.cloudfunctions.net/)
* 3. Set field for the Google Analytics Settings variable (in GTM) with field name "customTask" and value "{{customTask}}" 
* 4. Create version and publish it in GTM