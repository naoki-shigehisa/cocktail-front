module.exports = {
  siteUrl: 'https://www.cockhome.com',
  additionalPaths: async () => {
    const fields = [];
    const recipesCount = 7;
    for (var i = 1; i <= recipesCount; i++) {
      fields.push({
        loc: '/recipes/' + i,
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      })
    }
  
    return fields;
  },
  exclude: [],
};
