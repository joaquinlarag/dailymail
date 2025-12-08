<?php

// Estilos y scripts
function dailymail_scripts() {
    wp_enqueue_style('dailymail-style', get_stylesheet_uri());
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


function dailymail_enqueue_assets() {

    // CSS PRINCIPAL
    wp_enqueue_style(
        'dailymail-main-css',
        get_template_directory_uri() . '/assets/css/main.css',
        array(),
        filemtime(get_template_directory() . '/assets/css/main.css')
    );

    // JS PRINCIPAL
    wp_enqueue_script(
        'dailymail-main-js',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        filemtime(get_template_directory() . '/assets/js/main.js'),
        true
    );
}

add_action('wp_enqueue_scripts', 'dailymail_enqueue_assets');

