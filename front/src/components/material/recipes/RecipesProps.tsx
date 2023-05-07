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

export type RecipesProps = {
  material_name: string
  recipes: Recipe[]
}
