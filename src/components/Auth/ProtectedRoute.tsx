import { ReactNode } from "react"
import useAuth from "../../hooks/useAuth"
import { Navigate } from "react-router-dom"
interface Props{
  children : ReactNode
}

const ProtectedRoute = ({children}: Props) => {
  
  const auth = useAuth()

  if(!auth){
    return <Navigate to='/login' replace/>
  }

  return (<>{children}</>)
}

export default ProtectedRoute