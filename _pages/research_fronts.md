---
layout: page
title: Fronts Near Coast
permalink: /research/fronts-near-coast/
description: Frontal dynamics and fine-scale structure in coastal and boundary current regions.
nav: false
filter_tag: fronts-near-coast
---

<div class="projects">
{% assign filtered = site.projects | where_exp: "item", "item.tags contains 'fronts-near-coast'" %}
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
