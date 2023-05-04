import { css } from "@emotion/react"
import React from "react"
import Image from "next/image"

import mock1 from "@/assets/images/index/mock1.png"
import mock2 from "@/assets/images/index/mock2.png"

export const TopPc: React.FC = () => {
  return (
    <div css={topStyle}>
      <div css={topContentStyle}>
        <div css={leftContentStyle}>
          <span>
            お家で<br/>カクテルを楽しもう
          </span>
        </div>
        <div css={mockImageBoxStyle}>
          <Image
            src={mock1}
            alt='cockhome'
            fill
            objectFit='contain'
            objectPosition='center'
          />
        </div>
        <div css={mockImageBoxStyle}>
          <Image
            src={mock2}
            alt='cockhome'
            fill
            objectFit='contain'
            objectPosition='center'
          />
        </div>
      </div>
    </div>
  )
}

const topStyle = css`
  height: 350px;
  background: #f5b2ac;
`

const topContentStyle = css`
  width: 1100px;
  margin: auto;
  display: flex;
`

const leftContentStyle = css`
  width: calc(50% - 60px);
  padding: 100px 30px;
  color: #ffffff;
  font-size: 48px;
  font-weight: bold;
`

const mockImageBoxStyle = css`
  position: relative;
  width: 300px;
  height: 350px;
  margin: auto;
`
