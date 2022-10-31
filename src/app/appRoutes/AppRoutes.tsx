import { PropsWithChildren } from 'react'
import { Route, Routes } from 'react-router-dom'

import { MainPage } from 'pages/mainPage/MainPage'
import { PageExample } from 'pages/PageExample'
import { navigation } from 'utils/common'

export const AppRoutes = ({ children }: PropsWithChildren<{}>) => (
  <Routes>
    {navigation.map(navItem => (
      <Route key={navItem} path={navItem.toLowerCase()} element={<PageExample />} />
    ))}
    <Route path="/" element={<MainPage />} />
    <Route path="*" element={children} />
  </Routes>
)
