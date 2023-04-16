import { css } from "@emotion/react"
import React from "react"

import { RecipePageProps } from "@/components/_pages/recipe/RecipePageProps"

import { TopProps } from "@/components/recipe/top/TopProps"
import { HowToMakeProps } from "@/components/recipe/how_to_make/HowToMakeProps"
import { InfoProps } from "@/components/recipe/info/InfoProps"
import { FindToMaterialsProps } from "@/components/recipe/find_to_materials/FindToMaterialsProps"
import { FindToToolsProps } from "@/components/recipe/find_to_tools/FindToToolsProps"

import { TopPc } from "@/components/recipe/top/TopPc"
import { HowToMakePc } from "@/components/recipe/how_to_make/HowToMakePc"
import { InfoPc } from "@/components/recipe/info/InfoPc"
import { FindToMaterialsPc } from "@/components/recipe/find_to_materials/FindToMaterialsPc"
import { FindToToolsPc } from "@/components/recipe/find_to_tools/FindToToolsPc"

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

  const infoProps: InfoProps = {
    alcohol: alcohol,
    type: type,
    taste: taste,
    color: color,
  }

  const findToMaterialsProps: FindToMaterialsProps = {
    name: name,
    materials: materials,
  }

  const findToToolsProps: FindToToolsProps = {
    name: name,
    tools: tools,
  }

  return (
    <div css={RecipePageStyle}>
      <TopPc {...topProps}/>
      <HowToMakePc {...howToMakeProps}/>
      <InfoPc {...infoProps}/>
      <FindToMaterialsPc {...findToMaterialsProps}/>
      <FindToToolsPc {...findToToolsProps}/>
    </div>
  )
}

const RecipePageStyle = css`
  max-width: 1100px;
  margin: auto;
`
