---
layout: page
title: Instrumentation
permalink: /research/instrumentation/
description: Autonomous platforms and instruments used in lab fieldwork.
nav: false
filter_tag: instrumentation
---

<div class="projects">
{% assign filtered = site.projects | where_exp: "item", "item.tags contains 'instrumentation'" %}
{% assign sorted = filtered | sort: "importance" %}
<div class="container">
  <div class="row row-cols-1">
  {% for project in sorted %}
    {% include projects_horizontal.liquid %}
  {% endfor %}
  </div>
</div>
{% if filtered.size == 0 %}
  <p>Content coming soon.</p>
{% endif %}
</div>
