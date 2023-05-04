import { css } from "@emotion/react"
import React from "react"

import { IndexPageProps } from "@/components/_pages/index/IndexPageProps"

import { TopSp } from "@/components/index/top/TopSp"

export const IndexPageSp: React.FC<IndexPageProps> = ({
  latestRecipes,
}) => {
  return (
    <div>
      <TopSp />
      <div css={indexPageStyle}>
        コンテンツ
      </div>
    </div>
  )
}

const indexPageStyle = css`
  width: calc(100% - 40px);
  margin: 0 20px;
`