import { css } from "@emotion/react"
import React from "react"

import { TriviaProps } from "@/components/recipe/trivia/TriviaProps"
import { SectionTitleProps } from "@/components/_common/section_title/SectionTitleProps"

import { SectionTitlePc } from "@/components/_common/section_title/SectionTitlePc"

export const TriviaPc: React.FC<TriviaProps> = ({
  name,
  trivia,
}) => {
  const sectionTitleProps: SectionTitleProps = {
    title: name + 'の豆知識',
  }

  return (
    <div css={mainStyle}>
      <SectionTitlePc {...sectionTitleProps}/>
      <div css={triviaStyle}>
        {trivia}
      </div>
    </div>
  )
}

const mainStyle = css`
  margin: 20px;
`

const triviaStyle = css`
  padding: 10px 0;
  font-size: 16px;
  white-space: pre-wrap;
`
