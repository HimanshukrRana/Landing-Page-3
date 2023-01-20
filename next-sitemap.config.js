/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
  /** Without additional '/' on the end, e.g. https://google.com */
  siteUrl: '',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
