interface Material {
  id: number
  name: string
  nameEn: string
  description: string
  thumbnailUrl: string
  amazonUrl: string
  isAlcohol: boolean
  unit: string
  amount: string
  isOption: boolean
}

export type FindToMaterialsProps = {
  name: string
  materials: Material[]
}
