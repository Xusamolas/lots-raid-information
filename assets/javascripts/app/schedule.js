define(["jquery", "Ajax.class"], function($, FW_Ajax) {

    function Schedule() { }

    Schedule._getJSON = function(url, doSuccess, doError) {
        FW_Ajax().getJSON(url, doSuccess, doError, true);
    };

    Schedule.get = function(type, onSuccess, onError) {
        this._getJSON("https://legacyofthesix.com/api/events/upcoming", function(data, event) {
            var events = $.grep(data, function(e) {
                return e.type.toLowerCase() == type;
            });
            onSuccess(events, event);
        }, onError);
    };

    return Schedule;

});
