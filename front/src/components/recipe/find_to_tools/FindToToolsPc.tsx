import { css } from "@emotion/react"
import React from "react"
import Image from "next/image"

import { FindToToolsProps } from "@/components/recipe/find_to_tools/FindToToolsProps"
import { SectionTitleProps } from "@/components/_common/section_title/SectionTitleProps"

import { SectionTitlePc } from "@/components/_common/section_title/SectionTitlePc"
import { LinkButtonPc } from "@/components/_common/link_button/LinkButtonPc"

export const FindToToolsPc: React.FC<FindToToolsProps> = ({
  name,
  tools,
}) => {
  const sectionTitleProps: SectionTitleProps = {
    title: name + 'に使う道具を探す',
  }

  return (
    <div css={mainStyle}>
      <SectionTitlePc {...sectionTitleProps}/>
      {tools.map((tool)=><div css={toolAreaStyle} key={tool.id}>
        <div css={imageBoxStyle}>
          <Image
            src={tool.thumbnailUrl}
            alt={tool.name}
            fill
            objectFit='contain'
            objectPosition='center'
          />
        </div>
        <div css={toolInfoAreaStyle}>
          <div css={nameStyle}>
            {tool.name}
          </div>
          <div css={descriptionStyle}>
            {tool.description}
          </div>
          <div css={buttonAreaStyle}>
            <LinkButtonPc
              text="Amazonで見る"
              url={tool.amazonUrl}
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

const toolAreaStyle = css`
  display: flex;
  padding: 10px 0;
`

const imageBoxStyle = css`
  position: relative;
  min-width: 100px;
  height: 100px;
  margin: auto 0;
`

const toolInfoAreaStyle = css`
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
