module.exports = {
  siteUrl: 'https://www.cockhome.com',
  additionalPaths: async () => {
    const fields = [];
    const recipesCount = 4;
    for (var i = 1; i <= recipesCount; i++) {
      fields.push({
        loc: '/recipes/' + i,
        priority: 0.8,
      })
    }
  
    return fields;
  },
  exclude: [],
};
