import { css } from "@emotion/react"
import React from "react"

import { MaterialPageProps } from "@/components/_pages/material/MaterialPageProps"
import { TopProps } from "@/components/material/top/TopProps"

import { TopSp } from "@/components/material/top/TopSp"

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
  const topProps: TopProps = {
    name: name,
    nameEn: nameEn,
    description: description,
    thumbnailUrl: thumbnailUrl,
  }

  return (
    <div css={MaterialPageStyle}>
      <TopSp {...topProps}/>
    </div>
  )
}

const MaterialPageStyle = css`
  margin: 0 20px;
`
