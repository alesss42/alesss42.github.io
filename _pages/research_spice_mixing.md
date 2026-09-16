---
layout: page
title: Spice, Mixing and Sound
permalink: /research/spice-mixing/
description: Along-isopycnal temperature–salinity variability, its role in isopycnal mixing, and how it shapes acoustic propagation.
nav: false
filter_tag: spice-mixing
---

<div class="projects">
{% assign filtered = site.projects | where_exp: "item", "item.tags contains 'spice-mixing' or item.tags contains 'spice-sound'" %}
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
