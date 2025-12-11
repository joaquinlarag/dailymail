<?php

// Estilos y scripts
function dailymail_scripts() {

    // CSS principal compilado desde Sass
    wp_enqueue_style(
        'dailymail-main',
        get_template_directory_uri() . '/assets/css/main.css',
        array(),
        filemtime(get_template_directory() . '/assets/css/main.css')
    );

    // Lenis Smooth Scroll
    wp_enqueue_script(
        'lenis',
        'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.29/bundled/lenis.min.js',
        array(),
        null,
        true
);

    
    // GSAP Core
    wp_enqueue_script(
        'gsap-core',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
        array(),
        null,
        true
    );

    // GSAP ScrollTrigger
    wp_enqueue_script(
        'gsap-scrolltrigger',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
        array('gsap-core'),
        null,
        true
    );

    // JS personalizado del theme
    wp_enqueue_script(
        'dailymail-main-js',
        get_template_directory_uri() . '/assets/js/main.js',
        array('gsap-core', 'gsap-scrolltrigger', 'lenis'),
        filemtime(get_template_directory() . '/assets/js/main.js'),
        true
    );
}
add_action('wp_enqueue_scripts', 'dailymail_scripts');


// Soportes del tema
function dailymail_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'dailymail_setup');


// Seguridad básica, evita accesos directos
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function dailymail_menus() {
    register_nav_menus([
        'primary' => 'menu-principal'
    ]);
}
add_action('after_setup_theme', 'dailymail_menus');



function allow_svg_uploads($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'allow_svg_uploads');
