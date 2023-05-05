module.exports = {
  siteUrl: 'https://www.cockhome.com',
  additionalPaths: siteUrls,
  exclude: [],
};

const siteUrls = async () => {
  const fields = [];
  const recipesCount = 4;
  for (var i = 1; i <= recipesCount; i++) {
    fields.push('/recipes/' + i);
  }

  return fields;
};
