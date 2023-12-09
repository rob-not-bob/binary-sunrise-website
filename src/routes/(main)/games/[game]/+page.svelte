<script lang="ts">
  import { page } from '$app/stores';
  import SocialMediaHead from './SocialMediaHead.svelte';

  export let data;
</script>

<SocialMediaHead title={data.title} description={data.lead} heroImageUrl={data.heroImageUrl} postUrl={$page.url.href} />

<div class="game container">
  <div class="row justify-content-center">
    <article class="col-md-8">
      <img class="hero-image" alt="Lock Breaker" src={data.heroImageUrl} />
      <div class="postMeta">
        <h1 class="postTitle">{data.title}</h1>
        <span class="postDate">Released: {data.date}</span>
        <p class="lead">{data.lead}</p>
        <div class="description">
          <svelte:component this={data.component} />
        </div>
      </div>
    </article>
  </div>
</div>

<style lang="scss">
  .game {
    margin-top: 30px;
  }

  .hero-image {
    border-radius: 50px;
    margin: 0 auto 40px;
  }

  .postMeta {
    color: #888;
    line-height: 1.5;
    margin-bottom: 2.4rem;
  }

  .postDate {
    display: block;
    font-size: 1.575rem;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 2rem;
  }

  .postTitle {
    font-weight: 700;
    margin-bottom: 0.8rem;
    font-size: 3.4rem;
    color: rgb(41, 43, 44);
    line-height: 1.2;
  }

  .lead {
    font-size: 2rem;
    font-weight: 400;
  }

  .description :global(.markdown-body) {
    font-size: 2rem;
    font-weight: 300;
    margin-top: 20px;
    padding-left: 0;
    padding-right: 0;
  }

  article {
    margin-bottom: 150px;
  }
</style>
