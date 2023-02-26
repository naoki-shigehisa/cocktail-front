import { css } from "@emotion/react";
import React from "react"

import { RecipePageProps } from "@/components/_pages/recipe/RecipePageProps"

export const RecipePage: React.FC<RecipePageProps> = ({
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
  return (
    <div css={nameStyle}>
      {name}
    </div>
  )
}

const nameStyle = css`
  font-size: 40px;
`
