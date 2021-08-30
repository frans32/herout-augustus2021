<script>
	export let article;
</script>

<a href="/artikels/{article.slug}" class="article">
	<img loading="lazy" width="72" height="72" alt="" src="/i/192/{article.imageURL}.jpg" />
	<div>
		<h3>{@html article.title}</h3>
		<div class="author">{article.author}</div>
	</div>
</a>

<style>
	.article {
		display: flex;
		padding: 16px 0;
		border-bottom: 1px solid #e5e5e5;
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;
	}

	.article > div {
		margin-left: 12px;
	}

	.article h3 {
		font: 400 24px/1.2 'Shippori Mincho', serif;
		color: #3d3d3d;
		margin: 0;
	}

	.article .author {
		color: #555555;
		font-size: 16px;
		margin-top: 12px;
	}

	.article:active {
		opacity: 0.94;
	}

	.article img {
		object-fit: cover;
		background: #f4f4f4;
		border-radius: 8px;
		box-shadow: #00eeff1e -3px 3px 0 -1px;
	}

	@media (min-width: 700px) {
		.article > div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-left: 16px;
		}

		.article h3 {
			font: 400 26px/1.2 'Shippori Mincho', serif;
		}

		.article .author {
			font-size: 18px;
		}

		.article img {
			width: 120px;
			height: 120px;
			transition: box-shadow 0.3s;
		}

		.article:hover img {
			box-shadow: #00eeff5e -3px 3px 0 0;
		}
	}
</style>
