<script>
	export let articles;
	import ArticleListSmall from '../components/ArticleListSmall.svelte';
	import ArticleListLarge from '../components/ArticleListLarge.svelte';
</script>

<section>
	<h2 class="heading">Artikels</h2>

	{#each articles as article, i}
		<svelte:component
			this={article.type == 'large' ? ArticleListLarge : ArticleListSmall}
			{article}
		/>
	{/each}
</section>

<style>
	section {
		padding: 0 20px;
	}

	.heading {
		font: 400 24px/0.69 'Jost', sans-serif;
		color: #0046c7;
		margin: 32px 0 4px;
		border-bottom: 1px solid #e5e5e5;
	}

	@media (min-width: 700px) {
		.heading {
			margin: 16px 0 8px;
		}
	}
</style>
