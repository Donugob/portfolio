/** next-sitemap.config.js */
module.exports = {
	siteUrl: process.env.SITE_URL || 'https://build-with-ugob.com.ng',
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [{ userAgent: '*', allow: '/' }],
	},
};
