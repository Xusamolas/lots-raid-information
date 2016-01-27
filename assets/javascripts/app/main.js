define(["jquery", "app/builds", "app/tooltip", "qtip"], function($, Builds, Tooltip) {

    function bootstrapSpecializations() {
        Builds.specializations.preload(function(data, event) {
            // Get all specializations beforehand
            var specNames = $(".specialization-definition").map(function() {
                return $(this).attr("data-name");
            });
            var specs = Builds.specializations.getByNames(specNames);

            // Get all traits beforehand
            var traitIds = $.map($.map(specs, function(spec) {
                return [spec.minor_traits, spec.major_traits];
            }), function(trait) {
                return trait;
            });

            Builds.traits.getByIds(traitIds, function(data, event) {
                var traits = data;

                var createLine = function(start, end) {
                    return $("<span>", { "class": "line line-" + start + end });
                }
                var createMinor = function(trait) {
                    return $("<span>", {
                        "class": "trait-icon trait-icon-minor",
                        "css": { "background-image": "url(" + trait.icon + ")" },
                        "data-trait-id": trait.id,
                        "title": trait.name
                    });
                };
                var createMajor = function(trait, isActive) {
                    return $("<span>", { "class": "trait-icon trait-icon-background" })
                        .append($("<span>", {
                            "class": "trait-icon trait-icon-major" + (isActive ? " active" : ""),
                            "css": { "background-image": "url(" + trait.icon + ")" },
                            "data-trait-id": trait.id,
                            "title": trait.name
                        })
                    );
                };
                var createMajorSet = function(trait1, trait2, trait3, activeTrait) {
                    return $("<span>", { "class": "trait-set-major" })
                        .append(createMajor(trait1, activeTrait == "1"))
                        .append(createMajor(trait2, activeTrait == "2"))
                        .append(createMajor(trait3, activeTrait == "3"));
                };

                $(".specialization-definition").each(function() {
                    var $this = $(this);
                    var name = $this.attr("data-name");
                    var major1 = $this.attr("data-major1");
                    var major2 = $this.attr("data-major2");
                    var major3 = $this.attr("data-major3");
                    var spec = specs[name];

                    // Build and insert specialization line
                    $this.empty();
                    $this.css("background-image", "url(" + spec.background + ")").addClass("specialization").removeClass("specialization-definition");
                    $("<span>", { "class": "hover-overlay" }).appendTo($this);
                    $("<span>", { "class": "name" }).text(spec.name).appendTo($this);
                    createMinor(traits[spec.minor_traits[0]]).appendTo($this);
                    createLine("mid", Builds.specializations.convertNumberToLocation(major1)).appendTo($this);
                    createMajorSet(traits[spec.major_traits[0]], traits[spec.major_traits[1]], traits[spec.major_traits[2]], major1).appendTo($this);
                    createLine(Builds.specializations.convertNumberToLocation(major1), "mid").appendTo($this);
                    createMinor(traits[spec.minor_traits[1]]).appendTo($this);
                    createLine("mid", Builds.specializations.convertNumberToLocation(major2)).appendTo($this);
                    createMajorSet(traits[spec.major_traits[3]], traits[spec.major_traits[4]], traits[spec.major_traits[5]], major2).appendTo($this);
                    createLine(Builds.specializations.convertNumberToLocation(major2), "mid").appendTo($this);
                    createMinor(traits[spec.minor_traits[2]]).appendTo($this);
                    createLine("mid", Builds.specializations.convertNumberToLocation(major3)).appendTo($this);
                    createMajorSet(traits[spec.major_traits[6]], traits[spec.major_traits[7]], traits[spec.major_traits[8]], major3).appendTo($this);

                    // Build tooltips
                    var $tooltips = $("#tooltips");
                    for (var i = 0; i < spec.minor_traits.length; i++) {
                        Tooltip.generateTrait(traits[spec.minor_traits[i]]).appendTo($tooltips);
                    }
                    for (var i = 0; i < spec.major_traits.length; i++) {
                        Tooltip.generateTrait(traits[spec.major_traits[i]]).appendTo($tooltips);
                    }
                });

                // Assign tooltips
                $(".trait-icon").each(function() {
                    var $this = $(this);
                    var trait_id = $this.attr("data-trait-id");
                    if (trait_id) {
                        $this.qtip({ content: { text: $("#tooltip-trait-" + trait_id) }});
                    }
                });
            }, function(status, text, data, event) {
                console.log("Could not load traits from API: ", status, text, data);
            });
        }, function(status, text, data, event) {
            console.log("Could not load specializations from API: ", status, text, data);
        });
    }

    function bootstrapSkills() {
        Builds.skills.preload(function(data, event) {
            $(".weapon-skills-definition").each(function() {
                var $this = $(this);
                var $tooltips = $("#tooltips");
                var profession = $this.attr("data-profession");
                var mainHand = $this.attr("data-mainhand");
                var offHand = $this.attr("data-offhand");
                var extraParam = $this.attr("data-extra");

                var weaponSkills = Builds.skills.getWeaponSkills(profession, mainHand, offHand, extraParam);
                $this.empty();
                $this.addClass("skills weapon-skills").removeClass("weapon-skills-definition");
                $("<div>", { "class": "skills-description weapon-skills-description" }).text(mainHand + (offHand ? "/" + offHand : "")).appendTo($this);
                for (var i = 0; i < weaponSkills.length; i++) {
                    var weaponSkill = weaponSkills[i];
                    if (weaponSkill) {
                        $("<span>", {
                            "class": "skill-icon weapon-skill-icon",
                            "css": { "background-image": "url(" + weaponSkill.icon + ")" },
                            "data-skill-id": weaponSkill.id,
                            "title": weaponSkill.name
                        }).appendTo($this);
                    } else {
                        $("<span>", { "class": "skill-icon weapon-skill-icon" }).appendTo($this);
                    }
                    Tooltip.generateSkill(weaponSkill).appendTo($tooltips);
                }
            });

            $(".utility-skills-definition").each(function() {
                var $this = $(this);
                var $tooltips = $("#tooltips");
                var skills = [$this.attr("data-healing"), $this.attr("data-utility1"), $this.attr("data-utility2"), $this.attr("data-utility3"), $this.attr("data-elite")];

                var utilitySkills = Builds.skills.getByNames(skills);
                $this.empty();
                $this.addClass("skills utility-skills").removeClass("utility-skills-definition");
                for (var i = 0; i < skills.length; i++) {
                    var utilitySkill = utilitySkills[skills[i]];
                    if (utilitySkill) {
                        $("<span>", {
                            "class": "skill-icon utility-skill-icon",
                            "css": { "background-image": "url(" + utilitySkill.icon + ")" },
                            "data-skill-id": utilitySkill.id,
                            "title": utilitySkill.name
                        }).appendTo($this);
                    } else {
                        $("<span>", { "class": "skill-icon utility-skill-icon" }).appendTo($this);
                    }
                    Tooltip.generateSkill(utilitySkill).appendTo($tooltips);
                }
                $("<span>", { "class": "skills-description utility-skills-description" }).text(skills.join(", ")).appendTo($this);
            });

            // Assign tooltips
            $(".skill-icon").each(function() {
                var $this = $(this);
                var skill_id = $this.attr("data-skill-id");
                if (skill_id) {
                    $this.qtip({ content: { text: $("#tooltip-skill-" + skill_id) }});
                }
            });
        }, function(status, text, data, event) {
            console.log("Could not load skills from API: ", status, text, data);
        });
    }

    $(function() {
        // No documentation on how to do this "properly"...
        $.fn.qtip.defaults.show.effect = false;
        $.fn.qtip.defaults.hide.effect = false;
        $.fn.qtip.defaults.position.target = "mouse";
        $.fn.qtip.defaults.position.my = "top left";
        $.fn.qtip.defaults.position.adjust.x = 20;
        $.fn.qtip.defaults.style.classes = "tooltip-gw2";

        // Check if we have to load specializations or not
        if ($(".specialization-definition").length > 0) {
            bootstrapSpecializations();
        }

        if ($(".weapon-skills-definition").length > 0 || $(".utility-skills-definition").length > 0) {
            bootstrapSkills();
        }
    });

});
