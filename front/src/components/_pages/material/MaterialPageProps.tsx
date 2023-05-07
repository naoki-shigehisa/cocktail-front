interface Material {
  id: number
  name: string
}

interface Recipe {
  id: number
  name: string
  nameEn: string
  description: string
  thumbnailUrl: string
  materials: Material[]
}

export type MaterialPageProps = {
  name: string
  nameEn: string
  description: string
  thumbnailUrl: string
  amazonUrl: string
  isAlcohol: boolean
  recipes: Recipe[]
  isMobile: boolean
}
