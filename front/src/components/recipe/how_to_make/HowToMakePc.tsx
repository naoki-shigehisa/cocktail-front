import { css } from "@emotion/react"
import React from "react"
import Image from "next/image"

import { HowToMakeProps } from "@/components/recipe/how_to_make/HowToMakeProps"
import { SectionTitleProps } from "@/components/_common/section_title/SectionTitleProps"

import { SectionTitlePc } from "@/components/_common/section_title/SectionTitlePc"

export const HowToMakePc: React.FC<HowToMakeProps> = ({
  isIce,
  technique,
  glass,
  steps,
}) => {
  const sectionTitleProps: SectionTitleProps = {
    title: '作り方',
  }

  return (
    <div css={mainStyle}>
      <SectionTitlePc {...sectionTitleProps}/>
      <div css={howToMakeAreaStyle}>
        <div css={stepAreaStyle}>
          {steps.map((step)=><div css={stepStyle} key={step.id}>
            <div css={stepOrderAreaStyle}>
              <div css={stepOrderStyle}>
                {step.order}
              </div>
            </div>
            <div css={stepContentStyle}>
              {step.content}
            </div>
            {step.thumbnailUrl &&
              <div css={imageBoxStyle}>
                <Image
                  css={imageStyle}
                  src={step.thumbnailUrl}
                  alt={step.content}
                  fill
                  objectFit='cover'
                  objectPosition='center'
                />
              </div>
            }
          </div>)}
        </div>
        <div css={infoAreaStyle}>
          <div css={rowStyle}>
            <div css={rowLeftStyle}>
              技法
            </div>
            <div css={rowRightStyle}>
              {technique.name}
            </div>
          </div>
          <div css={rowStyle}>
            <div css={rowLeftStyle}>
              グラス
            </div>
            <div css={rowRightStyle}>
              {glass.name}
            </div>
          </div>
          <div css={rowStyle}>
            <div css={rowLeftStyle}>
              氷
            </div>
            <div css={rowRightStyle}>
              {isIce ? "あり" : "なし"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mainStyle = css`
  margin: 20px;
`

const howToMakeAreaStyle = css`
  display: flex;
`

const stepAreaStyle = css`
  width: 50%;
`

const infoAreaStyle = css`
  width: 47%;
  padding-left: 3%;
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

const stepStyle = css`
  display: flex;
  padding: 10px 0;
`

const stepOrderAreaStyle = css`
  padding-top: 2px;
  width: 30px;
`

const stepOrderStyle = css`
  font-size: 16px;
  width: 30px;
  hight: 30px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  background-color: #696652;
  border-radius: 5px;
`

const stepContentStyle = css`
  font-size: 16px;
  padding: 0 10px;
  width: calc(100% - 160px);
`

const imageBoxStyle = css`
  position: relative;
  width: 120px;
  height: 120px;
`

const imageStyle = css`
  border-radius: 10px;
`
