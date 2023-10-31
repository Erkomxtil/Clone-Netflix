import { useContext } from "react"
import { UserContext } from "../utils/context/languageContext"
import languageIcon from "../assets/language.svg"

type FooterProp = {
  footer: boolean
  signin: boolean
}

export const SelectLanguage = ({footer, signin}:FooterProp) => {
  const { setLanguage } = useContext(UserContext)

  return (
    <>
      <div role="img" aria-hidden="true" className="absolute top-[50%] translate-y-[-50%] left-[10px] bg-[rgb(0,0,0,0)]">
        <img className={signin ? "opacity-30" : ""} src={languageIcon} alt="Language icon" />
      </div>
      {signin ?
      <select name="language" id="language" className={footer ? "bg-[transparent] border-[1px] border-[#737373] border-solid rounded-md mx-[4px] sm:w-fit px-[1.5rem] appearance-none relative h-[28px] z-10 text-[#737373] w-auto" : "bg-[transparent] border-[1px] border-[#737373] border-solid rounded-md mx-[4px] sm:w-fit px-[1.5rem] appearance-none relative h-[28px] z-10 w-auto"} defaultValue="Français" onChange={(e) => setLanguage(e.target.value)}>
          <option className="optionLanguage" value="fr">Français</option>
          <option className="optionLanguage" value="en">English</option>
      </select> :
      <select name="language" id="language" className={footer ? "bg-[transparent] border-[1px] border-[rgba(255,255,255,0.7)] border-solid rounded-md mx-[4px] sm:w-fit px-[1.5rem] appearance-none relative h-[28px] z-10 text-[rgba(255,255,255,0.7)] w-auto" : "bg-[transparent] border-[1px] border-[rgba(255,255,255,0.7)] border-solid rounded-md mx-[4px] sm:w-fit px-[1.5rem] appearance-none relative h-[28px] z-10 w-auto"} defaultValue="Français" onChange={(e) => setLanguage(e.target.value)}>
      <option className="optionLanguage" value="fr">Français</option>
      <option className="optionLanguage" value="en">English</option>
      </select>
      }
    </>
  )
}
