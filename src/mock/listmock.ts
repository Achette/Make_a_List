// import { ListsProps } from 'routes'

export const listMock = {
  id: 1,
  productLists: [
    {
      id: 1,
      name: 'Compras',
      icon: 'shopping',
      bgColor: 'blue.600',
      total: 100.99,
      concluded: false,
      delete: false,
      products: [
        {
          category: 'Hortifrut',
          products: [
            {
              id: 1,
              productName: 'Abacate',
              place: 'Savegnado',
              price: 2.68,
              quantity: 2,
            },
            {
              id: 2,
              productName: 'Maça',
              place: 'Savegnado',
              price: 4.57,
              quantity: 2,
            },
          ],
        },
        {
          category: 'Higiene',
          products: [
            {
              id: 1,
              productName: 'Sabonete',
              place: 'Savegnado',
              price: 2.68,
              quantity: 2,
            },
            {
              id: 2,
              productName: 'Pasta de dente',
              place: 'Savegnado',
              price: 4.57,
              quantity: 2,
            },
          ],
        },
      ],
      shared: ['Igor Achette', 'Raul Araújo'],
    },
    {
      id: 2,
      name: 'Aniversário',
      icon: 'gift',
      bgColor: 'red.500',
      total: 100.99,
      concluded: false,
      delete: false,
      products: [
        {
          category: 'Padaria',
          products: [
            {
              id: 1,
              productName: 'Bolo de chocolate',
              place: 'Savegnado',
              price: 2.68,
              quantity: 2,
            },
            {
              id: 2,
              productName: 'Brigadeiro',
              place: 'Savegnado',
              price: 4.57,
              quantity: 2,
            },
          ],
        },
        {
          category: 'Bebidas',
          products: [
            {
              id: 1,
              productName: 'Coca-Cola',
              place: 'Savegnado',
              price: 2.68,
              quantity: 2,
            },
            {
              id: 2,
              productName: 'Suco de Uva',
              place: 'Savegnado',
              price: 4.57,
              quantity: 2,
            },
          ],
        },
      ],
      shared: [
        'Igor Achette',
        'Raul Araújo',
        'Duda Matos',
        'João Paulo',
        'Gabriel Imenes',
      ],
    },
    {
      id: 3,
      name: 'Jogos',
      icon: 'gamepad',
      bgColor: 'green.600',
      total: 100.99,
      concluded: true,
      delete: false,
      products: [
        {
          category: 'Mercearia',
          products: [
            {
              id: 1,
              productName: 'Doritos',
              place: 'Savegnado',
              price: 2.68,
              quantity: 2,
            },
            {
              id: 2,
              productName: 'Batata Pringles',
              place: 'Savegnado',
              price: 4.57,
              quantity: 2,
            },
          ],
        },
        {
          category: 'Bebidas',
          products: [
            {
              id: 1,
              productName: 'Heineken',
              place: 'Savegnado',
              price: 2.68,
              quantity: 2,
            },
            {
              id: 2,
              productName: 'Corona',
              place: 'Savegnado',
              price: 4.57,
              quantity: 2,
            },
          ],
        },
      ],
      shared: ['Gabriel Imenes', 'Duda Matos', 'João Paulo'],
    },
    {
      id: 4,
      name: 'Churrasco',
      icon: 'glass',
      bgColor: 'purple.600',
      total: 100.99,
      concluded: true,
      delete: false,
      products: [
        {
          category: 'Açougue',
          products: [
            {
              id: 1,
              productName: 'Picanha',
              place: 'Savegnado',
              price: 2.68,
              quantity: 2,
            },
            {
              id: 2,
              productName: 'Costela',
              place: 'Savegnado',
              price: 4.57,
              quantity: 2,
            },
          ],
        },
        {
          category: 'Bebidas',
          products: [
            {
              id: 1,
              productName: 'Heineken',
              place: 'Savegnado',
              price: 2.68,
              quantity: 2,
            },
            {
              id: 2,
              productName: 'Amstel',
              place: 'Savegnado',
              price: 4.57,
              quantity: 2,
            },
          ],
        },
      ],
      shared: ['Gabriel Imenes', 'Raul', 'Duda', 'João Paulo', 'Igor'],
    },
  ],
}
