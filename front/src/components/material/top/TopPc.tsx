import { css } from "@emotion/react"
import React from "react"
import Image from "next/image"

import { TopProps } from "@/components/material/top/TopProps"

export const TopPc: React.FC<TopProps> = ({
  name,
  nameEn,
  description,
  thumbnailUrl,
}) => {
  return (
    <div css={mainStyle}>
      <div css={imageBoxStyle}>
        <Image
          src={thumbnailUrl}
          alt={name}
          fill
          objectFit='contain'
          objectPosition='center'
        />
      </div>
      <div css={toolInfoAreaStyle}>
        <div css={nameEnStyle}>
          {nameEn}
        </div>
        <div css={nameStyle}>
          {name}
        </div>
        <div css={descriptionStyle}>
          {description}
        </div>
      </div>
    </div>
  )
}

const mainStyle = css`
  margin: 20px;
  display: flex;
`

const imageBoxStyle = css`
  position: relative;
  min-width: 150px;
  height: 200px;
  margin: auto 0;
`

const toolInfoAreaStyle = css`
  padding-left: 20px;
  margin: auto 0;
`

const nameEnStyle = css`
  font-size: 20px;
  line-height: 1;
  padding-bottom: 5px;
`

const nameStyle = css`
  font-size: 32px;
  font-weight: bold;
  line-height: 1;
`

const descriptionStyle = css`
  font-size: 16px;
  padding: 10px 0;
`
