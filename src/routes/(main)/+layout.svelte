<script lang="ts">
  import '$lib/css/index.scss';
  import Nav from '$lib/components/Nav';
  import EmailSignup from '$lib/components/EmailSignup.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Nav />

<slot />

<EmailSignup />
<Footer />
