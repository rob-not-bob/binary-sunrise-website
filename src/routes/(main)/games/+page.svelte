<script lang="ts">
  import Card from '$lib/components/Card.svelte';

  export let data;
</script>

<svelte:head>
  <title>Games - Binary Sunrise</title>
</svelte:head>

<div class="blog-posts container">
  <div class="row justify-content-center">
    <div class="col-md-8">
      {#each data.gameListings as game (game.title)}
        <Card
          backgroundImage={game.heroImageUrl}
          title={game.title}
          description={game.description}
          date={game.date}
          postHref={game.href}
          authorName={game.author}
        />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .blog-posts {
    min-height: 60vh;
    margin-top: 32px;
  }
</style>
