import { css } from "@emotion/react"
import React from "react"
import Link from 'next/link'
import Image from "next/image"

import logo from "@/assets/images/_common/header_logo.png"

export const Header: React.FC = () => {
  return (
    <div css={headerStyle}>
      <div css={headerWidth}>
        <Link href="/">
          <Image
            src={logo.src}
            alt="cockhome"
            height={39}
            width={144}
          />
        </Link>
      </div>
    </div>
  )
}

const headerStyle = css`
  border-bottom: 1px solid #eee;
  background-color: #fff;
`

const headerWidth = css`
  max-width: 1100px;
  padding: 10px;
  margin: auto;
`
