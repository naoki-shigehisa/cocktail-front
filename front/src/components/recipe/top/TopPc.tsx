import { css } from "@emotion/react"
import React from "react"
import Image from "next/image"

import { TopProps } from "@/components/recipe/top/TopProps"

export const TopPc: React.FC<TopProps> = ({
  name,
  nameEn,
  description,
  thumbnailUrl,
  materials,
}) => {
  return (
    <div css={mainStyle}>
      <div css={nameEnStyle}>
        {nameEn}
      </div>
      <div css={nameStyle}>
        {name}
      </div>
      <div css={infoAndImageAreaStyle}>
        <div css={mainImageBoxStyle}>
          <Image
            css={mainImageStyle}
            src={thumbnailUrl}
            alt={name}
            fill
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div css={infoAreaStyle}>
          <div css={descriptionStyle}>
            {description}
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
    </div>
  )
}

const mainStyle = css`
  margin: 20px;
`

const nameEnStyle = css`
  font-size: 20px;
  line-height: 1;
  padding-bottom: 5px;
`

const nameStyle = css`
  font-size: 32px;
  font-weight: bold;
  line-height: 1;
  padding-bottom: 20px;
`

const infoAndImageAreaStyle = css`
  display: flex;
`

const mainImageBoxStyle = css`
  position: relative;
  width: 300px;
  height: 300px;
`

const mainImageStyle = css`
  border-radius: 30px;
`

const infoAreaStyle = css`
  width: 780px;
  padding-left: 20px;
`

const descriptionStyle = css `
  font-size: 16px;
  padding-bottom: 20px;
`

const materialAreaStyle = css `
  display: flex;
  border-bottom: 2px solid #dedede;
  line-height: 1;
  padding: 10px;
`

const materialNameStyle = css `
  font-size: 16px;
`

const materialAmountStyle = css `
  font-size: 16px;
  margin-left: auto;
`
