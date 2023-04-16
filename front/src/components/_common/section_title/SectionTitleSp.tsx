import { css } from "@emotion/react"
import React from "react"

import { SectionTitleProps } from "@/components/_common/section_title/SectionTitleProps"

export const SectionTitleSp: React.FC<SectionTitleProps> = ({
  title,
}) => {
  return (
    <div css={titleStyle}>
      {title}
    </div>
  )
}

const titleStyle = css `
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
