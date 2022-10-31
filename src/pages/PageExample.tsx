import { useLocation } from 'react-router-dom'

export const PageExample = () => {
  const location = useLocation()

  return <div style={{ marginTop: 'var(--dept-header-height)' }}>{`I am  the page for ${location.pathname} route`}</div>
}
