---
layout: category
title:  "#life"
description: Ngomongin hidup, random thought, ideas.
author: Hasyemi Rafsanjani Asyari
featured_image: /assets/images/page/life.jpg
permalink: "/life/"
---

<section class="category--section post--section">
  <div class="container">    
    <div>
    	{% if site.categories.life %}
	    	{% for post in site.categories.life limit:10 %}    
	          {% if forloop.index <= 1 %}
	            {% if forloop.index == 1 %}
	              <div class="article-grid">
	            {% endif %}                        
	                    <figure class="article-item">
	                      <img class="article-image" src="{{ post.featured_image }}">
	                      <figcaption class="article-text">                                                 
	                          {% if post.categories %}
	                            {% assign categories = post.categories %}
	                          {% else %}
	                            {% assign categories = page.categories %}
	                          {% endif %}
	                          {% for category in categories %}
	                          <span class="article-category-label">
	                            <!-- <a href="/categories/#{{category|slugize}}"> -->
	                              {{category}}
	                            <!-- </a> -->
	                          </span>
	                          {% unless forloop.last %}&nbsp;{% endunless %}
	                          {% endfor %}  

	                          <h3 class="article-title">                              
	                              {{ post.title }}                              
	                          </h3>
	                          
	                          <span class="article-category-label">
	                            {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
	                            {{ post.date | date: date_format }}
	                          </span>

	                          <a href="{{ post.url }}">Read More</a>                      
	                      </figcaption>                                                                 
	                    </figure>                    

	                {% if forloop.index >= 1 %}
	              </div>  
	            {% endif %}

	          {% elsif forloop.index <= 4 or forloop.index >= 8 %}
	            {% if forloop.index == 2 or forloop.index == 8 %}
	              <div class="article-grid">
	            {% endif %}            
	                  <figure class="article-item" data-test="{{ forloop.index }}">                    
	                    <img class="article-image" src="{{ post.featured_image }}">  
	                    <figcaption class="article-text">                        

	                        {% if post.categories %}
	                          {% assign categories = post.categories %}
	                        {% else %}
	                          {% assign categories = page.categories %}
	                        {% endif %}
	                        {% for category in categories %}
	                        <span class="article-category-label">
	                          <!-- <a href="/categories/#{{category|slugize}}"> -->
	                            {{category}}
	                          <!-- </a> -->
	                        </span>
	                        {% unless forloop.last %}&nbsp;{% endunless %}
	                        {% endfor %}                                                  
	                        
	                        <h3 class="article-title">                            
	                            {{ post.title }}                            
	                        </h3>

	                        <span class="article-category-label">
	                          {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
	                          {{ post.date | date: date_format }}
	                        </span>

	                        <a href="{{ post.url }}">Read More</a>
	                    </figcaption>                    
	                  </figure>                                                                        
	              {% if forloop.index >= 10 or forloop.index >= 4 %}
	                {% if forloop.index >= 8 and forloop.index <= 10 %}                  
	                {% else %}
	                  </div>
	                {% endif %}
	              {% endif %}
	          {% elsif forloop.index <= 5 %}
	            <div class="article-grid">    
	                <div class="article-item article-item-two-column">                      
	                    <img class="article-image" src="{{ post.featured_image }}">
	                    <div class="article-text">                          
	                        <h3 class="article-title">                            
	                            {{ post.title }}                            
	                        </h3>

	                        {% if post.categories %}
	                        {% assign categories = post.categories %}
	                      {% else %}
	                        {% assign categories = page.categories %}
	                      {% endif %}
	                      {% for category in categories %}
	                      <span class="article-category-label">
	                        <!-- <a href="/categories/#{{category|slugize}}"> -->
	                          {{category}}
	                        <!-- </a> -->
	                      </span>
	                      {% unless forloop.last %}&nbsp;{% endunless %}
	                      {% endfor %}

	                        <div class="article-excerpt">
	                            <p>
	                              {% if post.description %}
	                                  {{ post.description }}
	                              {% endif %}
	                            </p>
	                        </div>                           
	                    </div>            
	                </div>                    
	            </div>
	            {% else %}
	              {% if forloop.index == 6 %}
	                <div class="article-grid">
	              {% endif %}              
	                    <figure class="article-item" data-test="test">                      
	                      <img class="article-image" src="{{ post.featured_image }}">
	                      <figcaption class="article-text">

	                          {% if post.categories %}
	                            {% assign categories = post.categories %}
	                          {% else %}
	                            {% assign categories = page.categories %}
	                          {% endif %}
	                          {% for category in categories %}
	                          <span class="article-category-label">
	                            <!-- <a href="/categories/#{{category|slugize}}"> -->
	                              {{category}}
	                            <!-- </a> -->
	                          </span>
	                          {% unless forloop.last %}&nbsp;{% endunless %}
	                          {% endfor %}       

	                          <h3 class="article-title">                              
	                              {{ post.title }}                              
	                          </h3>
	                          <span class="article-category-label">
	                            {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
	                            {{ post.date | date: date_format }}
	                          </span>
	                          <a href="{{ post.url }}">Read More</a>       
	                      </figcaption>                                
	                    </figure>                                                                      

	                {% if forloop.index >= 7 %}
	                  </div>  
	                {% endif %}
	            {% endif %}
	                        
	        {% endfor %}
	        </div>
	    {% else %}
	    	<div class="no-story">
	    		<h5>No Story</h5>
	    	</div>	    	
    	{% endif %}       	    
    </div>            
</section>