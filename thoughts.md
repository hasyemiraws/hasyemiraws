---
layout: category
title:  "#thoughts"
description: Ngomongin hidup, random thought, ideas.
author: Hasyemi Rafsanjani Asyari
featured_image: /assets/images/page/life.jpg
permalink: "/thoughts/"
---

<div class="container__category">        
		{% if site.categories.thoughts %}
			<div class="post__list post__list--grid">      
				{% for post in site.categories.thoughts limit:10 %}    
				<figure class="post__list--item">
					<img data-object-fit class="post__list--image" src="{{ post.featured_image }}">
						<figcaption class="post__list--text">                                                 
								{% if post.categories %}
									{% assign categories = post.categories %}
								{% else %}
									{% assign categories = page.categories %}
								{% endif %}
								{% for category in categories %}
								<span class="post__list--category-label">
									<!-- <a href="/categories/#{{category|slugize}}"> -->
										{{category}}
									<!-- </a> -->
								</span>
								{% unless forloop.last %}&nbsp;{% endunless %}
								{% endfor %}  

								<h3 class="post__list--title">                              
										{{ post.title }}                              
								</h3>
								
								<span class="post__list--category-label">
									{% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
									{{ post.date | date: date_format }}
								</span>

								<a href="{{ post.url }}">Read More</a>                      
						</figcaption>                                                                 
					</figure>                    
				{% endfor %}
			</div>
		{% else %}
			<div class="no-story">
				<h5>No Story</h5>
			</div>	    	
		{% endif %}       	    
	</div>            