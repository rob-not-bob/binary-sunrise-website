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
      linear-gradient(212deg, hsl(274 100% 20% / 1) 10%, rgba(0, 0, 0, 0) 60%),
      linear-gradient(212deg, hsl(274 100% 36% / 1) 40%, hsl(38 100% 50% / 1) 100%);
  }

  .welcome-blurb {
    margin-top: 30vh;
    color: white;

    .color {
      color: #FEA303;
    }

    h1 {
      font-weight: 700;
      font-size: 9.2vw;
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
