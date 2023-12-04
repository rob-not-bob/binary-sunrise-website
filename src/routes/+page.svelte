<script>
  import { Nav } from '$lib';
  import { onMount } from 'svelte';

  let h1FontSize = 163;
  onMount(() => {
    const calculateH1FontSize = () => {
      h1FontSize = Math.min(163, 145 * document.documentElement.clientWidth / 1178);
    };
    window.addEventListener('resize', calculateH1FontSize);
    calculateH1FontSize();
  });
</script>

<div class="hero">
  <Nav />

  <div class="container">
    <div class="welcome-blurb fadeInUp">
      <h2>Hello! Welcome to</h2>
      <h1 style="font-size: {h1FontSize}px">Binary<span class="color">Sunrise</span></h1>
      <p>An indie game company dedicated to game feel</p>
    </div>
  </div>
</div>

<style lang="scss">
  .hero {
    animation-delay: 0.4s;
    min-height: 100vh;
    background:
      radial-gradient(circle farthest-corner at bottom left, hsl(38 100% 50% / 1) 0%, transparent 60%),
      radial-gradient(circle farthest-corner at bottom right, hsl(38 100% 50% / 1) 0%, transparent 60%),
      linear-gradient(180deg, hsl(274 100% 20% / 1) 0%, hsl(274 100% 36% / 1) 70%);
    @media screen and (min-width: 2000px) {
      background:
        radial-gradient(circle farthest-corner at bottom left, hsl(38 100% 50% / 1) 0%, transparent 50%),
        radial-gradient(circle farthest-corner at bottom right, hsl(38 100% 50% / 1) 0%, transparent 50%),
        linear-gradient(180deg, hsl(274 100% 20% / 1) 0%, hsl(274 100% 36% / 1) 70%);
    }
  }

  .welcome-blurb {
    margin-top: 35%;
    color: white;

    .color {
      color: #FEA303;
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
</style>
