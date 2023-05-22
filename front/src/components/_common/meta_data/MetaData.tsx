import React from "react"
import Head from 'next/head'

import { MetaDataProps } from "@/components/_common/meta_data/MetaDataProps"

export const MetaData: React.FC<MetaDataProps> = ({
  metaTitle,
  metaDescription,
  metaKeyword,
  metaImageUrl,
}) => {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta property="og:title" content={metaTitle} />
      <meta property="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />
      <meta name="keywords" content={metaKeyword} />
      <meta property="og:image" content={metaImageUrl} />
      <meta property="og:site_name" content={metaTitle} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta name="twitter:url" content={metaImageUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImageUrl} />
      <link rel="icon" href={'https://www.cockhome.com/favicon.ico'} />
      <link rel="shortcut icon" href={'https://www.cockhome.com/favicon.ico'} />
      <link rel="apple-touch-icon" href={'https://www.cockhome.com/favicon.ico'} />
    </Head>
  )
}
