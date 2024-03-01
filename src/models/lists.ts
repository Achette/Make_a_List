export interface ListDetailProps {
  name: string
  total: number
  shared: { id: string; name: string; email: string }[]
  created_by: { id: string; name: string; email: string }
  productsList: {
    category: string
    products: {
      id: string
      name: string
      place: string
      price: number
      quantity: number
    }[]
  }[]
}

export type ListDetailMobileProps = {
  listName: string
}

export type ProductDetailProps = {
  prod: {
    category: string
    products: {
      id: string
      name: string
      place: string
      price: number
      quantity: number
    }[]
  }
}
