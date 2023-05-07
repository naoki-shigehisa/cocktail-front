import { css } from "@emotion/react"
import React from "react"
import Link from 'next/link'
import Image from "next/image"

import { FindToMaterialsProps } from "@/components/recipe/find_to_materials/FindToMaterialsProps"
import { SectionTitleProps } from "@/components/_common/section_title/SectionTitleProps"

import { SectionTitlePc } from "@/components/_common/section_title/SectionTitlePc"
import { LinkButtonPc } from "@/components/_common/link_button/LinkButtonPc"

export const FindToMaterialsPc: React.FC<FindToMaterialsProps> = ({
  name,
  materials,
}) => {
  const sectionTitleProps: SectionTitleProps = {
    title: name + 'の材料を探す',
  }

  return (
    <div css={mainStyle}>
      <SectionTitlePc {...sectionTitleProps}/>
      {materials.map((material)=><div css={materialAreaStyle} key={material.id}>
        <div css={imageBoxStyle}>
          <Link href={'/materials/' + material.id} css={linkStyle} key={material.id}>
            <Image
              src={material.thumbnailUrl}
              alt={material.name}
              fill
              objectFit='contain'
              objectPosition='center'
            />
          </Link>
        </div>
        <div css={materialInfoAreaStyle}>
          <Link href={'/materials/' + material.id} css={linkStyle} key={material.id}>
            <div css={nameStyle}>
              {material.name}
            </div>
            <div css={descriptionStyle}>
              {material.description}
            </div>
          </Link>
          <div css={buttonAreaStyle}>
            <LinkButtonPc
              text="Amazonで見る"
              url={material.amazonUrl}
            />
          </div>
        </div>
      </div>)}
    </div>
  )
}

const mainStyle = css`
  margin: 20px;
`

const materialAreaStyle = css`
  display: flex;
  padding: 10px 0;
`

const linkStyle = css`
  color: #222;
  text-decoration: none;
`

const imageBoxStyle = css`
  position: relative;
  min-width: 100px;
  height: 100px;
  margin: auto 0;
`

const materialInfoAreaStyle = css`
  padding-left: 5px;
`

const nameStyle = css`
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
`

const descriptionStyle = css`
  font-size: 14px;
  color: #666666;
`

const buttonAreaStyle = css`
  padding-top: 10px;
`
