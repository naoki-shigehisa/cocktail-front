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

export type InfoProps = {
  alcohol: number
  type: Type
  taste: Taste
  color: Color
}
