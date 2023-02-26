import type { NextPage, GetServerSideProps } from "next"

import { getRecipe } from "@/lib/cocktailServerClient"
import { RecipePageProps } from "@/components/_pages/recipe/RecipePageProps"
import { RecipePage } from "@/components/_pages/recipe/RecipePage"

type Props = RecipePageProps & { statusCode: 200 }

interface Hashtag {
  id: number
  name: string
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { req, query, res } = context
  const recipe = await getRecipe(Number(query.id))

  if (recipe == undefined) {
    return {
      notFound: true,
    }
  }

  const pageProps: RecipePageProps = {
    name: recipe.name,
    nameEn: recipe.name_en,
    description: recipe.description,
    thumbnailUrl: recipe.thumbnail_url,
    isIce: recipe.is_ice,
    alcohol: recipe.alcohol,
    technique: recipe.technique,
    type: recipe.type,
    taste: recipe.taste,
    color: recipe.color,
    materials: recipe.recipe_materials,
    steps: recipe.recipe_steps,
    tools: recipe.recipe_tools,
  }

  return { props: { statusCode: 200, ...pageProps } }
}

const Page: NextPage<Props> = (props) => {
  return <RecipePage {...props} />
}

export default Page
