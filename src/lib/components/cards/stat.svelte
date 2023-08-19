<script lang="ts">
	export let title: string;
	export let value: string;
	export let desc: string;
</script>

<div class="stat">
	<div class="stat-figure text-secondary">
		<slot />
	</div>
	<div class="stat-title">
		{title}
	</div>
	<div class="stat-value">
		{value}
	</div>
	<div class="stat-desc">
		{desc}
	</div>
</div>
