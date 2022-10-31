import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import 'app/App.scss'
import { AppRoutes } from 'app/appRoutes/AppRoutes'
import { Header } from 'components/header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
