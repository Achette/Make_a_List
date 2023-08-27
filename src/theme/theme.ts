import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'ligth',
  },
  colors: {
    blue: {
      50: '#7DC4E4',
      400: '#029ECE',
      900: '#27488F',
    },
    white: {
        400: '#D9D9E3'
    },
    orange: {
      100: '#F0CCB6'
    }
  },
  components: {
    Drawer: {
      parts: ['dialog', 'header', 'body'],
      variants: {
        primary: {
          dialog: {
            background: 'blue.900',
          },
        },
      },
    },
  },
})
