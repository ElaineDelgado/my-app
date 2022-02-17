import { Navigate } from 'react-router-dom'

type Props = {
  children: JSX.Element
}

const RequiredAuth = ({children}: Props) => {
  let isLogged  = true

  if(!isLogged) {
    return  <Navigate to = "/login" />
  }
  return children
}

export default RequiredAuth