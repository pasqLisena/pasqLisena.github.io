---
layout: page
title: "Publications | Pasquale Lisena"
description: "List of publication"
---

# Publications.

{% assign entries = site.data.publications.entries %}
{% assign all_years = "" | split: "" %}
{% for entry in entries %}{% unless all_years contains entry.fields.year %}{% assign all_years = all_years | push: entry.fields.year %}{% endunless %}{% endfor %}
{% assign all_years = all_years | sort | reverse %}
{% assign authors_data = site.data.authors.authors %}

{% for year in all_years %}
## {{ year }}

{% assign year_entries = entries | where_exp: "e", "e.fields.year == year" %}
{% for entry in year_entries %}
{% capture item_authors %}{% for author_name in entry.fields.author %}{% unless forloop.first %}, {% endunless %}{% if author_name contains ", " %}{% assign parts = author_name | split: ", " %}{% assign first_initial = parts[1] | slice: 0, 1 %}{% assign display = parts[0] | append: ", " | append: first_initial | append: "." %}{% else %}{% assign display = author_name %}{% endif %}{% assign author_url = authors_data[author_name] %}{% if author_name == "Lisena, Pasquale" %}{{ display }}{% elsif author_url %}[{{ display }}]({{ author_url }}){% else %}{{ display }}{% endif %}{% endfor %}{% endcapture %}
{% assign venue = entry.fields.booktitle | default: entry.fields.journal | default: entry.fields.school %}
- {% if entry.award %}<span class="award">{{ entry.award }}</span>  {% endif %}{{ item_authors | strip }} **{{ entry.fields.title }}**{% if venue %} In *{{ venue }}*{% if entry.fields.address %}, {{ entry.fields.address }}{% endif %}, {{ entry.fields.year }}{% endif %}.
<span class="links" markdown="1">
{% if entry.resources.pdf %}[PDF]({{ entry.resources.pdf }}) {% endif %}[BIB](./publication/{{ entry.id }}.bib){% if entry.resources.poster %} [POSTER]({{ entry.resources.poster }}){% endif %}{% if entry.resources.slides %} [SLIDES]({{ entry.resources.slides }}){% endif %}{% if entry.resources.repo %} [REPO]({{ entry.resources.repo }}){% endif %}{% if entry.resources.demo %} [DEMO]({{ entry.resources.demo }}){% endif %}{% if entry.resources.talk %} [TALK]({{ entry.resources.talk }}){% endif %}{% if entry.resources.video %} [VIDEO]({{ entry.resources.video }}){% endif %}{% if entry.resources.site %} [SITE]({{ entry.resources.site }}){% endif %}{% if entry.resources.buy %} [BUY]({{ entry.resources.buy }}){% endif %}{% if entry.resources.resource %} [RESOURCE]({{ entry.resources.resource }}){% endif %}{% if entry.resources.code %} [CODE]({{ entry.resources.code }}){% endif %}
</span>

{% endfor %}
{% endfor %}

