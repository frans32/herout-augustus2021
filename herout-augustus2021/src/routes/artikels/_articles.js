import fs from 'fs';
import matter from 'gray-matter';
import marked from 'marked';

const contentDir = './content/';
const fileNames = fs.readdirSync(contentDir);
const files = fileNames.map((item) => fs.readFileSync(contentDir + item, { encoding: 'utf8' }));

const articles = fileNames.map((fileName) => {
	let file = fs.readFileSync(contentDir + fileName, { encoding: 'utf8' });
	let gm = matter(file);
	let html = marked(gm.content);

	return {
		slug: fileName.replace(/\.md$/, ''),
		title: gm.data.title,
		author: gm.data.author,
		catagory: gm.data.catagory,
		imageURL: gm.data.image_url,
		imageCredit: gm.data.image_credit,
		type: gm.data.type,
		html
	};
});

export let getAllArticles = () =>
	articles.map((article) => {
		return {
			slug: article.slug,
			title: article.title,
			author: article.author,
			catagory: article.catagory,
			imageURL: article.imageURL,
			type: article.type
		};
	});

export async function getArticle(slug) {
	return articles.find((i) => i.slug == slug);
}
