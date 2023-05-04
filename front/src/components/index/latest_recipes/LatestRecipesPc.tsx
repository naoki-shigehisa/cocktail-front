import { css } from "@emotion/react"
import React from "react"
import Link from 'next/link'
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
      {latestRecipes.map((latestRecipe)=><Link href={'/recipes/' + latestRecipe.id} css={linkStyle} key={latestRecipe.id}>
        <div css={recipeCardStyle}>
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
        </div>
      </Link>)}
    </div>
  )
}

const mainStyle = css`
  margin-top: 20px;
`

const linkStyle = css`
  color: #222;
  text-decoration: none;
`

const recipeCardStyle = css`
  display: flex;
  padding: 10px 0;
`

const imageBoxStyle = css`
  position: relative;
  width: 110px;
  height: 150px;
  margin: auto 0;
`

const imageStyle = css`
  border-radius: 15px;
`

const recipeInfoAreaStyle = css`
  width: calc(100% - 130px);
  margin-left: 20px;
`

const nameEnStyle = css`
  padding-bottom: 5px;
  font-size: 14px;
  line-height: 1;
`

const nameStyle = css`
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
`

const materialAreaStyle = css`
  padding-top: 7px;
  font-size: 14px;
  line-height: 1.2;
`

const materialStyle = css`
  padding-right: 7px;
`

const descriptionStyle = css`
  padding-top: 14px;
  font-size: 14px;
  color: #666666;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`
