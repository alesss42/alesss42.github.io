---
layout: page
title: Spice and Sound
permalink: /research/spice-sound/
description: How along-isopycnal variability shapes acoustic propagation.
nav: false
filter_tag: spice-sound
---

<div class="projects">
{% assign filtered = site.projects | where_exp: "item", "item.tags contains 'spice-sound'" %}
{% assign sorted = filtered | sort: "importance" %}
<div class="container">
  <div class="row row-cols-1">
  {% for project in sorted %}
    {% include projects_horizontal.liquid %}
  {% endfor %}
  </div>
</div>
{% if filtered.size == 0 %}
  <p>Projects coming soon.</p>
{% endif %}
</div>
