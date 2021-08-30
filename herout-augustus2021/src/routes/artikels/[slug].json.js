import { getArticle, getAllArticles } from './_articles.js';

export async function get({ params }) {
	let article = await getArticle(params.slug);
	let articles = await getAllArticles();

	let suggestedArticles = articles.filter((article) => article.slug != params.slug);

	for (let i = suggestedArticles.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[suggestedArticles[i], suggestedArticles[j]] = [suggestedArticles[j], suggestedArticles[i]];
	}

	suggestedArticles.splice(4);

	if (article && suggestedArticles) return { body: { article, suggestedArticles } };
}
