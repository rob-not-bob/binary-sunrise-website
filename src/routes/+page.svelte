<script>
  import { Nav } from '$lib/components';
  import { onMount } from 'svelte';

  let h1FontSize = 163;
  onMount(() => {
    const calculateH1FontSize = () => {
      h1FontSize = Math.min(163, (145 * document.documentElement.clientWidth) / 1178);
    };
    window.addEventListener('resize', calculateH1FontSize);
    calculateH1FontSize();
  });
</script>

<svelte:head>
  <title>Binary Sunrise</title>
</svelte:head>

<div class="bg-image" />
<div class="hero" />
<div class="home-page-nav">
  <Nav />
</div>

<div class="container center-vertically">
  <div class="welcome-blurb fadeInUp">
    <h2>Hello! Welcome to</h2>
    <h1 style="font-size: {h1FontSize}px">
      Binary<span class="color">Sunrise</span>
    </h1>
    <p>An indie game company dedicated to game feel</p>
  </div>
</div>

<style lang="scss">
  .bg-image {
    position: absolute;
    inset: 0;
    z-index: -2;
    background-image: url('$lib/images/bg3.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }

  .hero {
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0.9;
    min-height: 100vh;
    max-height: 100vh;

    background: radial-gradient(circle farthest-corner at bottom left, hsl(38 100% 50% / 1) 0%, transparent 60%),
      radial-gradient(circle farthest-corner at bottom right, hsl(38 100% 50% / 1) 0%, transparent 60%),
      linear-gradient(180deg, hsl(274 100% 20% / 1) 0%, hsl(274 100% 36% / 1) 70%);
    @media screen and (min-width: 2000px) {
      background: radial-gradient(circle farthest-corner at bottom left, hsl(38 100% 50% / 1) 0%, transparent 50%),
        radial-gradient(circle farthest-corner at bottom right, hsl(38 100% 50% / 1) 0%, transparent 50%),
        linear-gradient(180deg, hsl(274 100% 20% / 1) 0%, hsl(274 100% 36% / 1) 70%);
    }
  }

  .center-vertically {
    flex: 0.9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
  }

  .welcome-blurb {
    animation-delay: 0.4s;
    color: white;

    .color {
      color: #fea303;
    }

    h1 {
      font-weight: 700;
      line-height: 1.2;
    }

    h2 {
      font-size: 18px;
      line-height: 1.3;
    }

    p {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 768px) {
    .home-page-nav :global(.nav-bar) {
      background-color: transparent !important;
    }
  }
</style>
