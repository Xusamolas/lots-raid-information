---
sitemap:
    exclude: "yes"
---

define(["jquery", "qtip"], function($) {

    function Tooltip() { }

    Tooltip._parseText = function(text) {
        var regexColor = /<c=@(.*)>(.*)<\/c>/;
        text = text.replace(regexColor, '<span class="tooltip-color-$1">$2</span>').replace("\n", "<br>");
        return text;
    };

    Tooltip._generate = function(idPrefix, obj) {
        var tooltip = $("<div>", { "id": "tooltip-" + idPrefix + "-" + obj.id })
            .append($("<div>", { "class": "tooltip-name" }).text(obj.name))
            .append($("<div>", { "class": "tooltip-description" }).html(this._parseText(obj.description)));

        if (obj.facts) {
            var hasFacts = false;
            var facts = $("<div>", { "class": "tooltip-facts" });
            for (var i = 0; i < obj.facts.length; i++) {
                var fact = obj.facts[i];
                if (fact.type != "Recharge" && !fact.icon) {
                    // Why no icon here?
                    console.log("Fact haz no icon :(", fact, obj);
                }
                var isFact = true;
                var factElement = $("<div>", { "class": "tooltip-fact tooltip-" + fact.type.toLowerCase() })
                    .append($("<img>", { "class": "tooltip-fact-icon", "src": fact.icon }));
                switch (fact.type) {
                    case "Recharge":
                        // Add this directly to the tooltip instead
                        tooltip.append($("<div>", { "class": "tooltip-recharge" }).text(fact.value));
                        isFact = false;
                        break;
                    case "AttributeAdjust":
                    case "Number":
                    case "Range":
                        factElement.append($("<span>", { "class": "tooltip-fact-description" }).text(fact.text + ": " + fact.value));
                        break;
                    case "Buff":
                        factElement.append($("<span>", { "class": "tooltip-fact-description" }).text(fact.status + (fact.duration ? "(" + fact.duration + "s)" : "") + ": " + fact.description));
                        if (fact.apply_count > 1) {
                            factElement.append($("<span>", { "class": "tooltip-fact-stack" }).text(fact.apply_count));
                        }
                        break;
                    case "BuffConversion":
                    case "Percent":
                        factElement.append($("<span>", { "class": "tooltip-fact-description" }).text(fact.text + ": " + fact.percent + "%"));
                        break;
                    case "ComboField":
                        factElement.append($("<span>", { "class": "tooltip-fact-description" }).text(fact.text + ": " + fact.field_type));
                        break;
                    case "ComboFinisher":
                        factElement.append($("<span>", { "class": "tooltip-fact-description" }).text(fact.text + ": " + fact.finisher_type + " (" + fact.percent + "% chance)"));
                        break;
                    case "Damage":
                        factElement.append($("<span>", { "class": "tooltip-fact-description" }).text(fact.text));
                        if (fact.hit_count > 1) {
                            factElement.append($("<span>", { "class": "tooltip-fact-stack" }).text(fact.hit_count));
                        }
                        break;
                    case "Distance":
                    case "Radius":
                        factElement.append($("<span>", { "class": "tooltip-fact-description" }).text(fact.text + ": " + fact.distance));
                        break;
                    case "NoData":
                    case "Unblockable":
                        factElement.append($("<span>", { "class": "tooltip-fact-description" }).text(fact.text));
                        break;
                    case "PrefixedBuff":
                        factElement = $("<div>", { "class": "tooltip-fact tooltip-" + fact.type.toLowerCase() })
                            .append($("<span>", { "class": "tooltip-fact-icon" })
                                .append($("<img>", { "src": fact.prefix.icon }))
                                .append($("<img>", { "src": fact.icon }))
                            ).append($("<span>", { "class": "tooltip-fact-description" }).text(fact.status + (fact.duration ? "(" + fact.duration + "s)" : "") + ": " + fact.description));
                        if (fact.apply_count > 1) {
                            factElement.append($("<span>", { "class": "tooltip-fact-prefixedstack" }).text(fact.apply_count));
                        }
                        break;
                    case "Time":
                        factElement.append($("<span>", { "class": "tooltip-fact-description" }).text(fact.text + ": " + fact.duration + " second" + (fact.duration != 1 ? "s" : "")));
                        break;
                    default:
                        isFact = false
                        break;
                }
                if (isFact) {
                    hasFacts = true;
                    facts.append(factElement);
                }
            }
            if (hasFacts) {
                tooltip.append(facts);
            }
        }

        return tooltip;
    };

    Tooltip.generateSkill = function(obj) {
        return this._generate("skill", obj);
    };

    Tooltip.generateTrait = function(obj) {
        return this._generate("trait", obj);
    };

    return Tooltip;

});
