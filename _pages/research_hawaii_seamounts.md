---
layout: page
title: Seamounts
permalink: /research/hawaii/seamounts/
description: Flow-topography interactions at Hawaiian seamounts.
nav: false
filter_tag: hawaii-seamounts
---

<div class="projects">
{% assign filtered = site.projects | where_exp: "item", "item.tags contains 'hawaii-seamounts'" %}
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
