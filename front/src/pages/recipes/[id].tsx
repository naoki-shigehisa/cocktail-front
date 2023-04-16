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
    technique: {
      id: recipe.technique.id,
      name: recipe.technique.name,
      description: recipe.technique.description,
    },
    type: {
      id: recipe.type.id,
      name: recipe.type.name,
    },
    taste: {
      id: recipe.taste.id,
      name: recipe.taste.name,
    },
    color: {
      id: recipe.color.id,
      name: recipe.color.name,
    },
    materials: recipe.recipe_materials.map((recipe_material: any) => {
      return {
        id: recipe_material.id,
        name: recipe_material.name,
        nameEn: recipe_material.name_en,
        description: recipe_material.description,
        thumbnailUrl: recipe_material.thumbnail_url,
        amazonUrl: recipe_material.amazon_url,
        isAlcohol: recipe_material.is_alcohol,
        unit: recipe_material.unit,
        amount: recipe_material.amount,
        isOption: recipe_material.is_option,
      }
    }),
    steps: recipe.recipe_steps.map((recipe_step: any) => {
      return {
        id: recipe_step.id,
        order: recipe_step.order,
        content: recipe_step.content,
        thumbnailUrl: recipe_step.thumbnail_url,
      }
    }),
    tools: recipe.recipe_tools.map((recipe_tool: any) => {
      return {
        id: recipe_tool.id,
        name: recipe_tool.name,
        nameEn: recipe_tool.name_en,
        description: recipe_tool.description,
        thumbnailUrl: recipe_tool.thumbnail_url,
        amazonUrl: recipe_tool.amazon_url,
        isGlass: recipe_tool.is_glass,
      }
    }),
    glass: {
      id: recipe.glass.id,
      name: recipe.glass.name,
      nameEn: recipe.glass.name_en,
      description: recipe.glass.description,
      thumbnailUrl: recipe.glass.thumbnail_url,
      amazonUrl: recipe.glass.amazon_url,
      isGlass: recipe.glass.is_glass,
    },
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
