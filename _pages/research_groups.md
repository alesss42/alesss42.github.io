---
layout: page
title: Groups & Networks
permalink: /research/groups-networks/
description: Collaborative research groups and observing networks.
nav: false
filter_tag: groups-networks
---

<div class="projects">
{% assign filtered = site.projects | where_exp: "item", "item.tags contains 'groups-networks'" %}
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
