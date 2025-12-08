<?php get_header(); ?>

<main class="container archive">
    <h1 class="archive-title mb-4">
        <?php the_archive_title(); ?>
    </h1>

    <?php if ( have_posts() ) : ?>
        <div class="archive-list">
            <?php while ( have_posts() ) : the_post(); ?>
                <article <?php post_class('archive-item mb-4'); ?>>
                    <h2 class="archive-item-title">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h2>
                    <p class="archive-excerpt"><?php the_excerpt(); ?></p>
                </article>
            <?php endwhile; ?>
        </div>
    <?php else : ?>
        <p>No hay resultados.</p>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
