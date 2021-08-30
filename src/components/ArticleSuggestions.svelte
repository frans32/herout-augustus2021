<script>
	export let articles = [];
</script>

<section>
	<h2 class="heading">Lees Verder</h2>

	{#each articles as article}
		<a class="article" href="/artikels/{article.slug}">
			<h3>{@html article.title}</h3>
			<div class="author">{article.author}</div>
		</a>
	{/each}
</section>

<style>
	section {
		padding: 20px;
		margin: 0 auto;
		max-width: 780px;
	}

	.heading {
		font: 400 24px/0.69 'Jost', sans-serif;
		color: #0046c7;
		margin: 0;
		border-bottom: 1px solid #e5e5e5;
	}

	.article {
		display: block;
		padding: 20px 0;
		border-bottom: 1px solid #e5e5e5;
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;
	}

	.article h3 {
		font: 600 24px/1.2 'Shippori Mincho', serif;
		color: #222222;
		margin: 0;
	}

	.article .author {
		color: #555555;
		margin-top: 8px;
		font-size: 16px;
	}

	.article:active {
		opacity: 0.8;
	}

	@media (min-width: 700px) {
		.article {
			padding: 24px 0;
		}

		.article h3 {
			font: 600 26px/1.2 'Shippori Mincho', serif;
		}

		.article .author {
			font-size: 18px;
			margin-top: 12px;
		}
	}
</style>
