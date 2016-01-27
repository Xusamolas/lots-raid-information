define(["jquery", "qtip"], function($) {

    function Tooltip() { }

    Tooltip._parseText = function(text) {
        var regexColor = /<c=@(.*)>(.*)<\/c>/;
        text = text.replace(regexColor, '<span class="tooltip-color-$1">$2</span>').replace("\n", "<br>");
        return text;
    };

    Tooltip.generateSkill = function(obj) {
        return $("<div>", { "id": "tooltip-skill-" + obj.id })
            .append($("<div>", { "class" : "tooltip-name" }).text(obj.name))
            .append($("<div>", { "class" : "tooltip-description" }).html(this._parseText(obj.description)));
    };

    Tooltip.generateTrait = function(obj) {
        return $("<div>", { "id": "tooltip-trait-" + obj.id })
            .append($("<div>", { "class" : "tooltip-name" }).text(obj.name))
            .append($("<div>", { "class" : "tooltip-description" }).html(this._parseText(obj.description)));
    };

    return Tooltip;

});
