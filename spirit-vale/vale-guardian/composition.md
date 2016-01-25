---
layout: default
navigation:
    visible: true
    title: Composition
weight: "001.001.003"
---
{% include urls.md %}

# Vale Guardian: Composition
There are many compositions that are viable for fighting against the Vale Guardian.
We generally have the following base setup:

{::comment}
Sorry, but this is currently done in raw HTML and templates.
Still have to figure out how this can be done nicer.
{:/comment}
{% include templates/composition/builds-list-start.html type="Tank" %}
<ul class="builds">
    <li>
        {% include templates/profession-icon.html profession="Chronomancer" %}
        <a href="{{ site.baseurl }}/spirit-vale/vale-guardian/builds/chronomancer-tank/">Chronomancer Tank</a>
        &times;1
    </li>
</ul>
{% include templates/composition/builds-list-end.html %}
{% include templates/composition/builds-list-start.html type="Healer" %}
<ul class="builds">
    <li>
        {% include templates/profession-icon.html profession="Druid" %}
        <a href="{{ site.baseurl }}/spirit-vale/vale-guardian/builds/druid-healer/">Druid Healer</a>
        &times;1
    </li>
</ul>
{% include templates/composition/builds-list-end.html %}
{% include templates/composition/builds-list-start.html type="Power" %}
<ul class="builds">
    <li>
        {% include templates/profession-icon.html profession="Berserker" %}
        <a href="{{ site.baseurl }}/spirit-vale/vale-guardian/builds/power-dps-berserker/">Power DPS Berserker</a>
        &times;2
    </li>
    <li>
        {% include templates/profession-icon.html profession="Herald" %}
        <a href="{{ site.baseurl }}/spirit-vale/vale-guardian/builds/power-dps-herald/">Power DPS Herald</a>
        &times;2
    </li>
    <li>
        <a href="{{ site.baseurl }}/spirit-vale/vale-guardian/builds/">Other ranged profession</a>
        &times;1
    </li>
</ul>
{% include templates/composition/builds-list-end.html %}
{% include templates/composition/builds-list-start.html type="Conditions" %}
<ul class="builds">
    <li>
        {% include templates/profession-icon.html profession="Berserker" %}
        <a href="{{ site.baseurl }}/spirit-vale/vale-guardian/builds/condition-dps-berserker/">Condition DPS Berserker</a>
        &times;0-2*
    </li>
    <li>
        {% include templates/profession-icon.html profession="Engineer" %}
        <a href="{{ site.baseurl }}/spirit-vale/vale-guardian/builds/condition-dps-engineer/">Condition DPS Engineer</a>
        &times;1-3*
    </li>
</ul>
* The number of Condition DPS Berserkers and Engineers are mutually exclusive.
{% include templates/composition/builds-list-end.html %}

This can and probably will be tweaked during the raid.
So don't be afraid if numbers are a bit off.

## Squad parties
We run with 2 full parties of 5 players, but there's no one fits all solution.

Generally, we want to have:

- As much of the ranged players together in a party
- The 2 Heralds divided between the parties
- The 2 Berserkers (power) divided between the parties
- The Chronomancer should *not* be in the same party as most of the ranged players

## Change history
23 January, 2016 *(Archomeda)*:
: - Moved away from Dulfy's setup to what we've been running for a couple of weeks

18 December, 2015 *(Archomeda)*:
: - Initial draft
