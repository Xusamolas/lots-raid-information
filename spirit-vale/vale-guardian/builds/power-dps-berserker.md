---
layout: default
title: "Vale Guardian: Power DPS Berserker"
breadcrumb_title: Power DPS Berserker
navigation:
    visible: false

build_weight: "003.berserker-power"
build:
    visible: true
    name: Power DPS Berserker
    type: Power
    profession: Berserker
---
{% assign variants = "" | split: "|" %}
{% assign variant_titles = "" | split: "|" %}

# Vale Guardian: Builds &ndash; Power DPS Berserker
{% include templates/messages/build-unfinished.html %}

The Berserker's role is to stick on the boss and provide the party with Might by using Forceful Greatsword and Phalanx Strength. You primarily stick to using the greatsword unless CC is needed. The build aims to support the raid-wide DPS with said Might as well as the buffs provided by the banners mentioned below.
Opening up a fight you can use Signet of Fury to instantly fill your adrenaline bar and go berserk. Staying in this mode is your primary damage modifier as you can abuse the low cooldown of Arc Divider to keep Berserker's Power up. Don't neglect using Hundred Blades on cooldown as it is your main damage skill. Whirlwind Attack can be used to dodge the blue circles while not losing out on damage. However in order to maximise personal damage output, it's recommended one stays below 100% endurance to trigger the 10% damage modifier on Stick and Move.
Only during CC phases (and split phases in order to kill the colored guardian), you swap to your mace/mace in order to CC the Vale Guardian. Additionally going berserk will also activate a taunt which helps drain the breakbars.

During the split phases, the Berserkers split up and go to the **Green Guardian** and the **Blue Guardian**.

## Build
{% capture variant_title %}Default{% endcapture %}
{% capture variant %}
The Berserker uses Berserker's gear.

### Armor
Ideally all the armor pieces have Superior Runes of the Scholar.

### Weapons
{% include templates/builds/weapon-skills.html profession="Warrior" mainhand="Greatsword" %}
{% include templates/builds/weapon-skills.html profession="Warrior" mainhand="Mace" offhand="Mace" %}
Ideally these weapons have Sigils of Force and Sigils of Air.

### Utilities
{% include templates/builds/utility-skills.html healing="Blood Reckoning" utility1="Signet of Fury" utility2="Banner of Discipline" utility3="Banner of Strength" elite="Battle Standard" %}

### Traits
{% include templates/builds/specialization.html name="Strength" major1="2" major2="2" major3="1" %}
{% include templates/builds/specialization.html name="Tactics" major1="3" major2="3" major3="3" %}
{% include templates/builds/specialization.html name="Berserker" major1="1" major2="1" major3="1" %}

## Consumables
The stats that should be included in your food and utilities are:

- Power
- Precision
- Ferocity
- Boon Duration
{% endcapture %}
{% assign variants = variants | push: variant %}
{% assign variant_titles = variant_titles | push: variant_title %}
{% comment %}===================================================================================================={% endcomment %}

{% capture variant_title %}Shield CC{% endcapture %}
{% capture variant %}
*This variant only differs with the off-hand CC weapon set. Instead of a mace, it's a shield.*

The Berserker uses Berserker's gear.

### Armor
Ideally all the armor pieces have Superior Runes of the Scholar.

### Weapons
{% include templates/builds/weapon-skills.html profession="Warrior" mainhand="Greatsword" %}
{% include templates/builds/weapon-skills.html profession="Warrior" mainhand="Mace" offhand="Shield" %}
Ideally these weapons have Sigils of Force and Sigils of Air.

### Utilities
{% include templates/builds/utility-skills.html healing="Blood Reckoning" utility1="Signet of Fury" utility2="Banner of Discipline" utility3="Banner of Strength" elite="Battle Standard" %}

### Traits
{% include templates/builds/specialization.html name="Strength" major1="2" major2="2" major3="1" %}
{% include templates/builds/specialization.html name="Tactics" major1="3" major2="3" major3="3" %}
{% include templates/builds/specialization.html name="Berserker" major1="1" major2="1" major3="1" %}

## Consumables
The stats that should be included in your food and utilities are:

- Power
- Precision
- Ferocity
- Boon Duration
{% endcapture %}
{% assign variants = variants | push: variant %}
{% assign variant_titles = variant_titles | push: variant_title %}

{% include templates/builds/print-variants.html variants=variants variant_titles=variant_titles %}

## Change history
28 January 2016 *(Archomeda)*:
: - Added shield as variant

25 January 2016 *(Archomeda)*:
: - Removed the Superior Rune of Strength as Heralds and Berserkers give enough might (the extra might duration is wasted anyway)

18 December 2015 *(Archomeda)*:
: - Initial draft
