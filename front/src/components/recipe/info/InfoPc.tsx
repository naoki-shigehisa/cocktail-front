import { css } from "@emotion/react"
import React from "react"

import { InfoProps } from "@/components/recipe/info/InfoProps"
import { SectionTitleProps } from "@/components/_common/section_title/SectionTitleProps"

import { SectionTitlePc } from "@/components/_common/section_title/SectionTitlePc"

export const InfoPc: React.FC<InfoProps> = ({
  alcohol,
  color,
  taste,
  type,
}) => {
  const sectionTitleProps: SectionTitleProps = {
    title: '基本情報',
  }

  return (
    <div css={mainStyle}>
      <SectionTitlePc {...sectionTitleProps}/>
      <div css={rowStyle}>
        <div css={rowLeftStyle}>
          アルコール
        </div>
        <div css={rowRightStyle}>
          約{alcohol}%
        </div>
      </div>
      <div css={rowStyle}>
        <div css={rowLeftStyle}>
          色
        </div>
        <div css={rowRightStyle}>
          {color.name}
        </div>
      </div>
      <div css={rowStyle}>
        <div css={rowLeftStyle}>
          味
        </div>
        <div css={rowRightStyle}>
          {taste.name}
        </div>
      </div>
      <div css={rowStyle}>
        <div css={rowLeftStyle}>
          タイプ
        </div>
        <div css={rowRightStyle}>
          {type.name}
        </div>
      </div>
    </div>
  )
}

const mainStyle = css`
  margin: 20px;
`

const rowStyle = css`
  display: flex;
  border-bottom: 2px solid #dedede;
  line-height: 1;
  padding: 10px;
  margin-bottom: 10px;
`

const rowLeftStyle = css`
  font-size: 16px;
  width: 35%;
`

const rowRightStyle = css`
  font-size: 16px;
  width: 65%;
`
