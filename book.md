---
layout: category
title:  "#book"
description: Ngomongin buku.
author: Hasyemi Rafsanjani Asyari
featured_image: /assets/images/page/books.jpg
permalink: "/book/"
---

<section class="category--section post--section">
  <div class="container">    
    <div>
    	{% if site.book %}
	    	<div class="book--section">		      
		      <div class="book-grid">
		      	{% assign books = site.book | sort: 'date' | reverse %}
		        {% for book in books %}
		        <a href="{{ book.url | prepend: site.baseurl }}" class="book-item" data-image="{{book.cover}}">
		            <img class="book-cover" src="{{book.cover }}" />            
		            <span class="book-caption">
		              {{book.judul }} <br/>              
		              {{book.penulis }}
		            </span>
		        </a>              
		        {% endfor %}     
		      </div>                      
		    </div>
	    {% else %}
	    	<div class="no-story">
	    		<h5>No Story</h5>
	    	</div>	    	
    	{% endif %}       	    
    </div>    
  </div>        	
</section>