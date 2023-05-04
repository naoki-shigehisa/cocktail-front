import { css } from "@emotion/react"
import React from "react"
import Image from "next/image"

import { LatestRecipesProps } from "@/components/index/latest_recipes/LatestRecipesProps"
import { SectionTitleProps } from "@/components/_common/section_title/SectionTitleProps"

import { SectionTitlePc } from "@/components/_common/section_title/SectionTitlePc"

export const LatestRecipesPc: React.FC<LatestRecipesProps> = ({
  latestRecipes,
}) => {
  const sectionTitleProps: SectionTitleProps = {
    title: '最新のレシピ',
  }

  return (
    <div css={mainStyle}>
      <SectionTitlePc {...sectionTitleProps}/>
    </div>
  )
}

const mainStyle = css`
  margin-top: 20px;
`
