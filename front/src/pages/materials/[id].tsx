import type { NextPage, GetServerSideProps } from "next"
import { UAParser } from "ua-parser-js"

import { getMaterial } from "@/lib/cocktailServerClient"

import { MaterialPageProps } from "@/components/_pages/material/MaterialPageProps"
import { MaterialPagePc } from "@/components/_pages/material/MaterialPagePc"
import { MaterialPageSp } from "@/components/_pages/material/MaterialPageSp"

import { MetaDataProps } from "@/components/_common/meta_data/MetaDataProps"
import { MetaData } from "@/components/_common/meta_data/MetaData"

type Props = MaterialPageProps & MetaDataProps & { statusCode: 200 }

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

  const material = await getMaterial(Number(query.id))
  if (material == undefined) {
    return {
      notFound: true,
    }
  }

  const pageProps: MaterialPageProps = {
    name: material.name,
    nameEn: material.name_en,
    description: material.description,
    thumbnailUrl: material.thumbnail_url,
    amazonUrl: material.amazon_url,
    isAlcohol: material.is_alcohol,
    recipes: material.recipes.map((recipe: any) => {
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

  const metaDataProps: MetaDataProps = {
    metaTitle: material.name + 'を使ったカクテル | cockhome(カクホーム)',
    metaDescription: material.name + 'を使ったカクテルの作り方や材料、必要な道具がわかる！お家でカクテル作るならカクホーム！',
    metaKeyword: material.name + ',カクテル,お家,自宅',
    metaImageUrl: material.thumbnail_url,
  }

  return { props: { statusCode: 200, ...pageProps, ...metaDataProps } }
}

const Page: NextPage<Props> = (props) => {
  if (props.isMobile) {
    return (
      <div>
        <MetaData {...props} />
        <MaterialPageSp {...props} />
      </div>
    )
  } else {
    return (
      <div>
        <MetaData {...props} />
        <MaterialPagePc {...props} />
      </div>
    )
  }
}

export default Page
