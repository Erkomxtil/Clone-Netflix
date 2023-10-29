import React, { useState, useContext }  from "react"
import { EmailInput } from "./EmailInput"
import { Link } from "react-router-dom"
import { PasswordInput } from "./PasswordInput"
import { UserContext } from "../utils/context/languageContext"

export const SignInForm = () => {
  const {language} = useContext(UserContext)
  const [showText, setShowText] = useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = (e.target as HTMLInputElement).getElementsByTagName("input")
    const email = formData[0].value
    const password = formData[1].value
 
    if( email === "netflix@test.fr" && password === "netflix123") {
      alert("Merci pour votre visite sur mon clone de Netflix, vous allez être redirigé vers mon site personnel, bonne visite.")
      window.location.replace("https://delastef.netlify.app/")
    } else {
      alert("L'email ou le mot de passe ne sont pas correct !")
    }
  }

  return (
    <div className="absolute top-[90px] w-full flex justify-center ">
      <div className="bg-[rgba(0,0,0,.75)] min-h-[600px] px-5 sm:px-[60px] pt-[60px] pb-[40px] sm:max-w-[450px] mx-auto">
        <h1 className="text-[white] text-[32px] font-semibold mb-[28px]">{language === "fr" ? "S'identifier" : "Sign In"}</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <EmailInput signIn={true} home={true}/><br />
          <PasswordInput />
          <br />
          <button className="bg-[red] text-[white] w-full rounded-md p-4 font-semibold mb-3" type="submit">{language === "fr" ? "S'identifier": "Sign In"}</button>
        </form>
          <div className="flex text-[#b3b3b3] text-[13px] gap-[100px]">
            <div className="flex">
              <input className="checked:accent-[white]" type="checkbox" name="remember" id="remember" /> 
              <span className="ml-2 whitespace-nowrap">
                {language === "fr" ? 
                "Se souvenir de moi" 
                : "Remember me"}
              </span>
            </div>
            <div className="whitespace-nowrap"> 
              <span className="hover:underline cursor-pointer">
                {language === "fr" ?
                  "Besoin d'aide ?"
                  : "Need help?"
                }
              </span>
            </div>
          </div>
          <p className="text-[#737373] mt-[50px]">
            {language === "fr" ? "Première vistite sur Netflix ?" : "New to Netflix?"} <Link className="text-[white] hover:underline" to="/">{language === "fr" ? "Inscrivez-vous" : "Sign up now"}</Link>
          </p>
          <p className="text-[#8c8c8c] text-[13px] mt-[11px]">
            {language === "fr" ? "Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot. " : "This page is protected by Google reCAPTCHA to ensure you're not a bot. "} <span className={!showText ? "text-[#0071eb] hover:underline cursor-pointer": "hidden"} onClick={() => setShowText(true)}>{language === "fr" ? "En savoir plus." : "Learn more"}</span>
          </p>
          <p className={showText ? "text-[#8c8c8c] text-[13px] mt-[11px]": "hidden"}>
            {language === "fr" ? "Les informations collectées par Google reCAPTCHA sont soumises aux Règles de confidentialité et Conditions d'utilisation de Google, et sont utilisées pour fournir, maintenir et améliorer le service reCAPTCHA, ainsi qu'à des fins de sécurité générale (elles ne sont pas utilisées pour les publicités personnalisées par Google)." : "The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google)."}
          </p>
      </div>
    </div>
  )
}
