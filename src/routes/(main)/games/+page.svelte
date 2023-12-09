<script lang="ts">
  import Card from '$lib/components/Card.svelte';

  export let data;
</script>

<svelte:head>
  <title>Games - Binary Sunrise</title>
</svelte:head>

<div class="blog-posts container">
  <div class="row">
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

<style lang="scss">
  .blog-posts {
    min-height: 60vh;
  }

  .row {
    margin-top: 30px;
  }

  @media screen and (min-width: 1200px) {
    .row {
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
