define(["jquery", "app/builds"], function($, Builds) {

    $(function() {
        // Check if we have to load specializations or not
        if ($(".specialization-definition").length > 0) {
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

                    $(".specialization-definition").each(function() {
                        var $this = $(this);
                        var name = $this.attr("data-name");
                        var major1 = $this.attr("data-major1");
                        var major2 = $this.attr("data-major2");
                        var major3 = $this.attr("data-major3");
                        var spec = specs[name];

                        $this.empty();
                        $this.css("background-image", "url(" + spec.background + ")").addClass("specialization").removeClass("specialization-definition");
                        $("<span>", { "class": "hover-overlay" }).appendTo($this);
                        $("<span>", { "class": "name" }).text(spec.name).appendTo($this);
                        $("<span>", {
                            "class": "trait-icon trait-icon-minor",
                            "css": { "background-image": "url(" + traits[spec.minor_traits[0]].icon + ")" },
                            "title": traits[spec.minor_traits[0]].name
                        }).appendTo($this);
                        $("<span>", { "class": "line line-mid" + Builds.specializations.convertNumberToLocation(major1) }).appendTo($this);
                        $("<span>", { "class": "trait-set-major" })
                            .append($("<span>", { "class": "trait-icon trait-icon-background" })
                                .append($("<span>", {
                                    "class": "trait-icon trait-icon-major" + (major1 == "1" ? " active" : ""),
                                    "css": { "background-image": "url(" + traits[spec.major_traits[0]].icon + ")" },
                                    "title": traits[spec.major_traits[0]].name
                                }))
                            )
                            .append($("<span>", { "class": "trait-icon trait-icon-background" })
                                .append($("<span>", {
                                    "class": "trait-icon trait-icon-major" + (major1 == "2" ? " active" : ""),
                                    "css": { "background-image": "url(" + traits[spec.major_traits[1]].icon + ")" },
                                    "title": traits[spec.major_traits[1]].name
                                }))
                            )
                            .append($("<span>", { "class": "trait-icon trait-icon-background" })
                                .append($("<span>", {
                                    "class": "trait-icon trait-icon-major" + (major1 == "3" ? " active" : ""),
                                    "css": { "background-image": "url(" + traits[spec.major_traits[2]].icon + ")" },
                                    "title": traits[spec.major_traits[2]].name
                                }))
                            )
                        .appendTo($this);
                        $("<span>", { "class": "line line-" + Builds.specializations.convertNumberToLocation(major1) + "mid" }).appendTo($this);
                        $("<span>", {
                            "class": "trait-icon trait-icon-minor",
                            "css": { "background-image": "url(" + traits[spec.minor_traits[1]].icon + ")" },
                            "title": traits[spec.minor_traits[1]].name
                        }).appendTo($this);
                        $("<span>", { "class": "line line-mid" + Builds.specializations.convertNumberToLocation(major2) }).appendTo($this);
                        $("<span>", { "class": "trait-set-major" })
                            .append($("<span>", { "class": "trait-icon trait-icon-background" })
                                .append($("<span>", {
                                    "class": "trait-icon trait-icon-major" + (major2 == "1" ? " active" : ""),
                                    "css": { "background-image": "url(" + traits[spec.major_traits[3]].icon + ")" },
                                    "title": traits[spec.major_traits[3]].name
                                }))
                            )
                            .append($("<span>", { "class": "trait-icon trait-icon-background" })
                                .append($("<span>", {
                                    "class": "trait-icon trait-icon-major" + (major2 == "2" ? " active" : ""),
                                    "css": { "background-image": "url(" + traits[spec.major_traits[4]].icon + ")" },
                                    "title": traits[spec.major_traits[4]].name
                                }))
                            )
                            .append($("<span>", { "class": "trait-icon trait-icon-background" })
                                .append($("<span>", {
                                    "class": "trait-icon trait-icon-major" + (major2 == "3" ? " active" : ""),
                                    "css": { "background-image": "url(" + traits[spec.major_traits[5]].icon + ")" },
                                    "title": traits[spec.major_traits[5]].name
                                }))
                            )
                        .appendTo($this);
                        $("<span>", { "class": "line line-" + Builds.specializations.convertNumberToLocation(major2) + "mid" }).appendTo($this);
                        $("<span>", {
                            "class": "trait-icon trait-icon-minor",
                            "css": { "background-image": "url(" + traits[spec.minor_traits[2]].icon + ")" },
                            "title": traits[spec.minor_traits[2]].name
                        }).appendTo($this);
                        $("<span>", { "class": "line line-mid" + Builds.specializations.convertNumberToLocation(major3) }).appendTo($this);
                        $("<span>", { "class": "trait-set-major" })
                            .append($("<span>", { "class": "trait-icon trait-icon-background" })
                                .append($("<span>", {
                                    "class": "trait-icon trait-icon-major" + (major3 == "1" ? " active" : ""),
                                    "css": { "background-image": "url(" + traits[spec.major_traits[6]].icon + ")" },
                                    "title": traits[spec.major_traits[6]].name
                                }))
                            )
                            .append($("<span>", { "class": "trait-icon trait-icon-background" })
                                .append($("<span>", {
                                    "class": "trait-icon trait-icon-major" + (major3 == "2" ? " active" : ""),
                                    "css": { "background-image": "url(" + traits[spec.major_traits[7]].icon + ")" },
                                    "title": traits[spec.major_traits[7]].name
                                }))
                            )
                            .append($("<span>", { "class": "trait-icon trait-icon-background" })
                                .append($("<span>", {
                                    "class": "trait-icon trait-icon-major" + (major3 == "3" ? " active" : ""),
                                    "css": { "background-image": "url(" + traits[spec.major_traits[8]].icon + ")" },
                                    "title": traits[spec.major_traits[8]].name
                                }))
                            )
                        .appendTo($this);
                    });
                }, function(status, text, data, event) {
                    console.log("Could not load traits from API: ", status, text, data);
                });
            }, function(status, text, data, event) {
                console.log("Could not load specializations from API: ", status, text, data);
            });
        }

        if ($(".weapon-skills-definition").length > 0 || $(".utility-skills-definition").length > 0) {
            Builds.skills.preload(function(data, event) {
                $(".weapon-skills-definition").each(function() {
                    var $this = $(this);
                    var profession = $this.attr("data-profession");
                    var mainHand = $this.attr("data-mainhand");
                    var offHand = $this.attr("data-offhand");
                    var extraParam = $this.attr("data-extra");

                    var weaponSkills = Builds.skills.getWeaponSkills(profession, mainHand, offHand, extraParam);
                    $this.empty();
                    $this.addClass("skills weapon-skills").removeClass("weapon-skills-definition");
                    for (var i = 0; i < 5; i++) {
                        if (weaponSkills[i]) {
                            $("<span>", {
                                "class": "skill-icon weapon-skill-icon",
                                "css": { "background-image": "url(" + weaponSkills[i].icon + ")" },
                                "title": weaponSkills[i].name
                            }).appendTo($this);
                        } else {
                            $("<span>", { "class": "skill-icon weapon-skill-icon" }).appendTo($this);
                        }
                    }
                    $("<span>", { "class": "skills-description weapon-skills-description" }).text(mainHand + (offHand ? "/" + offHand : "")).appendTo($this);
                });

                $(".utility-skills-definition").each(function() {
                    var $this = $(this);
                    var skillHealing = $this.attr("data-healing");
                    var skillUtility1 = $this.attr("data-utility1");
                    var skillUtility2 = $this.attr("data-utility2");
                    var skillUtility3 = $this.attr("data-utility3");
                    var skillElite = $this.attr("data-elite");
                    var skills = [skillHealing, skillUtility1, skillUtility2, skillUtility3, skillElite];

                    var utilitySkills = Builds.skills.getByNames(skills);
                    $this.empty();
                    $this.addClass("skills utility-skills").removeClass("utility-skills-definition");
                    for (var i = 0; i < 5; i++) {
                        var utilitySkill = utilitySkills[skills[i]];
                        if (utilitySkill) {
                            $("<span>", {
                                "class": "skill-icon utility-skill-icon",
                                "css": { "background-image": "url(" + utilitySkill.icon + ")" },
                                "title": utilitySkill.name
                            }).appendTo($this);
                        } else {
                            $("<span>", { "class": "skill-icon utility-skill-icon" }).appendTo($this);
                        }
                    }
                    $("<span>", { "class": "skills-description utility-skills-description" }).text(skills.join(", ")).appendTo($this);
                });
            }, function(status, text, data, event) {
                console.log("Could not load skills from API: ", status, text, data);
            });
        }
    });

});
