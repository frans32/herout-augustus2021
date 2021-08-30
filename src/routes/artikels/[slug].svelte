<script context="module">
	export async function load({ page, fetch }) {
		const url = `/artikels/${page.params.slug}.json`;
		const res = await fetch(url);
		if (res.ok) return { props: await res.json() };
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	import ArticleSuggestions from '../../components/ArticleSuggestions.svelte';
	import Header from '../../components/Header.svelte';

	export let article, suggestedArticles;
</script>

<svelte:head>
	<title>{article.title.replace('<i>', '').replace('</i>', '')} - Die Herout</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<Header />

<main>
	<div class="articleInfo">
		<h1>{@html article.title}</h1>
		<div class="author">
			{article.author}
		</div>
	</div>
	<picture>
		<source
			srcset="/i/720/{article.imageURL}.webp 1125w, /i/480/{article.imageURL}.webp 750w, /i/240/{article.imageURL}.webp 375w"
			type="image/webp"
		/>
		<source
			srcset="/i/720/{article.imageURL}.jpg 1125w, /i/480/{article.imageURL}.jpg 750w, /i/240/{article.imageURL}.jpg 375w"
			type="image/jpeg"
		/>
		<img in:fade={{ duration: 300 }} class="heroImg" src="/i/720/{article.imageURL}.jpg" alt="" />
	</picture>
	<div class="imgCaption">Foto: {article.imageCredit || 'Verskaf'}</div>
	<div class="content articleContent">
		{@html article.html}
	</div>
</main>

<ArticleSuggestions articles={suggestedArticles} />

<style>
	main {
		padding: 24px 0 20px;
		max-width: 780px;
		margin: 0 auto;
	}

	.articleInfo {
		padding: 0 20px;
	}

	.articleInfo h1 {
		font: 700 32px/1.2 'Shippori Mincho', serif;
		color: #303030;
		margin: 0;
	}

	.articleInfo .author {
		display: block;
		color: #555;
		margin: 20px 0;
	}

	.heroImg {
		display: block;
		width: 100%;
		height: 240px;
		object-fit: cover;
		background: #fafafa;
	}

	@media (min-width: 700px) {
		.heroImg {
			height: 480px;
		}
	}

	.imgCaption {
		display: block;
		text-align: right;
		color: #696969;
		font-size: 14px;
		padding-right: 4px;
	}

	.content {
		font: 19px/1.7 'PT Serif', Roboto, sans-serif;
		color: #333333;
		padding: 0 20px;
	}
</style>
