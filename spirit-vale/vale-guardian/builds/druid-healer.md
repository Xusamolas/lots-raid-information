---
layout: default
navigation:
    visible: false

build_weight: "002.druid-healer"
build:
    visible: true
    name: Druid Healer
    type: Healer
    profession: Druid
---
{% include urls.md %}

# Vale Guardian: Builds &ndash; Druid Healer
{% include templates/messages/build-unfinished.html %}

The healer's job sounds very easy: keep everyone alive as much as possible.
Keep an eye on the HP of other players and heal accordingly.
Of course you should still do some damage to the Vale Guardian if possible, but it's not your main priority.

During the split phases, the tank goes to the **Blue Guardian**.

## Build
The healer can use both Zealot's gear or Berserker's gear, or a mix.
It depends if you're willing to spend the gold and time required for Zealot's gear or not, but Berserker's should suffice.
If you feel that the healing is lacking a bit, you can try to mix in some Healing Power from other stat types.
Just make sure to not go above the toughness level of the tank.
Your pets are the Tiger and the Bristleback.

### Armor
Ideally all the armor pieces have Superior Runes of the Scholar or Superior Runes of the Druid.

### Weapons
{% include templates/builds/weapon-skills.html profession="Ranger" mainhand="Sword" offhand="Axe" %}
{% include templates/builds/weapon-skills.html profession="Ranger" mainhand="Staff" %}
Ideally these weapons have Sigils of Force and Sigils of Water.

### Utilities
{% include templates/builds/utility-skills.html healing="Glyph of Rejuvenation" utility1="Frost Spirit" utility2="Glyph of Empowerment" utility3="Glyph of Alignment" elite="Glyph of Unity" %}

### Traits
{% include templates/builds/specialization.html name="Marksmanship" major1="3" major2="2" major3="1" %}
{% include templates/builds/specialization.html name="Skirmishing" major1="2" major2="1" major3="1" %}
{% include templates/builds/specialization.html name="Druid" major1="2" major2="2" major3="1" %}

## Consumables
Food:

- Delicious Rice Ball
- Or equivalents

Utility:

- Furious Tuning Crystal
- Superior Sharpening Stone
- Tin of Fruitcake
- Or equivalents

## Change history
23 January 2016 *(Archomeda)*:
: - Added pets
- Changed gear set and clarified that Berserker's gear is viable
- Changed traits to be more offensive
- Changed utilities to mostly glyphs

18 December 2015 *(Archomeda)*:
: - Initial draft
