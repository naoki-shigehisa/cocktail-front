import { css } from "@emotion/react"
import React from "react"

import { MaterialPageProps } from "@/components/_pages/material/MaterialPageProps"
import { TopProps } from "@/components/material/top/TopProps"

import { TopPc } from "@/components/material/top/TopPc"

export const MaterialPagePc: React.FC<MaterialPageProps> = ({
  name,
  nameEn,
  description,
  thumbnailUrl,
  amazonUrl,
  isAlcohol,
  recipes,
  isMobile,
}) => {
  const topProps: TopProps = {
    name: name,
    nameEn: nameEn,
    description: description,
    thumbnailUrl: thumbnailUrl,
  }

  return (
    <div css={MaterialPageStyle}>
      <TopPc {...topProps}/>
    </div>
  )
}

const MaterialPageStyle = css`
  max-width: 1100px;
  margin: auto;
`
