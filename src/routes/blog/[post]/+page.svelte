<script lang="ts">
  import { page } from '$app/stores';
  // import SocialMediaButtons from '$lib/components/SocialMediaButtons';
  import SocialMediaHead from './SocialMediaHead.svelte';

  export let data;
</script>

<SocialMediaHead
  title={data.title}
  description={data.description}
  heroImageUrl={data.heroImageUrl}
  postUrl={$page.url.href}
/>

<div class="container">
  <!-- <SocialMediaButtons url={$page.url.href} title={data.title} /> -->
  <div class="row justify-content-center">
    <article class="col-md-7">
      <div class="postMeta">
        <span class="postAuthor">{data.author}</span>
        <span class="postDate">{data.date}</span>
        <h1 class="postTitle">{data.title}</h1>
        <p class="lead">{data.description}</p>
      </div>
      <svelte:component this={data.component} />
    </article>
  </div>
</div>

<style lang="scss">
  .postMeta {
    text-align: center;
    color: #888;
    line-height: 1.5;
    margin-bottom: 2.4rem;
  }

  .postAuthor {
    display: block;
    font-size: 1.8rem;
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
    font-weight: 300;
  }

  .wrapper {
    margin-right: auto;
    margin-left: auto;
    margin-top: 87px;
    animation: fadeIn 0.3s ease-in;

    @media (min-width: 576px) {
      width: 540px;
    }

    @media (min-width: 768px) {
      width: 720px;
    }

    @media (min-width: 999px) {
      width: 960px;
    }

    @media (min-width: 1200px) {
      width: 1140px;
    }
  }

  article {
    margin-bottom: 150px;
  }
</style>
