import { css } from "@emotion/react"
import React from "react"

import { LinkButtonProps } from "@/components/_common/link_button/LinkButtonProps"

export const LinkButtonPc: React.FC<LinkButtonProps> = ({
  text,
  url,
}) => {
  return (
    <a css={linkStyle} href={url}>
      <div css={buttonStyle}>
        {text}
      </div>
    </a>
  )
}

const linkStyle = css`
  color: #222;
  text-decoration: none;
`

const buttonStyle = css `
  width: 130px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  background: #fff;
  border: 2px solid #efefef;
  border-radius: 4px;
  text-align: center;
`
