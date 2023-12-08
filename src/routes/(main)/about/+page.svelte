<script lang="ts">
  import header from './header1.jpg';
</script>

<svelte:head>
  <title>About - Binary Sunrise</title>
</svelte:head>

<div class="container about">
  <div class="row">
    <img class="profile col-sm-8 col-md-4" alt="Me" src={header} />
  </div>
  <div class="row">
    <div class="description col-md-8">
      <p>Hello, I'm Rob!</p>
      <p>I started Binary Sunrise to follow my passion of making games and starting my own business.</p>
      <p>
        I used to be a web developer until I was laid off. I decided to take a risk and go a different direction with my
        career. I'm passionate about making games that just plain feel good to play and am hoping I can share that
        passion with you!
      </p>
      <p></p>
      <p>
        If you'd like to get in contact with me you can reach out ot me at <a href="mailto:rob@binarysunrise.dev"
          >rob@binarysunrise.dev</a
        >.
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  .about {
    margin-top: 50px;
    margin-bottom: 64px;
  }

  .profile {
    border-radius: 50%;
    margin: 0 auto;
  }

  .description {
    margin: 50px auto 0;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
  }
</style>
