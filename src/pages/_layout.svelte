<!-- src/pages/admin/_layout.svelte -->
<script>
  import { goto } from '@sveltech/routify'
  import auth from './_auth'
</script>

<!-- {#await auth()}
  Checking permissions...
{:then}
  <slot />
{:catch}
  {$goto('/login')}
{/await} -->

{#await auth()}

<!-- Show a waiting message/page/animation here -->
<hi>Verifying user...</hi>

<!-- Pass the user to all nested pages in the project -->
{:then user}
  <slot/>
{/await}