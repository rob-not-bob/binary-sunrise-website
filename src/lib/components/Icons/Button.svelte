<script lang="ts">
  export let href: string = '#';
</script>

<a {href} on:click {...$$restProps}>
  <slot />
</a>

<style lang="scss">
  a {
    --size: 40px;
    width: var(--size);
    height: var(--size);
    border-radius: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    margin-left: 5px;
    background-color: #ebe8ed;
    transition: all 0.25s ease-out;

    & :global(svg) {
      outline: 0;
    }

    &:hover {
      background-color: var(--accent);
      & :global(svg) {
        fill: white;
      }
    }
  }

  a :global(svg) {
    color: #2a1d34;
    --size: 20px;
    width: var(--size);
    height: var(--size);
  }
</style>
