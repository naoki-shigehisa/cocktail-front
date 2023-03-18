interface Material {
  id: number
  name: string
  isAlcohol: boolean
  unit: string
  amount: string
  isOption: boolean
}

export type TopProps = {
  name: string
  nameEn: string
  description: string
  thumbnailUrl: string
  materials: Material[]
}
