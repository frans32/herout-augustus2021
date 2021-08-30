<script>
	export let article;
</script>

<a href="/artikels/{article.slug}" class="article">
	<picture>
		<source
			srcset="/i/720/{article.imageURL}.webp 1125w, /i/480/{article.imageURL}.webp 750w, /i/240/{article.imageURL}.webp 375w"
			type="image/webp"
		/>
		<source
			srcset="/i/720/{article.imageURL}.jpg 1125w, /i/480/{article.imageURL}.jpg 750w, /i/240/{article.imageURL}.jpg 375w"
			type="image/jpeg"
		/>
		<img loading="lazy" width="192" height="192" alt="" src="/i/192/{article.imageURL}.jpg" />
	</picture>
	<div>
		<h3>{@html article.title}</h3>
		<div class="author">{article.author}</div>
	</div>
</a>

<style>
	.article {
		display: flex;
		flex-direction: column-reverse;
		padding: 20px 0;
		border-bottom: 1px solid #e5e5e5;
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;
	}

	.article > div {
		padding: 4px 0;
	}

	.article h3 {
		font: 400 28px/1.2 'Shippori Mincho', serif;
		color: #3d3d3d;
		margin: 0;
	}

	.article .author {
		color: #555555;
		font-size: 16px;
		margin: 12px 0 20px;
	}

	.article:active {
		opacity: 0.98;
	}

	.article img {
		display: block;
		object-fit: cover;
		background: #f4f4f4;
		border-radius: 8px;
		width: 100%;
		box-shadow: #00eeff1e -3px 3px 0 -1px;
	}

	@media (min-width: 700px) {
		.article {
			padding: 24px 0;
		}

		.article h3 {
			width: 540px;
			font: 400 32px/1.2 'Shippori Mincho', serif;
			color: #3d3d3d;
			margin: 0;
		}

		.article .author {
			font-size: 18px;
			margin: 16px 0 24px;
		}

		.article img {
			height: 300px;
			transition: box-shadow 0.3s;
		}

		.article:hover img {
			box-shadow: #00eeff5e -3px 3px 0 0;
		}
	}
</style>
