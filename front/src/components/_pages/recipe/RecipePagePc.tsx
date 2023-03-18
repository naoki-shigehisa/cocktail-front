import { css } from "@emotion/react"
import React from "react"

import { RecipePageProps } from "@/components/_pages/recipe/RecipePageProps"

import { TopProps } from "@/components/recipe/top/TopProps"
import { TopPc } from "@/components/recipe/top/TopPc"

export const RecipePagePc: React.FC<RecipePageProps> = ({
  name,
  nameEn,
  description,
  thumbnailUrl,
  isIce,
  alcohol,
  technique,
  type,
  taste,
  color,
  materials,
  steps,
  tools,
}) => {
  const topProps: TopProps = {
    name: name,
    nameEn: nameEn,
    description: description,
    thumbnailUrl: thumbnailUrl,
    materials: materials,
  }

  return (
    <div css={RecipePageStyle}>
      <TopPc {...topProps}/>
    </div>
  )
}

const RecipePageStyle = css`
  max-width: 1100px;
  margin: auto;
`
