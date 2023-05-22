import { css } from "@emotion/react"
import React from "react"
import Link from 'next/link'
import Image from "next/image"

import { RandomMaterialsProps } from "@/components/index/random_materials/RandomMaterialsProps"
import { SectionTitleProps } from "@/components/_common/section_title/SectionTitleProps"

import { SectionTitlePc } from "@/components/_common/section_title/SectionTitlePc"

export const RandomMaterialsPc: React.FC<RandomMaterialsProps> = ({
  materials,
}) => {
  const sectionTitleProps: SectionTitleProps = {
    title: '材料から探す',
  }

  return (
    <div css={mainStyle}>
      <SectionTitlePc {...sectionTitleProps}/>
      {materials.map((material)=><Link href={'/materials/' + material.id} css={linkStyle} key={material.id}>
        <div css={materialCardStyle}>
          <div css={imageBoxStyle}>
            <Image
              src={material.thumbnailUrl}
              alt={material.name}
              fill
              objectFit='contain'
              objectPosition='center'
            />
          </div>
          <div css={materialInfoAreaStyle}>
            <div css={nameEnStyle}>
              {material.nameEn}
            </div>
            <div css={nameStyle}>
              {material.name}
            </div>
          </div>
        </div>
      </Link>)}
    </div>
  )
}

const mainStyle = css`
  margin-top: 20px;
`

const linkStyle = css`
  color: #222;
  text-decoration: none;
`

const materialCardStyle = css`
  display: flex;
  padding: 10px 0;
`

const imageBoxStyle = css`
  position: relative;
  width: 40px;
  height: 70px;
  margin: auto 0;
`

const materialInfoAreaStyle = css`
  width: calc(100% - 60px);
  margin: auto 0 auto 20px;
`

const nameEnStyle = css`
  padding-bottom: 5px;
  font-size: 14px;
  line-height: 1;
`

const nameStyle = css`
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
`
