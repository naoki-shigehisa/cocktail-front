interface Tool {
  id: number
  name: string
  nameEn: string
  description: string
  thumbnailUrl: string
  amazonUrl: string
  isGlass: boolean
}

export type FindToToolsProps = {
  name: string
  tools: Tool[]
}
