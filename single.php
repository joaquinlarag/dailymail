<?php get_header(); ?>

<main class="container single-post">
    <?php
    if ( have_posts() ) :
        while ( have_posts() ) : the_post();
    ?>
        <article <?php post_class('post'); ?>>
            <h1 class="post-title"><?php the_title(); ?></h1>
            <div class="post-meta mb-3">
                <span>Publicado el <?php echo get_the_date(); ?></span>
            </div>
            <div class="post-body">
                <?php the_content(); ?>
            </div>
        </article>
    <?php
        endwhile;
    endif;
    ?>
</main>

<?php get_footer(); ?>
