import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { getConfig } from 'api/configApi'
import 'app/App.scss'
import { AppRoutes } from 'app/appRoutes/AppRoutes'
import { Header } from 'components/header/Header'
import { ApiQueryKeys } from 'constants/apiQueryKeys'

function App() {
  const { isLoading, data } = useQuery([ApiQueryKeys.CONFIG], () => getConfig())

  if (isLoading) {
    return <p>...loading</p>
  }

  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
