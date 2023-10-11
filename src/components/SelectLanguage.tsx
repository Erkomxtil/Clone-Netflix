import { useContext } from "react"
import { UserContext } from "../utils/context/languageContext"
import languageIcon from "../assets/language.svg"

type FooterProp = {
  footer: boolean
}

export const SelectLanguage = ({footer}:FooterProp) => {
  const { setLanguage } = useContext(UserContext)
  return (
    <>
      <div role="img" aria-hidden="true" className="absolute top-[50%] translate-y-[-50%] left-[10px] bg-[rgb(0,0,0,0)]">
      <img src={languageIcon} alt="Language icon" />
    </div>
      <select name="language" id="language" className={footer ? "bg-[transparent] border-[1px] border-[rgba(255,255,255,0.7)] border-solid rounded-md mx-[4px] w-[3rem] sm:w-fit px-[1.5rem] appearance-none relative h-[28px] z-10 text-[rgba(255,255,255,0.7)]" : "bg-[transparent] border-[1px] border-[rgba(255,255,255,0.7)] border-solid rounded-md mx-[4px] w-[3rem] sm:w-fit px-[1.5rem] appearance-none relative h-[28px] z-10"} defaultValue="Français" onChange={(e) => setLanguage(e.target.value)}>
      <option className="optionLanguage" value="fr">Français</option>
      <option className="optionLanguage" value="en">English</option>
    </select>
    </>
  )
}
