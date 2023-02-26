import { css } from "@emotion/react"
import React from "react"

export const Footer: React.FC = () => {
  return (
    <div css={footerStyle}>
      @2023 naoki-shigehisa
    </div>
  )
}

const footerStyle = css`
  padding: 10px 0;
  font-size: 14px;
  text-align: center;
  border-top: 1px solid #eee;
  background-color: #fff;

  position: sticky;
  top: 100vh;
`
