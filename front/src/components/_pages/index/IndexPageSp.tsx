import { css } from "@emotion/react"
import React from "react"

import { IndexPageProps } from "@/components/_pages/index/IndexPageProps"

import { LatestRecipesProps } from "@/components/index/latest_recipes/LatestRecipesProps"

import { TopSp } from "@/components/index/top/TopSp"
import { LatestRecipesSp } from "@/components/index/latest_recipes/LatestRecipesSp"

export const IndexPageSp: React.FC<IndexPageProps> = ({
  latestRecipes,
}) => {
  const latestRecipesProps: LatestRecipesProps = {
    latestRecipes: latestRecipes,
  }

  return (
    <div>
      <TopSp />
      <div css={indexPageStyle}>
        <LatestRecipesSp {...latestRecipesProps}/>
      </div>
    </div>
  )
}

const indexPageStyle = css`
  width: calc(100% - 40px);
  margin: 0 20px;
`