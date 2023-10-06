import { PropsWithChildren, Dispatch , createContext, useState,  } from "react"

interface ContextProps {
  language : string
  setLanguage: Dispatch<React.SetStateAction<string>>
}

export const UserContext = createContext<ContextProps>({language: "fr", setLanguage: ()=> {}})

export const UserProvider = ({ children }: PropsWithChildren<object>) => {
 const [language, setLanguage] = useState<string>("fr")
  return (
    <UserContext.Provider value={{language, setLanguage}}>
      {children}
    </UserContext.Provider>
  )
}
