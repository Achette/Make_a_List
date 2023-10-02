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

export const iconToString = (icon: string | IconType) => {
  const findIcon = icons.find((i) => i.icon === icon)

  if (!findIcon) return null

  return findIcon.name
}

export const stringToIcon = (icon: string | IconType) => {
  const findIcon = icons.find((i) => i.name === icon)

  if (!findIcon) return null

  return findIcon.icon
}
