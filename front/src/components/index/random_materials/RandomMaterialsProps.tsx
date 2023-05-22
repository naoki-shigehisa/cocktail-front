interface Material {
  id: number
  name: string
  nameEn: string
  thumbnailUrl: string
}

export type RandomMaterialsProps = {
  materials: Material[]
}
