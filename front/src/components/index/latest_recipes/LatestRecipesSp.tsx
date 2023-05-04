import { css } from "@emotion/react"
import React from "react"
import Image from "next/image"

import { LatestRecipesProps } from "@/components/index/latest_recipes/LatestRecipesProps"
import { SectionTitleProps } from "@/components/_common/section_title/SectionTitleProps"

import { SectionTitleSp } from "@/components/_common/section_title/SectionTitleSp"

export const LatestRecipesSp: React.FC<LatestRecipesProps> = ({
  latestRecipes,
}) => {
  const sectionTitleProps: SectionTitleProps = {
    title: '最新のレシピ',
  }

  return (
    <div css={mainStyle}>
      <SectionTitleSp {...sectionTitleProps}/>
      {latestRecipes.map((latestRecipe)=><div css={recipeCardStyle} key={latestRecipe.id}>
        <div css={imageBoxStyle}>
          <Image
            css={imageStyle}
            src={latestRecipe.thumbnailUrl}
            alt={latestRecipe.name}
            fill
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div css={recipeInfoAreaStyle}>
          <div css={nameEnStyle}>
            {latestRecipe.nameEn}
          </div>
          <div css={nameStyle}>
            {latestRecipe.name}
          </div>
          <div css={materialAreaStyle}>
            {latestRecipe.materials.map((material)=><span css={materialStyle} key={material.id}>
              {material.name}
            </span>)}
          </div>
          <div css={descriptionStyle}>
            {latestRecipe.description}
          </div>
        </div>
      </div>)}
    </div>
  )
}

const mainStyle = css`
  margin-top: 20px;
`

const recipeCardStyle = css`
  display: flex;
  padding: 10px 0;
`

const imageBoxStyle = css`
  position: relative;
  width: 70px;
  height: 100px;
  margin: auto 0;
`

const imageStyle = css`
  border-radius: 10px;
`

const recipeInfoAreaStyle = css`
  width: calc(100% - 80px);
  margin-left: 10px;
`

const nameEnStyle = css`
  padding-bottom: 3px;
  font-size: 12px;
  line-height: 1;
`

const nameStyle = css`
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
`

const materialAreaStyle = css`
  padding-top: 5px;
  font-size: 12px;
  line-height: 1.2;
`

const materialStyle = css`
  padding-right: 5px;
`

const descriptionStyle = css`
  padding-top: 10px;
  font-size: 12px;
  color: #666666;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`
