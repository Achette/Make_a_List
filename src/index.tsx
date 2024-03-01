import React from 'react'
import App from 'pages/App'
import { theme } from 'theme/theme'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { SidebarProvider } from 'contexts'
import { ChakraProvider } from '@chakra-ui/react'
import { LoadingProvider, SidebarProvider } from 'contexts'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoadingProvider>
        <SidebarProvider>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </SidebarProvider>
      </LoadingProvider>
    </Provider>
  </React.StrictMode>
)
