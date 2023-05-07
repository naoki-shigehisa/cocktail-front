import { css } from "@emotion/react"
import React from "react"
import Link from 'next/link'
import Image from "next/image"

import { RecipesProps } from "@/components/material/recipes/RecipesProps"
import { SectionTitleProps } from "@/components/_common/section_title/SectionTitleProps"

import { SectionTitleSp } from "@/components/_common/section_title/SectionTitleSp"

export const RecipesSp: React.FC<RecipesProps> = ({
  material_name,
  recipes,
}) => {
  const sectionTitleProps: SectionTitleProps = {
    title: material_name + 'を使ったレシピ',
  }

  return (
    <div css={mainStyle}>
      <SectionTitleSp {...sectionTitleProps}/>
      {recipes.map((recipe)=><Link href={'/recipes/' + recipe.id} css={linkStyle} key={recipe.id}>
        <div css={recipeCardStyle}>
          <div css={imageBoxStyle}>
            <Image
              css={imageStyle}
              src={recipe.thumbnailUrl}
              alt={recipe.name}
              fill
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div css={recipeInfoAreaStyle}>
            <div css={nameEnStyle}>
              {recipe.nameEn}
            </div>
            <div css={nameStyle}>
              {recipe.name}
            </div>
            <div css={materialAreaStyle}>
              {recipe.materials.map((material)=><span css={materialStyle} key={material.id}>
                {material.name}
              </span>)}
            </div>
            <div css={descriptionStyle}>
              {recipe.description}
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
  line-height: 1.3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`
