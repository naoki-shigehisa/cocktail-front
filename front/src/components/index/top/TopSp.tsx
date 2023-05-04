import { css } from "@emotion/react"
import React from "react"
import Image from "next/image"

import mock1 from "@/assets/images/index/mock1.png"

export const TopSp: React.FC = () => {
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
      </div>
    </div>
  )
}

const topStyle = css`
  height: 150px;
  background: #f5b2ac;
`

const topContentStyle = css`
  width: calc(100% - 40px);
  margin: 0 20px;
  display: flex;
`

const leftContentStyle = css`
  width: 50%;
  padding: 45px 0;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
`

const mockImageBoxStyle = css`
  position: relative;
  width: 120px;
  height: 140px;
  margin: 10px auto 0;
`
