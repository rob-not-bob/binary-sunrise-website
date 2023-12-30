<script lang="ts">
  import { page } from '$app/stores';
  import { Hamburger, Close } from '$lib/components/Icons';
  import Logo from '$lib/components/logo.svelte';

  const routes = [
    ['Home', '/'],
    ['Games', '/games'],
    // ['Blog', '/blog'],
    ['About', '/about'],
  ];

  let isMenuExpanded = false;
  let icon = isMenuExpanded ? Close : Hamburger;
  function onClick() {
    isMenuExpanded = !isMenuExpanded;
    icon = isMenuExpanded ? Close : Hamburger;
  }

  const isRouteActive = (route: string) => {
    const path = $page.url.pathname;
    if (route === '/') {
      return path === route;
    }

    return path.startsWith(route);
  };
</script>

<nav>
  <div class="nav-bar" class:expanded={isMenuExpanded}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="container">
      <button type="button" class="menu-toggle" on:click={onClick}>
        <svelte:component this={icon} color="white" />
      </button>
      <a href="/" class="logo">
        <Logo size="65px" />
        <span>Binary<span class="color">Sunrise</span></span>
      </a>
      <div class="spacer" />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <div class="nav-links" on:click={onClick} role="dialog">
        <ul>
          {#each routes as [name, route] (name)}
            <li>
              <a class:active={isRouteActive(route)} href={route}>{name}</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
  <div class="nav-bar-spacer" />
</nav>

<style lang="scss">
  $nav-height: 100px;
  $nav-color: hsl(280deg 89% 15% / 95%);
  .nav-bar {
    height: $nav-height;
    background-color: $nav-color;
    position: fixed;
    inset: 0 0 auto 0;
  }

  .nav-bar-spacer {
    height: $nav-height;
    margin-bottom: 10px;
  }

  .container {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    font-size: 26px;
    font-weight: 300;
    display: flex;
    color: white;
    :global(svg) {
      margin-right: 10px;
    }

    .color {
      color: var(--accent);
      font-weight: 700;
    }

    &:hover {
      text-decoration: none;
    }
  }

  $menu-size: 28px;
  $menu-margin: 12px;
  .spacer {
    margin-left: $menu-margin;
    width: $menu-size;
  }

  .menu-toggle {
    background-color: transparent;
    outline: 0;
    border: 0;
    cursor: pointer;
    padding: 0;
    margin-right: $menu-margin;

    :global(svg) {
      width: $menu-size;
      height: $menu-size;
    }
  }

  .expanded {
    .nav-links {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
  }
  .nav-links {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    inset: $nav-height 0 auto 0;
    height: calc(100vh - $nav-height);
    opacity: 0;
    transition: opacity 0.25s ease-out;
    pointer-events: none;
    z-index: 1;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    background-color: $nav-color;
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
      text-decoration: none;
    }
  }

  @media screen and (min-width: 768px) {
    .menu-toggle,
    .spacer {
      display: none;
    }

    .nav-links {
      position: static;
      height: auto;
      opacity: 1;
      pointer-events: auto;
      background-color: transparent;
    }

    ul {
      flex-direction: row;
      background-color: transparent;
    }
  }
</style>
