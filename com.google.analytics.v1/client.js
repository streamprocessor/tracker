/*
Business Source License 1.1
Parameters
Licensor:             Robert Sahlin
Licensed Work:        StreamProcessor
                      The Licensed Work is (c) 2020 Robert Sahlin.
Additional Use Grant: You may use the Licensed Work when the Licensed Work is 
                      processing less than 10 Million events per month, 
                      provided that you do not use the Licensed Work for a 
                      commercial offering that allows third parties to access
                      the functionality of the Licensed Work so that such third
                      parties directly benefit from the features of the Licensed Work.
Change Date:          12 months after code release (major or minor semantic version upgrade)
Change License:       GNU AFFERO GENERAL PUBLIC LICENSE, Version 3
Please contact the licensor if you need a license for use not covered by the additional use grant.
*/

function() {
	return function(model) {		
	    var globalSendTaskName = '_' + model.get('trackingId') + '_sendHitTask';
	    var originalSendHitTask = window[globalSendTaskName] = window[globalSendTaskName] || model.get('sendHitTask');
        // Replace {{collectorEndpoint}}
        var endpoint = "https://{{collectorEndpoint}}/collector/namespace/com.google.analytics.v1/name/Hit";

	    model.set('sendHitTask', function(sendModel) {
            var payload = sendModel.get('hitPayload');
            var body = {};
            body['payload'] = payload;
            try{
                originalSendHitTask(sendModel);
            }catch(e){
                console.log("error on payload");
                console.log(e);
            }          	
            if(!navigator.sendBeacon(endpoint, JSON.stringify(body))){
                var beacon = document.createElement("img");
                beacon.src = endpoint + '?' + payload;
            }
		});
	};
}