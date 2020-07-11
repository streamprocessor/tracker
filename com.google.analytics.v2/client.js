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

<script>
"use strict";
(function() {
    try {
        var proxied = window.navigator.sendBeacon;
        window.navigator.sendBeacon = function() {
            if (arguments && arguments[0].match(/google-analytics\.com.*v\=2\&/)) {
                // Replace [endpoint]
                var endpoint = "https://[endpoint]/collector/namespace/com.google.analytics.v2/name/Event";
              proxied.apply(this,[endpoint.concat('?',arguments[0].split("?")[1]),arguments[1]]);
            }
            return proxied.apply(this, arguments);
        };
    } catch (e) {}
})();
</script>