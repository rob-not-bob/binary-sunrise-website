<script lang="ts">
  export let title: string;
  export let description: string;
  export let postHref: string;
  export let backgroundImage: any;
  export let authorName: string;
  export let date: string;

  const MAX_DESCRIPTION_LENGTH = 130;
</script>

<div class="card">
  <div class="hero-image-wrap">
    <a href={postHref}>
      <img class="hero-image" src={backgroundImage} alt={title} />
    </a>
  </div>
  <div class="cardBlock">
    <h2 class="title">
      <a href={postHref}>{title}</a>
    </h2>
    <p class="description">
      {description.substring(0, MAX_DESCRIPTION_LENGTH) + (description.length > MAX_DESCRIPTION_LENGTH ? '...' : '')}
    </p>
    <span class="authorMeta">
      <strong class="author">{authorName}</strong>
      <br />
      <span class="date">{date}</span>
    </span>
  </div>
</div>

<style lang="scss">
  .card {
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
  }

  .hero-image {
    height: auto;
    width: 100%;
    object-position: 38% 22%;
    object-fit: cover;
    border-radius: 7px;
    margin-bottom: 24px;
  }

  .cardBlock {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .title {
    line-height: 1.2;
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 5px;

    a {
      color: #222;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .description {
    color: #888;
    line-height: 1.5;
    font-weight: 400;
    font-size: 1.4rem;
    margin-bottom: 8px;
  }

  .author {
    font-size: 1.4rem;
  }

  .date {
    color: #888;
    font-size: 1.3rem;
  }
</style>
