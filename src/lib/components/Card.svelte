<script lang="ts">
  export let title: string;
  export let description: string;
  export let postHref: string;
  export let backgroundImage: any;
  export let authorName: string;
  export let date: string;

  const MAX_DESCRIPTION_LENGTH = 200;
</script>

<div class="card row">
  <div class="hero-image-wrap col-lg-5">
    <a href={postHref}>
      <img class="hero-image" src={backgroundImage} alt={title} />
    </a>
  </div>
  <div class="content col-lg-7">
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
  }

  .hero-image {
    height: auto;
    width: 100%;
    object-position: 38% 22%;
    object-fit: cover;
    border-radius: 7px;
    margin-bottom: 24px;
  }

  .content {
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

  @media screen and (min-width: 996px) {
    .card {
      margin-bottom: 32px;
    }

    .hero-image-wrap {
      display: flex;
      align-items: center;
      margin-right: 24px;
    }

    .hero-image {
      margin-bottom: 0;
    }

    .content {
      justify-content: center;
    }

    .title {
      font-size: 4rem;
    }
  }
</style>
