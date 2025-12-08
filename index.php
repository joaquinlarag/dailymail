<?php get_header(); ?>

<main class="site-main">
    <h2>DailyMail Theme funcionando</h2>

    <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
            <article <?php post_class(); ?>>
                <h3><?php the_title(); ?></h3>
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    <?php else : ?>
        <p>No hay contenido todavía.</p>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
