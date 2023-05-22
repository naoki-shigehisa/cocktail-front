interface Material {
  id: number
  name: string
  nameEn: string
  thumbnailUrl: string
}

interface Recipe {
  id: number
  name: string
  nameEn: string
  description: string
  thumbnailUrl: string
  materials: Material[]
}

export type IndexPageProps = {
  latestRecipes: Recipe[]
  randomMaterials: Material[]
  isMobile: boolean
}
