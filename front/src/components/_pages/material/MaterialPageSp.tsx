import { css } from "@emotion/react"
import React from "react"

import { MaterialPageProps } from "@/components/_pages/material/MaterialPageProps"

export const MaterialPageSp: React.FC<MaterialPageProps> = ({
  name,
  nameEn,
  description,
  thumbnailUrl,
  amazonUrl,
  isAlcohol,
  recipes,
  isMobile,
}) => {
  return (
    <div css={MaterialPageStyle}>
      コンテンツ {name}
    </div>
  )
}

const MaterialPageStyle = css`
  max-width: 1100px;
  margin: auto;
`
