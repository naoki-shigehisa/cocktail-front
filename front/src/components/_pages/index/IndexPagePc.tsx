import { css } from "@emotion/react"
import React from "react"

import { IndexPageProps } from "@/components/_pages/index/IndexPageProps"

import { LatestRecipesProps } from "@/components/index/latest_recipes/LatestRecipesProps"
import { RandomMaterialsProps } from "@/components/index/random_materials/RandomMaterialsProps"

import { TopPc } from "@/components/index/top/TopPc"
import { LatestRecipesPc } from "@/components/index/latest_recipes/LatestRecipesPc"
import { RandomMaterialsPc } from "@/components/index/random_materials/RandomMaterialsPc"

export const IndexPagePc: React.FC<IndexPageProps> = ({
  latestRecipes,
  randomMaterials,
}) => {
  const latestRecipesProps: LatestRecipesProps = {
    latestRecipes: latestRecipes,
  }
  const randomMaterialsProps: RandomMaterialsProps = {
    materials: randomMaterials,
  }

  return (
    <div>
      <TopPc />
      <div css={indexPageStyle}>
        <div css={leftContentStyle}>
          <LatestRecipesPc {...latestRecipesProps}/>
        </div>
        <div css={rightContentStyle}>
          <RandomMaterialsPc {...randomMaterialsProps}/>
        </div>
      </div>
    </div>
  )
}

const indexPageStyle = css`
  width: 1100px;
  margin: auto;
  display: flex;
`

const leftContentStyle = css`
  width: 700px;
`

const rightContentStyle = css`
  width: 350px;
  padding-left: 50px;
`
