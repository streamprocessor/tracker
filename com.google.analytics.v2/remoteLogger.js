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