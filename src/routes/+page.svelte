<script>
  import { Nav } from '$lib';
</script>

<div class="hero">
  <Nav />

  <div class="container">
    <div class="welcome-blurb">
      <h2>Hello! Welcome to</h2>
      <h1>Binary<span class="color">Sunrise</span></h1>
      <p>An indie game company dedicated to game feel</p>
    </div>
  </div>
</div>

<style lang="scss">
  .hero {
    min-height: 100vh;
    background:
      radial-gradient(circle farthest-corner at bottom left, hsl(38 100% 50% / 1) 0%, transparent 60%),
      radial-gradient(circle farthest-corner at bottom right, hsl(38 100% 50% / 1) 0%, transparent 60%),
      linear-gradient(0, hsl(274 100% 36% / 1) 0%, hsl(274 100% 20% / 1) 100%);
    @media screen and (min-width: 2000px) {
      background:
        radial-gradient(circle farthest-corner at bottom left, hsl(38 100% 50% / 1) 0%, transparent 50%),
        radial-gradient(circle farthest-corner at bottom right, hsl(38 100% 50% / 1) 0%, transparent 50%),
        linear-gradient(0, hsl(274 100% 36% / 1) 0%, hsl(274 100% 20% / 1) 100%);
    }
  }

  .welcome-blurb {
    margin-top: 30vh;
    color: white;

    .color {
      color: #FEA303;
    }

    h1 {
      font-weight: 700;
      font-size: 164px;
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
