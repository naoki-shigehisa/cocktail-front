import { css } from "@emotion/react"
import React from "react"

import { SectionTitleProps } from "@/components/_common/section_title/SectionTitleProps"

export const SectionTitlePc: React.FC<SectionTitleProps> = ({
  title,
}) => {
  return (
    <div css={titleStyle}>
      {title}
    </div>
  )
}

const titleStyle = css `
  font-size: 20px;
  line-height: 40px;
  font-weight: bold;
  padding-left: 15px;
  margin-bottom: 5px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 4px;
    height: 40px;
    border-radius: 2px;
    background: #f5b2ac;
    top: calc(50% - 20px);
    left: 0;
  }
`
