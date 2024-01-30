import React from 'react'
import { NavItem } from './NavItem'
import { useDispatch } from 'react-redux'
import * as accessTokenRepository from 'hooks'
import { AppDispatch } from '../../redux/store'
import { List, ListItem } from '@chakra-ui/react'
import { resetUser } from '../../redux/reducers/user'
import { resetLists } from '../../redux/reducers/lists'
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
    path: '',
  },
  {
    type: 'link',
    label: 'Arquivadas',
    icon: MdOutlineArchive,
    path: '',
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
    path: '',
  },
  {
    type: 'link',
    label: 'Configurações',
    icon: MdOutlineSettings,
    path: '/settings',
  },
]

const footer = {
  type: 'footer',
  label: 'Sair da Conta',
  icon: MdPowerSettingsNew,
  path: '/',
}

export const Navigation = () => {
  return (
    <List w="full">
      {items.map((item, index) => (
        <ListItem key={index}>
          <NavItem item={item} isActive={index === 0} />
        </ListItem>
      ))}
    </List>
  )
}

export const FooterNavigation = () => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <List w="full">
      <ListItem
        onClick={() => {
          dispatch(resetLists())
          dispatch(resetUser())
          accessTokenRepository.removeToken()
          accessTokenRepository.removeUser()
          accessTokenRepository.removeUserId()
        }}
      >
        <NavItem item={footer} isActive={false} />
      </ListItem>
    </List>
  )
}
