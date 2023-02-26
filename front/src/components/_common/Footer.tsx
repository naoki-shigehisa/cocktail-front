import { css } from "@emotion/react"
import React from "react"

export const Footer: React.FC = () => {
  return (
    <div css={footerStyle}>
      footer
    </div>
  )
}

const footerStyle = css`
  font-size: 40px;
`
