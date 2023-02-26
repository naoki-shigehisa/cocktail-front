import { css } from "@emotion/react"
import React from "react"

export const Header: React.FC = () => {
  return (
    <div css={headerStyle}>
      header
    </div>
  )
}

const headerStyle = css`
  font-size: 40px;
`
