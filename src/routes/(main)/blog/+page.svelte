<script lang="ts">
  import Card from '$lib/components/Card.svelte';

  export let data;
</script>

<svelte:head>
  <title>Blog - Binary Sunrise</title>
</svelte:head>

<div class="blog-posts container">
  <div class="row">
    {#each data.postListings as post (post.title)}
      <Card
        backgroundImage={post.heroImageUrl}
        title={post.title}
        description={post.description}
        date={post.date}
        postHref={post.href}
        authorName={post.author}
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .blog-posts {
    min-height: 60vh;
  }
</style>
