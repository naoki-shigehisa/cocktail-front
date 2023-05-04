import type { NextPage, GetServerSideProps } from "next"
import { UAParser } from "ua-parser-js"

import { getLatestRecipes } from "@/lib/cocktailServerClient"

import { IndexPageProps } from "@/components/_pages/index/IndexPageProps"
import { IndexPagePc } from "@/components/_pages/index/IndexPagePc"
import { IndexPageSp } from "@/components/_pages/index/IndexPageSp"

type Props = IndexPageProps & { statusCode: 200 }

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { req } = context

  const userAgent = req.headers["user-agent"]
  var isMobile = false
  if (userAgent) {
    const uaParserInstance = new UAParser().setUA(userAgent)
    isMobile = uaParserInstance.getDevice().type == 'mobile'
  }

  const recipes = await getLatestRecipes()
  if (recipes == undefined) {
    return {
      notFound: true,
    }
  }

  const pageProps: IndexPageProps = {
    latestRecipes: recipes.map((recipe: any) => {
      return {
        id: recipe.id,
        name: recipe.name,
        nameEn: recipe.name_en,
        description: recipe.description,
        thumbnailUrl: recipe.thumbnail_url,
        materials: recipe.recipe_materials.map((recipe_material: any) => {
          return {
            id: recipe_material.id,
            name: recipe_material.name,
          }
        }),
      }
    }),
    isMobile: isMobile,
  }

  return { props: { statusCode: 200, ...pageProps } }
}

const Page: NextPage<Props> = (props) => {
  if (props.isMobile) {
    return <IndexPageSp {...props} />
  } else {
    return <IndexPagePc {...props} />
  }
}

export default Page
