import { createContext, useState } from "react";
import { UserInterface } from "../types/userInterface";
interface AuthProviderProps {
  children: React.ReactNode
}

export interface AuthInterface {
  authUser: UserInterface
  setAuthUser: React.Dispatch<React.SetStateAction<UserInterface>>;
}

export const AuthUserContext = createContext<AuthInterface>({
  authUser: {username: ''},
  setAuthUser: () => null,
})


export const AuthUserProvider = ({children}: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState<UserInterface>({username: ''})


  return (
    <AuthUserContext.Provider value={{authUser, setAuthUser}}>
      {children}
    </AuthUserContext.Provider>
  )

}