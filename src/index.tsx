import React from 'react'
import App from 'pages/App'
import { theme } from 'theme/theme'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
 // <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
 // </React.StrictMode>
)
