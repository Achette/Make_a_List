import React from 'react'
import { NavItem } from './NavItem'
import { SidebarProps } from '../Sidebar'
import { List, ListItem } from '@chakra-ui/react'
import {
  MdBookmarkBorder,
  MdDeleteOutline,
  MdHelpOutline,
  MdList,
  MdOutlineArchive,
  MdOutlineGroup,
  MdOutlineSettings,
  MdPowerSettingsNew,
} from 'react-icons/md'

const items = [
  {
    type: 'link',
    label: 'Listas',
    icon: MdList,
    path: '/',
  },
  {
    type: 'link',
    label: 'Grupos',
    icon: MdOutlineGroup,
    path: '/',
  },
  {
    type: 'link',
    label: 'Modelos',
    icon: MdBookmarkBorder,
    path: '/',
  },
  {
    type: 'link',
    label: 'Arquivadas',
    icon: MdOutlineArchive,
    path: '/',
  },
  {
    type: 'link',
    label: 'Lixeira',
    icon: MdDeleteOutline,
    path: '/',
  },
  {
    type: 'link',
    label: 'Ajuda e Feedback',
    icon: MdHelpOutline,
    path: '/',
  },
  {
    type: 'link',
    label: 'Configurações',
    icon: MdOutlineSettings,
    path: '/',
  },
]

const footer = [
  {
    type: 'footer',
    label: 'Sair da Conta',
    icon: MdPowerSettingsNew,
    path: '/',
  },
]

export const Navigation = ({ collapse }: SidebarProps) => (
  <List w="full">
    {items.map((item, index) => (
      <ListItem key={index}>
        <NavItem item={item} isActive={index === 0} collapse={collapse} />
      </ListItem>
    ))}
  </List>
)

export const FooterNavigation = ({ collapse }: SidebarProps) => (
  <List w="full" >
    {footer.map((item, index) => (
      <ListItem key={index}>
        <NavItem item={item} isActive={index === 0} collapse={collapse} />
      </ListItem>
    ))}
  </List>
)
