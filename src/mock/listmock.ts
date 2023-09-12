import { ListProps } from 'components/List'
import { FaGamepad, FaGift, FaShoppingBasket } from 'react-icons/fa'

export const listMock: ListProps[] = [
  {
    id: 1,
    icon: FaShoppingBasket,
    bgColor: 'blue.900',
    listName: 'Compras',
    shared: ['Igor Achette', 'Raul Araújo'],
  },
  {
    id: 2,
    icon: FaGift,
    bgColor: 'red.500',
    listName: 'Aniversário',
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
    icon: FaGamepad,
    bgColor: 'green.500',
    listName: 'Gamezinho',
    shared: ['Gabriel Imenes', 'Duda Matos', 'João Paulo'],
  },
]
