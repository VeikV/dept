import { useLocation } from 'react-router-dom'

export const PageExample = () => {
  const location = useLocation()

  return <div>{`I am  the page for ${location.pathname} route`}</div>
}
