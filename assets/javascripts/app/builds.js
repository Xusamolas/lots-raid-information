define(["jquery", "GW2.class"], function($, gw2) {

    function Builds() {
        this.specializations = {};
    }

    Builds.skills = {
        _cache: null,
        preload: function(onSuccess, onError) {
            gw2().getSkillsByID("all", "en", function(data, event) {
                _cache = data;
                onSuccess(data, event);
            }, onError);
        },
        getByName: function(name) {
            var skillsList = $.grep(_cache, function(e) {
                return e.name == name;
            });
            if (skillsList.length > 0) {
                return skillsList[0];
            } else {
                return null;
            }
        },
        getByNames: function(names) {
            var skillsList = $.grep(_cache, function(e) {
                return $.inArray(e.name, names) > -1;
            });
            var skills = {};
            $.each(skillsList, function() {
                if (!skills[this.name] || this.flip_skill) {
                    skills[this.name] = this;
                }
            });
            return skills;
        },
        getWeaponSkills: function(profession, mainHand, offHand, extraParam) {
            var weaponSkillsList = $.grep(_cache, function(e) {
                var result = true;
                if (result) {
                    result = $.inArray(profession, e.professions) > -1;
                }
                if (result) {
                    // We want the first attack in the chain
                    result = !e.prev_chain;
                }
                if (result) {
                    if ((mainHand == "Axe" || mainHand == "Dagger" || mainHand == "Mace" || mainHand == "Pistol" || mainHand == "Sword" || mainHand == "Scepter")
                        && (e.slot == "Weapon_1" || e.slot == "Weapon_2" || e.slot == "Weapon_3")
                        && e.weapon_type == mainHand) {
                        // Correct MH
                    } else if ((mainHand == "Greatsword" || mainHand == "Hammer" || mainHand == "Longbow" || mainHand == "Rifle" || mainHand == "Short bow" || mainHand == "Staff" || mainHand == "Harpoon gun" || mainHand == "Spear" || mainHand == "Trident")
                        && (e.slot == "Weapon_1" || e.slot == "Weapon_2" || e.slot == "Weapon_3" || e.slot == "Weapon_4" || e.slot == "Weapon_5")
                        && e.weapon_type == mainHand) {
                        // Correct 2H
                    } else if ((offHand == "Axe" || offHand == "Dagger" || offHand == "Mace" || offHand == "Pistol" || offHand == "Sword" || offHand == "Focus" || offHand == "Shield" || offHand == "Torch" || offHand == "Warhorn")
                        && (e.slot == "Weapon_4" || e.slot == "Weapon_5")
                        && e.weapon_type == offHand) {
                        // Correct OH
                    } else {
                        // No match
                        result = false;
                    }
                }
                if (result && profession == "Elementalist") {
                    // Elementalists have different skills based on their attunement
                    result = extraParam == e.attunement;
                }
                return result;
            });
            var weaponSkills = [null, null, null, null, null];
            $.each(weaponSkillsList, function() {
                // Skills with a flip skill are presumed to be the main skill
                switch (this.slot) {
                    case "Weapon_1":
                        if (!weaponSkills[0] || this.flip_skill) {
                            weaponSkills[0] = this;
                        }
                        break;
                    case "Weapon_2":
                        if (!weaponSkills[1] || this.flip_skill) {
                            weaponSkills[1] = this;
                        }
                        break;
                    case "Weapon_3":
                        if (!weaponSkills[2] || this.flip_skill) {
                            weaponSkills[2] = this;
                        }
                        break;
                    case "Weapon_4":
                        if (!weaponSkills[3] || this.flip_skill) {
                            weaponSkills[3] = this;
                        }
                        break;
                    case "Weapon_5":
                        if (!weaponSkills[4] || this.flip_skill) {
                            weaponSkills[4] = this;
                        }
                        break;
                }
            });
            return weaponSkills;
        }
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
