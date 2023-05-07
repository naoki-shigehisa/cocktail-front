import { css } from "@emotion/react"
import React from "react"

import { MaterialPageProps } from "@/components/_pages/material/MaterialPageProps"
import { TopProps } from "@/components/material/top/TopProps"
import { RecipesProps } from "@/components/material/recipes/RecipesProps"

import { TopSp } from "@/components/material/top/TopSp"
import { RecipesSp } from "@/components/material/recipes/RecipesSp"

export const MaterialPageSp: React.FC<MaterialPageProps> = ({
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
      <TopSp {...topProps}/>
      <RecipesSp {...recipesProps}/>
    </div>
  )
}

const MaterialPageStyle = css`
  margin: 0 20px;
`
