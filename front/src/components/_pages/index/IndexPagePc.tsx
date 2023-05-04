import { css } from "@emotion/react"
import React from "react"

import { IndexPageProps } from "@/components/_pages/index/IndexPageProps"

import { TopPc } from "@/components/index/top/TopPc"

export const IndexPagePc: React.FC<IndexPageProps> = ({
  latestRecipes,
}) => {
  return (
    <div>
      <TopPc />
      <div css={indexPageStyle}>
        コンテンツ
      </div>
    </div>
  )
}

const indexPageStyle = css`
  width: 1100px;
  margin: auto;
`
