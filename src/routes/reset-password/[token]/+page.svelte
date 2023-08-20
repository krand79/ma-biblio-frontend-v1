<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(async () => {
		const { token } = data.props;
	});
</script>

<h1>
	{data.props.token}
</h1>
