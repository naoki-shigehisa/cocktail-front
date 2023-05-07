import { css } from "@emotion/react"
import React from "react"

import { MaterialPageProps } from "@/components/_pages/material/MaterialPageProps"
import { TopProps } from "@/components/material/top/TopProps"
import { RecipesProps } from "@/components/material/recipes/RecipesProps"

import { TopPc } from "@/components/material/top/TopPc"
import { RecipesPc } from "@/components/material/recipes/RecipesPc"

export const MaterialPagePc: React.FC<MaterialPageProps> = ({
  name,
  nameEn,
  description,
  thumbnailUrl,
  amazonUrl,
  isAlcohol,
  recipes,
}) => {
  const topProps: TopProps = {
    name: name,
    nameEn: nameEn,
    description: description,
    thumbnailUrl: thumbnailUrl,
  }

  const recipesProps: RecipesProps = {
    material_name: name,
    recipes: recipes,
  }

  return (
    <div css={MaterialPageStyle}>
      <TopPc {...topProps}/>
      <RecipesPc {...recipesProps}/>
    </div>
  )
}

const MaterialPageStyle = css`
  max-width: 1100px;
  margin: auto;
`
