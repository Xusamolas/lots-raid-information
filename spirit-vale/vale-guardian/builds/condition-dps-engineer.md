---
layout: default
title: "Vale Guardian: Condition DPS Engineer"
breadcrumb_title: Condition DPS Engineer
navigation:
    visible: false

build_weight: "004.engineer-condition"
build:
    visible: true
    name: Condition DPS Engineer
    type: Conditions
    profession: Engineer
---
{% assign variants = "" | split: "|" %}
{% assign variant_titles = "" | split: "|" %}

# Vale Guardian: Builds &ndash; Condition DPS Engineer
{% include templates/messages/build-unfinished.html %}

The Engineer is mostly ranged and will go for the **green circles**.
If the rotation is too complicated, focus on dealing as much burning as possible, and don't forget about vulnerability stacks.

When standing on a green circle, use your Healing Turret with a couple of blast finishers in order to heal other players that are standing next to you.
This will help you and your teammates to stay alive when the lightning strikes.

The Engineer should also keep an eye on **seekers** and slow them down with immobilizes or chill, or knock them away.
This is very important on the green circles.

During the split phase, the Engineer goes to the **Red Guardian**.

## Build
{% capture variant_title %}Default{% endcapture %}
{% capture variant %}
The Engineer uses Viper gear.
If Viper's is not available, use Sinister.
If Sinister is not available on a trinket, use Rampager's.

### Armor
Ideally all the armor pieces have Superior Runes of the Berserker.

### Weapons
{% include templates/builds/weapon-skills.html profession="Engineer" mainhand="Pistol" offhand="Pistol" %}
Ideally these weapons have Sigils of Malice and Sigils of Bursting.

### Utilities
{% include templates/builds/utility-skills.html healing="Healing Turret" utility1="Bomb Kit" utility2="Grenade Kit" utility3="Flamethrower" elite="Elite Mortar Kit" %}

### Traits
{% include templates/builds/specialization.html name="Explosives" major1="3" major2="2" major3="2" %}
{% include templates/builds/specialization.html name="Firearms" major1="1" major2="1" major3="3" %}
{% include templates/builds/specialization.html name="Tools" major1="2" major2="1" major3="2" %}

## Consumables
The stats that should be included in your food and utilities are:

- Condition Duration if it does not exceed +100% Condition Duration
- Condition Damage
{% endcapture %}
{% assign variants = variants | push: variant %}
{% assign variant_titles = variant_titles | push: variant_title %}

{% comment %}===================================================================================================={% endcomment %}

{% capture variant_title %}Survivability{% endcapture %}
{% capture variant %}
*This variant is meant for players who can't survive during the fight or who are low on health most of the time.
The Tools specialization is swapped out in favor of Inventions.*

The Engineer uses Viper gear.
If Viper's is not available, use Sinister.
If Sinister is not available on a trinket, use Rampager's.

### Armor
Ideally all the armor pieces have Superior Runes of the Berserker.

### Weapons
{% include templates/builds/weapon-skills.html profession="Engineer" mainhand="Pistol" offhand="Pistol" %}
Ideally these weapons have Sigils of Malice and Sigils of Bursting.

### Utilities
{% include templates/builds/utility-skills.html healing="Healing Turret" utility1="Bomb Kit" utility2="Grenade Kit" utility3="Flamethrower" elite="Elite Mortar Kit" %}

### Traits
{% include templates/builds/specialization.html name="Explosives" major1="3" major2="2" major3="2" %}
{% include templates/builds/specialization.html name="Firearms" major1="1" major2="1" major3="3" %}
{% include templates/builds/specialization.html name="Inventions" major1="2" major2="3" major3="2" %}

## Consumables
The stats that should be included in your food and utilities are:

- Condition Duration if it does not exceed +100% Condition Duration
- Condition Damage
{% endcapture %}
{% assign variants = variants | push: variant %}
{% assign variant_titles = variant_titles | push: variant_title %}

{% include templates/builds/print-variants.html variants=variants variant_titles=variant_titles %}

## Change history
27 January 2016 *(Archomeda)*:
: - Added a default variant that differs from the previous variant; the previous default variant is now known as the *Survivability* variant
- Changed Berserker's trinkets to Rampager's if no Viper's or Sinister is available

18 December 2015 *(Archomeda)*:
: - Initial draft
