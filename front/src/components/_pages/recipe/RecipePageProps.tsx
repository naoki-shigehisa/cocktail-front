interface Technique {
  id: number
  name: string
  description: string
}

interface Type {
  id: number
  name: string
}

interface Taste {
  id: number
  name: string
}

interface Color {
  id: number
  name: string
}

interface Material {
  id: number
  name: string
  nameEn: string
  description: string
  thumbnailUrl: string
  amazonUrl: string
  isAlcohol: boolean
}

interface Step {
  id: number
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

export type RecipePageProps = {
  name: string
  nameEn: string
  description: string
  thumbnailUrl: string
  isIce: boolean
  alcohol: number
  technique: Technique
  type: Type
  taste: Taste
  color: Color
  materials: Material[]
  steps: Step[]
  tools: Tool
  isMobile: boolean
}
