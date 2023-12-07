<div class="container privacy-policy">
  <div class="row">
    <div class="col" />
    <div class="col-md-8">
      <slot />
    </div>
    <div class="col" />
  </div>
</div>

<style lang="scss">
  .privacy-policy {
    font-size: 1.6rem;
  }

  .privacy_policy :global(h1),
  :global(h2),
  :global(h3),
  :global(h4),
  :global(h5),
  :global(h6) {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  .privacy-policy :global(p) {
    margin-bottom: 1.6rem;
  }

  :global(ul),
  :global(ol) {
    padding-inline-start: 2rem;
    margin-bottom: 1rem;
  }
</style>
