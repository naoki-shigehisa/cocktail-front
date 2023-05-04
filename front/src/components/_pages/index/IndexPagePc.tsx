import { css } from "@emotion/react"
import React from "react"

import { IndexPageProps } from "@/components/_pages/index/IndexPageProps"

export const IndexPagePc: React.FC<IndexPageProps> = ({
  latestRecipes,
}) => {
  return (
    <div css={IndexPageStyle}>
      作成中
    </div>
  )
}

const IndexPageStyle = css`
  max-width: 1100px;
  margin: auto;
`
