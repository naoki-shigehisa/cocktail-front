import { css } from "@emotion/react"
import React from "react"

import { IndexPageProps } from "@/components/_pages/index/IndexPageProps"

import { LatestRecipesProps } from "@/components/index/latest_recipes/LatestRecipesProps"

import { TopPc } from "@/components/index/top/TopPc"
import { LatestRecipesPc } from "@/components/index/latest_recipes/LatestRecipesPc"

export const IndexPagePc: React.FC<IndexPageProps> = ({
  latestRecipes,
}) => {
  const latestRecipesProps: LatestRecipesProps = {
    latestRecipes: latestRecipes,
  }

  return (
    <div>
      <TopPc />
      <div css={indexPageStyle}>
        <LatestRecipesPc {...latestRecipesProps}/>
      </div>
    </div>
  )
}

const indexPageStyle = css`
  width: 1100px;
  margin: auto;
`
