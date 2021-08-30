<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch('/artikels.json');
		if (res.ok) return { props: await res.json() };
	}
</script>

<script>
	import Header from '../components/Header.svelte';
	import MainArticle from '../components/MainArticle.svelte';
	import DfWapen from '../components/DfWapen.svelte';
	import ArticleList from '../components/ArticleList.svelte';
	import Footer from '../components/Footer.svelte';
	import Uitgawes from '../components/Uitgawes.svelte';

	export let articles, mainArticleSlug;

	let mainArticle = articles.find((e) => e.slug == mainArticleSlug);
</script>

<svelte:head>
	<title>Die Herout</title>
	<meta property="og:url" content="https://herout.co.za/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Die Herout" />
	<meta property="og:image" content="/i/720/{mainArticle.imageURL}.jpg" />
	<meta property="og:image:width" content="1125" />
	<meta property="og:image:height" content="720" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@dieherout" />
	<meta name="twitter:title" content="Die Herout" />
	<meta
		name="twitter:description"
		content="Die amptelike skoolkoerant van die Hoërskool DF Malan"
	/>
	<meta name="twitter:image" content="https://herout.co.za/i/720/{mainArticle.imageURL}.jpg" />
</svelte:head>

<MainArticle {mainArticle}>
	<Header />
</MainArticle>

<div class="wrapper">
	<div class="main">
		<ArticleList articles={articles.filter((i) => i.slug != mainArticleSlug)} />
	</div>
	<div class="sidebar">
		<DfWapen />
		<Uitgawes />
		<Footer />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		overflow: hidden;
		margin: 0 auto;
		width: 1000px;
		max-width: 100vw;
		flex-wrap: wrap;
	}

	.main {
		flex: 1 680px;
	}

	.sidebar {
		flex: 1 320px;
		border-left: 1px solid #e5e5e5;
	}
</style>
