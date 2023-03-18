import { css } from "@emotion/react"
import React from "react"
import Image from "next/image"

import { TopProps } from "@/components/recipe/top/TopProps"

export const TopSp: React.FC<TopProps> = ({
  name,
  nameEn,
  description,
  thumbnailUrl,
  materials,
}) => {
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
        <div css={materialTitleStyle}>
          材料
        </div>
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

const materialTitleStyle = css `
  font-size: 16px;
  line-height: 34px;
  font-weight: bold;
  padding-left: 15px;
  margin-bottom: 5px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 4px;
    height: 34px;
    border-radius: 2px;
    background: #f5b2ac;
    top: calc(50% - 17px);
    left: 0;
  }
`

const materialAreaStyle = css `
  display: flex;
  border-bottom: 2px solid #dedede;
  line-height: 1;
  padding: 10px 0;
  margin-bottom: 10px;
`

const materialNameStyle = css `
  font-size: 16px;
`

const materialAmountStyle = css `
  font-size: 16px;
  margin-left: auto;
`
