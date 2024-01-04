<script lang="ts">
  export let googlePlayLink: string | undefined = undefined;
  export let appleAppStoreLink: string | undefined = undefined;
  export let privacyPolicyLink: string | undefined = undefined;

  import googlePlayBadge from './google-play-app-badge.png';
  import appleAppBadge from './apple-app-badge.png';
</script>

<div class="gameMeta">
  <div class="badgeRow">
    {#if googlePlayLink}
      <a href={googlePlayLink} target="_blank">
        <img src={googlePlayBadge} width="153px" height="45px" alt="Get It On Google Play" />
      </a>
    {/if}
    {#if appleAppStoreLink}
      <a href={appleAppStoreLink} target="_blank">
        <img src={appleAppBadge} width="133px" height="45px" alt="Download on the App Store" />
      </a>
    {/if}
  </div>
  {#if privacyPolicyLink}
    <a class="privacyPolicyLink" href={privacyPolicyLink} target="_blank">Privacy Policy</a>
  {/if}
</div>

<style lang="scss">
  .gameMeta {
    background-color: #f3f3f3;
    border-radius: 5px;
    padding: 15px;
    margin: 12px 0;
    box-shadow: 0 5px 5px 0px rgba(0, 0, 0, 0.2);
  }

  .badgeRow {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;

    img {
      height: 45px;
      margin-bottom: 8px;

      &:first-of-type {
        margin-right: 12px;
      }
    }
  }

  .privacyPolicyLink {
    font-size: 1.4rem;
  }
</style>
