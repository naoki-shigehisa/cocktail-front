import { css } from "@emotion/react"
import React from "react"

import { IndexPageProps } from "@/components/_pages/index/IndexPageProps"

import { LatestRecipesProps } from "@/components/index/latest_recipes/LatestRecipesProps"
import { RandomMaterialsProps } from "@/components/index/random_materials/RandomMaterialsProps"

import { TopSp } from "@/components/index/top/TopSp"
import { LatestRecipesSp } from "@/components/index/latest_recipes/LatestRecipesSp"
import { RandomMaterialsSp } from "@/components/index/random_materials/RandomMaterialsSp"

export const IndexPageSp: React.FC<IndexPageProps> = ({
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
      <TopSp />
      <div css={indexPageStyle}>
        <LatestRecipesSp {...latestRecipesProps}/>
        <RandomMaterialsSp {...randomMaterialsProps}/>
      </div>
    </div>
  )
}

const indexPageStyle = css`
  width: calc(100% - 40px);
  margin: 0 20px;
`