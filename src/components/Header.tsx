import languageIcon from "../assets/language.svg"
import logo from "../assets/netflix-logo.svg"
import arrow from "../assets/arrowSelect.svg"
import { UserContext } from "../utils/context/languageContext"
import { useContext } from "react"


export const Header = () => {
  const {language, setLanguage} = useContext(UserContext)
  
  return (
    <>
      <header className="h-[5rem] flex items-center gap-[0.5rem] mx-[24px] justify-between relative largeScreen z-10">
        <img className="w-[5.5625rem] h-[1.5rem] md:w-[9.25rem] md:h-[2.5rem]" src={logo} alt="Logo Netflix" />
        <div className="rounded-md text-[white] flex">
          <div className="relative">
            <div role="img" aria-hidden="true" className="absolute top-[50%] translate-y-[-50%] left-[10px] bg-[rgb(0,0,0,0)]">
              <img src={languageIcon} alt="Language icon" />
            </div>
            <select name="language" id="language" className="bg-[transparent] border-[1px] border-[white] border-solid rounded-md mx-[4px] w-[3rem] sm:w-fit px-[1.5rem] appearance-none relative h-[28px] z-10" defaultValue="Français" onChange={(e) => setLanguage(e.target.value)}>
              <option className="optionLanguage" value="fr">Français</option>
              <option className="optionLanguage" value="en">English</option>
            </select>
            <div role="img" aria-hidden="true" className="absolute top-[50%] translate-y-[-50%] right-[10px] bg-[rgb(0,0,0,0)]">
              <img src={arrow} alt="Arrow select" />
            </div>
          </div>
          <button className="bg-red text-[white]  px-[16px] py-[4px] rounded-md text-[14px] font-bold mx-[0.25rem]">{language === "fr" ? "S'identifier": "Sign In"}</button>
        </div>
      </header>
    </>
  )
}