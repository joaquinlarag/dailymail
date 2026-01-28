<?php get_header(); ?>



<section class="hero-split">

  <div class="hero-split__col hero-split__col--text">
    <div class="hero-split__content">

      <div class="hero-title">
        <img src="<?php echo esc_url( wp_get_upload_dir()['baseurl'] ); ?>/2025/12/titulo-barrio-republica.svg" alt="">
      </div>

      <p class="hero-desc">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpa
      </p>

    </div>
  </div>

  <div class="hero-split__col hero-split__col--image">
    <div class="hero-image-bg"
         style="background-image:url('<?php echo esc_url( wp_get_upload_dir()['baseurl'] ); ?>/2025/12/fachada.jpg');">
    </div>
  </div>

</section>


<section class="pattern-wrapper">
    <div class="pattern-container">
  <!-- solo para manejar la posición -->
        <svg id="pattern-lines" width="1000" height="800" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
            <rect id="rect-2" class="line" x="200" y="50" width="20" height="120" fill="#ffffff"/>
            <rect id="rect-3" class="line" x="300" y="50" width="20" height="120" fill="#ffffff"/>
            <rect id="rect-4" class="line" x="400" y="50" width="20" height="120" fill="#ffffff"/>
            <rect id="rect-5" class="line" x="500" y="50" width="20" height="120" fill="#ffffff"/>

            <rect id="rect-6" class="line" x="150" y="200" width="20" height="120" fill="#ffffff"/>
            <rect id="rect-7" class="line" x="250" y="200" width="20" height="120" fill="#ffffff"/>
            <rect id="rect-8" class="line" x="350" y="200" width="20" height="120" fill="#ffffff"/>
            <rect id="rect-9" class="line" x="450" y="200" width="20" height="120" fill="#ffffff"/>
            <rect id="rect-10" class="line" x="550" y="200" width="20" height="120" fill="#ffffff"/>

            <rect id="rect-11" class="line" x="100" y="350" width="20" height="120" fill="#ffffff"/>
            <rect id="rect-12" class="line" x="200" y="350" width="20" height="120" fill="#ffffff"/>
            <rect id="rect-13" class="line" x="300" y="350" width="20" height="120" fill="#ffffff"/>
            <rect id="rect-14" class="line" x="400" y="350" width="20" height="120" fill="#ffffff"/>
            <rect id="rect-15" class="line" x="500" y="350" width="20" height="120" fill="#ffffff"/>
        </svg>
    </div>

</section>



<section class="section-gallery">
  <div class="gallery">

    <!-- Flecha izquierda -->
    <button class="gallery__nav gallery__nav--prev">
      <svg class="arrow-svg" viewBox="0 0 40 40">
        <path d="M28 8 L12 20 L28 32"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none" />
        </svg>


    </button>

    <!-- Imagen izquierda -->
    <div class="gallery__item gallery__item--left">
      <img src="wp-content/uploads/2025/12/depto2.jpg" alt="">
    </div>

    <!-- Imagen derecha -->
    <div class="gallery__item gallery__item--right">
      <img src="wp-content/uploads/2025/12/depto1.jpg" alt="">
    </div>

    <!-- Flecha derecha -->
    <button class="gallery__nav gallery__nav--next">
      <svg class="arrow-svg" viewBox="0 0 40 40">
  <path d="M12 8 L28 20 L12 32"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none" />
</svg>

    </button>

  </div>
</section>


<?php get_footer(); ?>
