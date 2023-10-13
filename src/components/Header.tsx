import logo from "../assets/netflix-logo.svg"
import arrow from "../assets/arrowSelect.svg"
import { UserContext } from "../utils/context/languageContext"
import { useContext } from "react"

import { SelectLanguage } from "./SelectLanguage"
import { Link } from "react-router-dom"


export const Header = () => {
  const { language } = useContext(UserContext)
  
  return (
    <>
      <header className="h-[5rem] flex items-center gap-[0.5rem] mx-[24px] justify-between relative largeScreen z-10">
        <img className="w-[5.5625rem] h-[1.5rem] md:w-[9.25rem] md:h-[2.5rem]" src={logo} alt="Logo Netflix" />
        <div className="rounded-md text-[white] flex">
          <div className="relative">
            <SelectLanguage footer={false}/>
            <div role="img" aria-hidden="true" className="absolute top-[50%] translate-y-[-50%] right-[10px] bg-[rgb(0,0,0,0)]">
              <img src={arrow} alt="Arrow select" />
            </div>
          </div>
          <Link to="/connexion">
            <button className="bg-red text-[white]  px-[16px] py-[4px] rounded-md text-[14px] font-bold mx-[0.25rem] ml-6">{language === "fr" ? "S'identifier": "Sign In"}</button>        
          </Link>
        </div>
      </header>
    </>
  )
}