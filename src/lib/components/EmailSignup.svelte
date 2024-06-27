<!-- From Mailer Lite's Embed Sign Up -->
<script lang="ts">
  var loading = false;
  var show_success = false;

  async function handleSubmit(e: SubmitEvent) {
    loading = true;
    const formData = new FormData(e.target as HTMLFormElement)

    try {
      const response = await fetch("https://assets.mailerlite.com/jsonp/1001877/forms/125205569294304763/subscribe", {
        method: "POST",
        body: formData,
      });

      var result = await response.json();
      console.info('subscription response', result);
      if (result.success) {
        show_success = true;
      }

    } catch (e) {
      console.error(e);
    }

    loading = false;
  }

  fetch("https://assets.mailerlite.com/jsonp/1001877/forms/125205569294304763/takel")
</script>
<div id="mlb2-15939842" class="ml-form-embedContainer">
  <div class="container">
    {#if !show_success}
      <div class="row">
        <div class="col-md-12">
        <h2>Save your spot in the upcoming beta!</h2>
          <p>I'm still working on my game but when I'm ready to invite playtesters you'll be the first to hear! I'll also send out an update roughly once a month about recent development.</p>
          <p>If that sounds interesting, submit your email below!</p>
        </div>
      </div>
      <form on:submit|preventDefault={handleSubmit} data-code="">
        <div class="row">
          <div class="col-md-8">
            <input type="email" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email" required>
          </div>
          <div class="col-md-4">
            {#if loading}
              <button disabled type="button" class="loading">
                <div class="ml-form-embedSubmitLoad"></div>
                <span class="sr-only">Loading...</span>
              </button>
            {:else}
              <button type="submit" class="primary">Sign Up</button>
            {/if}
          </div>
        </div>
        <input type="hidden" name="ml-submit" value="1">
        <input type="hidden" name="anticsrf" value="true">
      </form>
    {:else}
      <h2>Thank you!</h2>
      <p class="confirmation-message">We've sent you an email to confirm your beta sign up :)</p>
    {/if}
  </div>
</div>

<style lang="scss">
  .ml-form-embedContainer {
    background-color: #ebe8ed;
    padding: 48px 12px;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 8px;
  }

  form {
    margin-top: 20px;
  }

  input[type='email'] {
    height: 50px;
    padding: 6px 20px;
    border-radius: 7px;
    border: 1px solid #ced4da;
    font-size: 1.6rem;
    width: 100%;
    margin-bottom: 16px;

    &:active,
    &:focus-visible {
      border-color: black;
      border-width: 1px;
      outline: 0;
    }
  }

  button {
    width: 100%;
    height: 50px;
    color: white;
    background-color: var(--accent);
    border-radius: 30px;
    border: 2px solid transparent;
    padding: 12px 20px;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.16rem;
    transition: all 0.25s;
    cursor: pointer;

    &[disabled] {
      background-color: #a8a8a8;
      cursor: not-allowed;

      &:hover {
        background-color: #a8a8a8;
        color: white;
        box-shadow: none;
      }
    }

    &:hover {
      background-color: white;
      color: var(--accent);
      box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);
    }

    &:focus-visible {
      box-shadow: 0 0 0 0.4rem rgba(210, 130, 20, 0.5);
      outline: 0;
    }
  }

  .container p {
    font-size: 14px;
    color: #666;
    margin-bottom: 4px;
  }
</style>
