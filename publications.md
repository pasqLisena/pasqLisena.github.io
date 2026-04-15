---
layout: page
title: "Publications | Pasquale Lisena"
description: "List of publication"
---

## Publications.

{% assign entries = site.data.publications.entries %}
{% assign all_years = "" | split: "" %}
{% for entry in entries %}{% unless all_years contains entry.fields.year %}{% assign all_years = all_years | push: entry.fields.year %}{% endunless %}{% endfor %}
{% assign all_years = all_years | sort | reverse %}
{% assign authors_data = site.data.authors.authors %}
{% assign lbrace = '{' %}
{% assign rbrace = '}' %}

{% for year in all_years %}
### {{ year }}

{% assign year_entries = entries | where_exp: "e", "e.fields.year == year" %}
{% for entry in year_entries %}
{% capture item_authors %}{% for author_name in entry.fields.author %}{% unless forloop.first %}, {% endunless %}{% if author_name contains ", " %}{% assign parts = author_name | split: ", " %}{% assign first_initial = parts[1] | slice: 0, 1 %}{% assign display = parts[0] | append: ", " | append: first_initial | append: "." %}{% else %}{% assign display = author_name %}{% endif %}{% assign author_url = authors_data[author_name] %}{% if author_name == "Lisena, Pasquale" %}{{ display }}{% elsif author_url %}[{{ display }}]({{ author_url }}){% else %}{{ display }}{% endif %}{% endfor %}{% endcapture %}
{% assign venue = entry.fields.booktitle | default: entry.fields.journal | default: entry.fields.school %}
- {% if entry.award %}<span class="award">{{ entry.award }}</span>  {% endif %}{{ item_authors | strip }} **{{ entry.fields.title }}.**{% if venue %} In *{{ venue }}*{% if entry.fields.address %}, {{ entry.fields.address }}{% endif %}, {{ entry.fields.year }}{% endif %}.
<span class="links publication-links" markdown="1">
{% if entry.resources.pdf %}[PDF]({{ entry.resources.pdf }}) {% endif %}{% if entry.resources.poster %} [POSTER]({{ entry.resources.poster }}){% endif %}{% if entry.resources.slides %} [SLIDES]({{ entry.resources.slides }}){% endif %}{% if entry.resources.repo %} [REPO]({{ entry.resources.repo }}){% endif %}{% if entry.resources.demo %} [DEMO]({{ entry.resources.demo }}){% endif %}{% if entry.resources.talk %} [TALK]({{ entry.resources.talk }}){% endif %}{% if entry.resources.video %} [VIDEO]({{ entry.resources.video }}){% endif %}{% if entry.resources.site %} [SITE]({{ entry.resources.site }}){% endif %}{% if entry.resources.buy %} [BUY]({{ entry.resources.buy }}){% endif %}{% if entry.resources.resource %} [RESOURCE]({{ entry.resources.resource }}){% endif %}{% if entry.resources.code %} [CODE]({{ entry.resources.code }}){% endif %}
</span>
{% capture bibtex %}
@{{ entry.type }}{ {{ entry.id }},
{% for field in entry.fields -%}
{% assign field_key = field[0] -%}
{% assign field_value = field[1] -%}
{% if field_value != nil and field_value != '' -%}
	{{ '    ' }}{{ field_key }} = {% if field_key == 'author' %}{ {{ field_value | join: ' and ' }} }{% elsif field_key == 'title' %}{{ lbrace }}{{ lbrace }}{{ field_value }}{{ rbrace }}{{ rbrace }}{% else %}{ {{ field_value }} }{% endif %},
{% endif -%}
{% endfor %}}
{% endcapture %}
	<details>
	<summary>BIB</summary>
	<pre><code>{{ bibtex | strip | escape }}</code></pre>
	<button type="button" onclick="(function(btn){var txt=btn.previousElementSibling.innerText;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt);}else{var ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);}var old=btn.textContent;btn.textContent='Copied';setTimeout(function(){btn.textContent=old;},1200);})(this)">Copy</button>
	</details>

{% endfor %}
{% endfor %}

