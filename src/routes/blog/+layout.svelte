<script lang="ts">
  import Nav from '$lib/components/Nav';
  import EmailSignup from '$lib/components/EmailSignup.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Nav />

<slot />

<EmailSignup />
<Footer />
