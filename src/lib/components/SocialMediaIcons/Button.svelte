<script lang="ts">
  import type { SvelteComponent } from 'svelte';

  export let href: string;
  export let icon: writeable<typeof SvelteComponent>;
</script>

<a {href}>
  <svelte:component this={icon} />
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

    &:hover {
      background-color: var(--accent);
      & :global(svg) {
        color: white;
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
