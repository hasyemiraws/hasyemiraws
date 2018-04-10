---
layout: about
---

<div class="about_row">
    <section class="about_text">        
        <div class="about_image" style="background-image: url('{{ '/assets/images/profile_2.jpg'|theme }}');">   
        </div>
        <p class="about_text-intro"><b>HELLO, I AM</b></p>        
        <div class="about_text-typed">
            <div id="textString">
                <p>Hasyemi Rafsanjani Asyari</p>
                <p>Wearing Glasses</p>
                <p>High Functional Introvert</p>
            </div>
            <span class="about_text-wrap textWrap"></span>
        </div>
        <p>I'm a Front End Developer from Indonesia currently living and work my daily life here in Kuala Lumpur, Malaysia. I write about books, code, and personal thoughts about life. Say hi <a class="footer__about--info--link" href="mailto:{{ site.email }}">hi@hasyemiraws.com</a>.</p>
        <div class="footer__about--social">
        <a target="_blank" href="{{ site.twitter_url }}">
            <i class="fa fa-twitter"></i>         
        </a>
        <a target="_blank" href="{{ site.ig_url }}">
            <i class="fa fa-instagram"></i>
        </a>
        <a target="_blank" href="{{ site.fb_url }}">
            <i class="fa fa-facebook"></i>
        </a>
        <a target="_blank" href="{{ site.youtube_url }}">
            <i class="fa fa-youtube-play"></i>
        </a>        
        <a target="_blank" href="{{ site.codepen_url }}">
            <i class="fa fa-codepen"></i>
        </a>        
        </div>
    </section>    
</div>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.6/typed.min.js"></script>
<script>
  var typed = new Typed('.textWrap', {
    stringsElement: '#textString',
    loop: true,
    typeSpeed: 50,
    backSpeed: 50,
    cursorChar: '_',
  });
</script>