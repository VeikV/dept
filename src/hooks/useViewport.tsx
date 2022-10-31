import { useState, useEffect } from 'react'

import { MOBILE, TABLET_LANDSCAPE, TABLET } from 'constants/media'

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { isMobile: width <= MOBILE, isTabletLandscape: width <= TABLET_LANDSCAPE, isTablet: width <= TABLET }
}
