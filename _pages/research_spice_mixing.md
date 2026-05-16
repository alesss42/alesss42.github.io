---
layout: page
title: Spice and Mixing
permalink: /research/spice-mixing/
description: Along-isopycnal temperature–salinity variability and its role in isopycnal mixing.
nav: false
filter_tag: spice-mixing
---

<div class="projects">
{% assign filtered = site.projects | where_exp: "item", "item.tags contains 'spice-mixing'" %}
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
