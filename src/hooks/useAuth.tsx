import { useEffect, useState } from "react";
import cookies from 'js-cookie'

const useAuth = () => {
  
  const [authVerification, setAuthVerification] = useState(false)

  useEffect(()=>{
    const checkCookie = async () => {
      try {
        const token = cookies.get('jwt')
        if(token){
          setAuthVerification(true)
        }
        else {
          setAuthVerification(false)
        }
       console.log(token) 
      } catch (error) {
        if(error instanceof Error){
          console.log(error.message)
        }
      }
    }
    checkCookie()
  },[])
  return authVerification
}

export default useAuth
