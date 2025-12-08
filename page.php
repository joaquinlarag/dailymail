<?php get_header(); ?>

<main class="container page-content">
    <?php
    if ( have_posts() ) :
        while ( have_posts() ) : the_post();
    ?>
        <article <?php post_class('page'); ?>>
            <h1 class="page-title"><?php the_title(); ?></h1>
            <div class="page-body">
                <?php the_content(); ?>
            </div>
        </article>
    <?php
        endwhile;
    else :
        echo '<p>No hay contenido disponible.</p>';
    endif;
    ?>
</main>

<?php get_footer(); ?>
