<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { Button, Facebook, Instagram, Twitter, BlueSky, Steam, Itch, TikTok, YouTube } from './Icons';

  const socialMedia: [string, writeable<typeof SvelteComponent>][] = [
    // ['/', Facebook],
    // ['/', Instagram],
    ['https://x.com/BinarySunrise_', Twitter],
    ['https://bsky.app/profile/binarysunrise.bsky.social', BlueSky],
    // ['/', Steam],
    ['https://binarysunrise.itch.io/', Itch],
    ['https://www.tiktok.com/@binary_sunrise', TikTok],
    ['https://www.youtube.com/@BinarySunrise_', YouTube],
  ];
  const year = new Date().getFullYear();
</script>

<footer>
  <div class="container">
    <div class="social-media">
      {#each socialMedia as [href, icon]}
        <Button {href}>
          <svelte:component this={icon} />
        </Button>
      {/each}
    </div>
    <p class="copyright">Copyright © {year} | All Rights Reserved</p>
  </div>
</footer>

<style lang="scss">
  footer {
    padding-top: 70px;
    padding-bottom: 70px;
    background-color: #3b2848;
    color: white;
  }

  .social-media {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .copyright {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 300;
  }
</style>
