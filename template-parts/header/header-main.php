<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<header class="site-header">
    <div class="header-inner">

        <!-- Logo -->
        <div class="site-logo">
        <a href="<?php echo esc_url(home_url('/')); ?>">
            <img 
            src="<?php echo esc_url(wp_get_upload_dir()['baseurl'] . '/2025/12/terrazo-1.svg'); ?>" 
            alt="Terrazzo Edificio"
            >
        </a>
        </div>


        <!-- Navegación -->
        <nav class="site-nav">
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'nav-menu',
                'depth'          => 1,
            ]);
            ?>
</nav>


        <!-- CTA -->
        <div class="header-cta">
            <a href="#cotiza" class="btn btn-primary">Cotiza</a>
        </div>

    </div>
</header>
