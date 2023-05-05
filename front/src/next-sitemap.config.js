import { getRecipesCount } from "@/lib/cocktailServerClient"

module.exports = {
  siteUrl: 'https://www.cockhome.com',
  additionalPaths: siteUrls,
  exclude: [],
};

const siteUrls = async () => {
  const fields = [];
  const recipesCount = await getRecipesCount();
  for (var i = 1; i <= recipesCount; i++) {
    fields.push('/recipes/' + i);
  }

  return fields;
};
