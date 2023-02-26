import type { NextPage, GetServerSideProps } from "next"
import { UAParser } from "ua-parser-js"

import { getRecipe } from "@/lib/cocktailServerClient"

import { RecipePageProps } from "@/components/_pages/recipe/RecipePageProps"
import { RecipePagePc } from "@/components/_pages/recipe/RecipePagePc"
import { RecipePageSp } from "@/components/_pages/recipe/RecipePageSp"

type Props = RecipePageProps & { statusCode: 200 }

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { req, query, res } = context

  const userAgent = req.headers["user-agent"]
  var isMobile = false
  if (userAgent) {
    const uaParserInstance = new UAParser().setUA(userAgent)
    isMobile = uaParserInstance.getDevice().type == 'mobile'
  }

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
    isMobile: isMobile,
  }

  return { props: { statusCode: 200, ...pageProps } }
}

const Page: NextPage<Props> = (props) => {
  if (props.isMobile) {
    return <RecipePageSp {...props} />
  } else {
    return <RecipePagePc {...props} />
  }
}

export default Page
