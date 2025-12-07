/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://shreemsoftwaresolutions.com',
	generateRobotsTxt: true,
	sitemapSize: 5000,
	changefreq: 'weekly',
	priority: 0.8,
	exclude: ['/admin/*'], // optional
};
