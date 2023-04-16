import { css } from "@emotion/react"
import React from "react"
import Image from "next/image"

import { TopProps } from "@/components/recipe/top/TopProps"
import { SectionTitleProps } from "@/components/_common/section_title/SectionTitleProps"

import { SectionTitleSp } from "@/components/_common/section_title/SectionTitleSp"

export const TopSp: React.FC<TopProps> = ({
  name,
  nameEn,
  description,
  thumbnailUrl,
  materials,
}) => {
  const sectionTitleProps: SectionTitleProps = {
    title: '材料',
  }
  
  return (
    <div>
      <div css={mainImageBoxStyle}>
        <Image
          src={thumbnailUrl}
          alt={name}
          fill
          objectFit='cover'
          objectPosition='center'
        />
      </div>
      <div css={bodyMargin}>
        <div css={nameEnStyle}>
          {nameEn}
        </div>
        <div css={nameStyle}>
          {name}
        </div>
        <div css={descriptionStyle}>
          {description}
        </div>
        <SectionTitleSp {...sectionTitleProps}/>
        {materials.map((material)=><div css={materialAreaStyle} key={material.id}>
          <div css={materialNameStyle}>
            {material.name}
          </div>
          <div css={materialAmountStyle}>
            <span>{material.amount}</span>
            <span>{material.unit}</span>
          </div>
        </div>)}
      </div>
    </div>
  )
}

const mainImageBoxStyle = css`
  position: relative;
  width: 100vw;
  height: 300px;
`

const bodyMargin = css`
  margin: 20px;
`

const nameEnStyle = css`
  font-size: 16px;
  line-height: 1;
  padding-bottom: 5px;
`

const nameStyle = css`
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
  padding-bottom: 10px;
`

const descriptionStyle = css `
  font-size: 14px;
  padding-bottom: 10px;
`

const materialAreaStyle = css `
  display: flex;
  border-bottom: 2px solid #dedede;
  line-height: 1;
  padding: 10px;
  margin-bottom: 10px;
`

const materialNameStyle = css `
  font-size: 16px;
`

const materialAmountStyle = css `
  font-size: 16px;
  margin-left: auto;
`
