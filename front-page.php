<?php get_header(); ?>



<section class="hero-split">

  <!-- COLUMNA IZQUIERDA -->
  <div class="hero-split__col hero-split__col--text">

    <div class="hero-split__content">

      <h2 class="hero-split__title hero-title" data-speed="0.23">
        <span class="hero-title-line">El Barrio República,</span><br>
        <span class="hero-title-line">a otro Nivel.</span>
      </h2>

      <p class="hero-desc" data-speed="0.20">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        dolore magna aliquam erat volutpat.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        dolore magna aliquam erat volutpat…
      </p>

    </div>

  </div>

  <!-- COLUMNA DERECHA (IMAGEN) -->
    <div class="hero-split__col hero-split__col--image">
  <div class="hero-image-bg"
    style="background-image:url('<?php echo esc_url( wp_get_upload_dir()['baseurl'] ); ?>/2025/12/fachada.jpg');">
  </div>
</div>

  </div>

</section>





<section class="section-gallery">
  <div class="gallery">
    
    <button class="gallery__nav gallery__nav--prev">←</button>

    <div class="gallery__item gallery__item--left">
      <img src="wp-content/uploads/2025/12/depto2.jpg" alt="">
    </div>

    <div class="gallery__item gallery__item--right">
      <img src="wp-content/uploads/2025/12/depto1.jpg" alt="">
    </div>

    <button class="gallery__nav gallery__nav--next">→</button>

  </div>
</section>


<?php get_footer(); ?>
