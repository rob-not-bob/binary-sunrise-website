<script lang="ts">
  import { page } from '$app/stores';

  const routes = [
    ['Home', '/'],
    ['Games', '/games'],
    ['Blog', '/blog'],
    ['About', '/about'],
    ['Contact', '/contact'],
  ];
</script>

<nav>
  <div class="container">
    <a href="/" class="logo">
      <span>Binary<span class="color">Sunrise</span></span>
    </a>
    <ul>
      {#each routes as [name, route] (name)}
        <li>
          <a class:active={$page.url.pathname === route} href={route}>{name}</a>
        </li>
      {/each}
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
    font-size: 26px;
    display: flex;
    color: white;
    font-weight: 900;
    flex: 1;

    .color {
      color: var(--accent);
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
      color: white;
    }

    &:hover {
      color: var(--accent);
    }
  }
</style>
