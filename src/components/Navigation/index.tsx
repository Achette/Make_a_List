import React from 'react'
import { NavItem } from './NavItem'
import { SidebarProps } from 'components/Sidebar'
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
    path: '/lists',
  },
  {
    type: 'link',
    label: 'Grupos',
    icon: MdOutlineGroup,
    path: '/groups',
  },
  {
    type: 'link',
    label: 'Modelos',
    icon: MdBookmarkBorder,
    path: '/models',
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
    path: '/deleted',
  },
  {
    type: 'link',
    label: 'Ajuda e Feedback',
    icon: MdHelpOutline,
    path: '/feedback',
  },
  {
    type: 'link',
    label: 'Configurações',
    icon: MdOutlineSettings,
    path: '/settings',
  },
]

const footer = [
  {
    type: 'footer',
    label: 'Sair da Conta',
    icon: MdPowerSettingsNew,
    path: '/logout',
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
