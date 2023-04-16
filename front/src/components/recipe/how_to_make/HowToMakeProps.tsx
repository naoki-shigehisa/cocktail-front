interface Technique {
  id: number
  name: string
  description: string
}

interface Step {
  id: number
  order: number
  content: string
  thumbnailUrl: string
}

interface Tool {
  id: number
  name: string
  nameEn: string
  description: string
  thumbnailUrl: string
  amazonUrl: string
  isGlass: boolean
}

export type HowToMakeProps = {
  isIce: boolean
  technique: Technique
  glass: Tool
  steps: Step[]
}
