---
layout: page
title: Eddies and Transition Zone
permalink: /research/hawaii/eddies/
description: How mesoscale eddies structure the ocean transition layer in the Hawaiian archipelago.
nav: false
filter_tag: hawaii-eddies
---

<div class="projects">
{% assign filtered = site.projects | where_exp: "item", "item.tags contains 'hawaii-eddies'" %}
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
