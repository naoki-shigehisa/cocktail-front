import { css } from "@emotion/react"
import React from "react"

import { RecipePageProps } from "@/components/_pages/recipe/RecipePageProps"

import { TopProps } from "@/components/recipe/top/TopProps"
import { HowToMakeProps } from "@/components/recipe/how_to_make/HowToMakeProps"
import { InfoProps } from "@/components/recipe/info/InfoProps"
import { TriviaProps } from "@/components/recipe/trivia/TriviaProps"
import { FindToMaterialsProps } from "@/components/recipe/find_to_materials/FindToMaterialsProps"
import { FindToToolsProps } from "@/components/recipe/find_to_tools/FindToToolsProps"

import { TopSp } from "@/components/recipe/top/TopSp"
import { HowToMakeSp } from "@/components/recipe/how_to_make/HowToMakeSp"
import { InfoSp } from "@/components/recipe/info/InfoSp"
import { TriviaSp } from "@/components/recipe/trivia/TriviaSp"
import { FindToMaterialsSp } from "@/components/recipe/find_to_materials/FindToMaterialsSp"
import { FindToToolsSp } from "@/components/recipe/find_to_tools/FindToToolsSp"

export const RecipePageSp: React.FC<RecipePageProps> = ({
  name,
  nameEn,
  description,
  trivia,
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

  const triviaProps: TriviaProps = {
    name: name,
    trivia: trivia,
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
    <div css={nameStyle}>
      <TopSp {...topProps}/>
      <HowToMakeSp {...howToMakeProps}/>
      <InfoSp {...infoProps}/>
      <TriviaSp {...triviaProps}/>
      <FindToMaterialsSp {...findToMaterialsProps}/>
      <FindToToolsSp {...findToToolsProps}/>
    </div>
  )
}

const nameStyle = css`
  font-size: 40px;
`
