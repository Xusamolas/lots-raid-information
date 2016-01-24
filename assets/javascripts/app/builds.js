define(["jquery", "GW2.class"], function($, gw2) {

    function Builds() {
        this.specializations = {};
    }

    Builds.specializations = {
        _cache: null,
        preload: function(onSuccess, onError) {
            gw2().getSpecializationsByID("all", "en", function(data, event) {
                _cache = data;
                onSuccess(data, event);
            }, onError);
        },
        getByName: function(name) {
            var specsList = $.grep(_cache, function(e) {
                return e.name == name;
            });
            if (specsList.length > 0) {
                return specsList[0];
            } else {
                return null;
            }
        },
        getByNames: function(names) {
            var specsList = $.grep(_cache, function(e) {
                return $.inArray(e.name, names) > -1;
            });
            var specs = {};
            $.each(specsList, function() {
                specs[this.name] = this;
            });
            return specs;
        },
        convertNumberToLocation: function(number) {
            switch(number) {
                case 1:
                case "1":
                    return "up";
                case 2:
                case "2":
                    return "mid";
                case 3:
                case "3":
                    return "down";
            }
        }
    };

    Builds.traits = {
        getByIds: function(ids, onSuccess, onError) {
            gw2().getTraitsByID(ids, "en", function(data, event) {
                var traits = {};
                $.each(data, function() {
                    traits[this.id] = this;
                })
                onSuccess(traits, event);
            }, onError);
        }
    }

    return Builds;

});
