import { css } from "@emotion/react"
import React from "react"

import { RecipePageProps } from "@/components/_pages/recipe/RecipePageProps"

import { TopProps } from "@/components/recipe/top/TopProps"
import { HowToMakeProps } from "@/components/recipe/how_to_make/HowToMakeProps"

import { TopSp } from "@/components/recipe/top/TopSp"
import { HowToMakeSp } from "@/components/recipe/how_to_make/HowToMakeSp"

export const RecipePageSp: React.FC<RecipePageProps> = ({
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
  glass,
  tools,
}) => {
  const topProps: TopProps = {
    name: name,
    nameEn: nameEn,
    description: description,
    thumbnailUrl: thumbnailUrl,
    materials: materials,
  }

  const howToMakeProps: HowToMakeProps = {
    isIce: isIce,
    technique: technique,
    glass: glass,
    steps: steps,
  }

  return (
    <div css={nameStyle}>
      <TopSp {...topProps}/>
      <HowToMakeSp {...howToMakeProps}/>
    </div>
  )
}

const nameStyle = css`
  font-size: 40px;
`
