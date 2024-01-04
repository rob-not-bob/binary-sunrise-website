<script lang="ts">
  import { page } from '$app/stores';
  import SocialMediaHead from './SocialMediaHead.svelte';
  import GameMeta from '$lib/components/GameMeta';

  const screenshots = Object.values(import.meta.glob('./lock_breaker/screenshot_*.png', { as: 'url', eager: true }));

  export let data;
</script>

<SocialMediaHead title={data.title} description={data.lead} heroImageUrl={data.heroImageUrl} postUrl={$page.url.href} />

<div class="game container">
  <div class="row justify-content-center">
    <article class="col-md-8">
      <div class="postHead row">
        <div class="imageWrap col-lg-4">
          <img class="hero-image" alt="Lock Breaker" src={data.heroImageUrl} />
        </div>
        <div class="col-lg-8">
          <div class="postMeta">
            <h1 class="postTitle">{data.title}</h1>
            <p class="lead">{data.lead}</p>
            <span class="postDate">Released: {data.date}</span>
          </div>
          <GameMeta
            googlePlayLink="https://play.google.com/store/apps/details?id=net.rcallen.LockBreaker"
            privacyPolicyLink="/privacy_policies/lock_breaker"
          />
        </div>
      </div>
      <h2>Screenshots</h2>
      <div class="screenshots">
        {#each screenshots as src (src)}
          <div class="screenshot col-sm-3">
            <img {src} alt="Lock Breaker Screenshot" />
          </div>
        {/each}
      </div>
      <div class="description">
        <svelte:component this={data.component} />
      </div>
    </article>
  </div>
</div>

<style lang="scss">
  .game {
    margin-top: 30px;

    h2 {
      font-size: 2rem;
      font-weight: 600;
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }

  .imageWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 12px;
    margin-bottom: 24px;
  }

  .hero-image {
    border-radius: 50px;
    max-width: 100%;
    height: auto;
  }

  .postMeta {
    color: #888;
    line-height: 1.5;
    margin-bottom: 12px;
  }

  .postDate {
    display: block;
    font-size: 1.575rem;
    color: rgba(0, 0, 0, 0.5);
  }

  .postTitle {
    font-weight: 600;
    margin-bottom: 0.8rem;
    font-size: 3.4rem;
    color: rgb(40, 40, 40);
    line-height: 1.2;
  }

  .lead {
    font-size: 1.6rem;
    font-weight: 400;
    color: #888;
    margin-bottom: 24px;
  }

  .description :global(.markdown-body) {
    font-size: 2rem;
    font-weight: 300;
    margin-top: 20px;
    padding-left: 0;
    padding-right: 0;
  }

  .screenshots {
    display: flex;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .screenshot {
    min-width: 200px;
    padding-right: 24px;

    img {
      border-radius: 15px;
      margin-bottom: 12px;
    }
  }

  article {
    margin-bottom: 50px;
  }
</style>
