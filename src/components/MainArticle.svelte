<script>
	import { fly } from 'svelte/transition';

	export let mainArticle;
</script>

<div class="background">
	<slot />
	<div class="desktop-wrapper">
		<section class="articleInfo">
			<div class="catagory">{mainArticle.catagory}</div>
			<h1 in:fly={{ duration: 500, y: 20, opacity: 0 }}>{mainArticle.title}</h1>
			<div in:fly={{ delay: 100, duration: 500, y: 15, opacity: 0 }} class="author">
				{mainArticle.author}
			</div>
			<a href="/artikels/{mainArticle.slug}" class="btnLees desktop">Lees</a>
		</section>
		<div class="heroImage">
			<picture>
				<source
					srcset="/i/720/{mainArticle.imageURL}.webp 1125w, /i/480/{mainArticle.imageURL}.webp 750w, /i/240/{mainArticle.imageURL}.webp 375w"
					type="image/webp"
				/>
				<source
					srcset="/i/720/{mainArticle.imageURL}.jpg 1125w, /i/480/{mainArticle.imageURL}.jpg 750w, /i/240/{mainArticle.imageURL}.jpg 375w"
					type="image/jpeg"
				/>
				<img class="heroImg" src="/i/720/{mainArticle.imageURL}.jpg" alt="" />
			</picture>
			<a href="/artikels/{mainArticle.slug}" class="btnLees mobile">Lees</a>
		</div>
	</div>
</div>

<style>
	:root {
		--background: #fff0c9;
	}

	.catagory {
		text-transform: uppercase;
		font: 500 14px/1 'Jost', apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto';
		color: #555555;
	}

	h1 {
		margin: 12px 0 16px;
		font: 600 32px/1.2 'Shippori Mincho', serif;
		color: #303030;
	}

	.author {
		color: #555;
		font-size: 18px;
	}

	.btnLees {
		display: block;
		width: 72px;
		background: #fafafa;
		color: #292929;
		font-weight: 400;
		line-height: 1;
		padding: 11px 17px;
		text-align: center;
		border-radius: 12px;
		text-decoration: none;
		user-select: none;
		border: #eaeaea 2px solid;
	}

	@media (max-width: 699px) {
		.background {
			background: var(--background);
		}

		/* .catagory {
			display: none;
		}

		h1 {
			margin: 0 0 16px;
		} */

		.author {
			font-size: 16px;
		}

		.articleInfo {
			padding: 20px;
		}

		.heroImage {
			position: relative;
			display: block;
			padding: 0px 0px 20px 20px;
		}

		.heroImage img {
			display: block;
			width: 100%;
			height: 200px;
			border-radius: 10px 0 0 10px;
			object-fit: cover;
		}

		.desktop {
			display: none;
		}

		.btnLees {
			position: absolute;
			right: 20px;
			bottom: 40px;
		}
	}

	@media (min-width: 700px) {
		.desktop-wrapper {
			margin: 16px auto;
			display: flex;
			justify-content: center;
		}

		.articleInfo {
			display: flex;
			flex-direction: column;
			justify-content: center;
			order: 1;
			background: var(--background);
			padding: 0 24px;
			flex: 0 0 340px;
			margin-left: 8px;
		}

		.heroImage {
			order: 0;
			flex: 0 1 900px;
		}

		.heroImage img {
			display: block;
			height: 420px;
			width: 100%;
			object-fit: cover;
		}

		.mobile {
			display: none;
		}

		.btnLees {
			margin-top: 32px;
			border: #f8e5b6 2px solid;
			transition: border 0.2s;
		}
		.btnLees:hover {
			border: #eedbaa 2px solid;
		}
	}
</style>
