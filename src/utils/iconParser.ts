import { IconType } from 'react-icons/lib'
import {
  FaShoppingBasket,
  FaHeart,
  FaWineGlassAlt,
  FaBriefcaseMedical,
  FaGift,
  FaLeaf,
  FaTools,
  FaPaw,
  FaVolleyballBall,
  FaTag,
  FaGamepad,
  FaGraduationCap,
} from 'react-icons/fa'

const icons = [
  {
    name: 'shopping',
    icon: FaShoppingBasket,
  },
  {
    name: 'mdi-heart',
    icon: FaHeart,
  },
  {
    name: 'glass',
    icon: FaWineGlassAlt,
  },
  {
    name: 'medical',
    icon: FaBriefcaseMedical,
  },

  {
    name: 'gift',
    icon: FaGift,
  },
  {
    name: 'leaf',
    icon: FaLeaf,
  },
  {
    name: 'tools',
    icon: FaTools,
  },
  {
    name: 'paw',
    icon: FaPaw,
  },
  {
    name: 'ball',
    icon: FaVolleyballBall,
  },
  {
    name: 'tag',
    icon: FaTag,
  },
  {
    name: 'gamepad',
    icon: FaGamepad,
  },
  {
    name: 'graduationCap',
    icon: FaGraduationCap,
  },
]

export const iconToString = (index = 0) => {
  const findIcon = icons.at(index)

  if (!findIcon) return undefined

  return findIcon.name
}

export const stringToIcon = (icon: string | IconType) => {
  const findIcon = icons.find((i) => i.name === icon)

  if (!findIcon) return undefined

  return findIcon.icon
}

const categories = [
  { name: 'Açougue', color: '#D23D33' },
  { name: 'Hortifruti', color: '#047C52' },
  { name: 'Congelados', color: '#27488F' },
  { name: 'Mercearia', color: '#FF9F0A' },
  { name: 'Laticínios', color: '#C8B100' },
  { name: 'Padaria', color: '#C1A386' },
  { name: 'Bebidas', color: '#55B3DA' },
  { name: 'Perfumaria', color: '#BF5AF2' },
  { name: 'Limpeza', color: '#00D689' },
  { name: 'Pet Shop', color: '#E1289B' },
  { name: 'Farmácia', color: '#6E7972' },
  { name: 'Outros', color: '#734230' },
]

export const colorSelector = (category: string) => {
  if (!category) return ''

  const color = categories.find((c) => c.name === category)
  return color?.color
}
