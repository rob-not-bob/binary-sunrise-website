<nav>
  <div class="container">
    <a href="/" class="logo">
      <span>Binary<span class="color">Sunrise</span></span>
    </a>
    <ul>
      <li><a class="active" href="/">Home</a></li>
      <li><a href="/games">Games</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</nav>

<style lang="scss">
  nav .container {
    display: flex;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .logo {
    font-size: 26px;;
    display: flex;
    color: white;
    font-weight: 900;
    flex: 1;

    .color {
      color: #FEA303;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
  }

  li a {
    display: block;
    font-size: 1.8rem;
    padding: 18px 20px;
    color: rgba(255, 255, 255, 0.8);
    transition: 0.5s color ease-out;

    &.active {
      color: #FFFFFF;
    }

    &:hover {
      color: #FEA303;
    }
  }
</style>