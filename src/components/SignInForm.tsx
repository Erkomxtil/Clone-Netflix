import { useState } from "react"
import { EmailInput } from "./EmailInput"
import { Link } from "react-router-dom"

export const SignInForm = () => {
  const [showText, setShowText] = useState(false)
  return (
    <div className="absolute top-[90px] w-full flex justify-center ">
      <div className="bg-[rgba(0,0,0,.75)] min-h-[600px] px-[60px] pt-[60px] pb-[40px] max-w-[450px] mx-auto">
        <h1 className="text-[white] text-[32px] font-semibold mb-[28px]">S'identifier</h1>
        <form >
          <EmailInput signIn={true}/><br />
          <br />
          <button className="bg-[red] text-[white] w-full rounded-md p-4 font-semibold mb-3" type="button">S'identifier</button>
        </form>
          <div className="flex text-[#b3b3b3] text-[13px] gap-[100px]">
            <div>
              <input type="checkbox" name="remember" id="remember" /> 
              <span className="ml-2">Se souvenir de moi</span>
            </div>
            <div>
              <span className="hover:underline cursor-pointer">Besoin d'aide ?</span>
            </div>
          </div>
          <p className="text-[#737373] mt-[50px]">
            Première vistite sur Netflix ? <Link className="text-[white] hover:underline" to="/">Inscrivez-vous</Link>
          </p>
          <p className="text-[#8c8c8c] text-[13px] mt-[11px]">
            Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot. <span className={!showText ? "text-[#0071eb] hover:underline": "hidden"} onClick={() => setShowText(true)}>En savoir plus.</span>
          </p>
          <p className={showText ? "text-[#8c8c8c] text-[13px] mt-[11px]": "hidden"}>
            Les informations collectées par Google reCAPTCHA sont soumises aux Règles de confidentialité et Conditions d'utilisation de Google, et sont utilisées pour fournir, maintenir et améliorer le service reCAPTCHA, ainsi qu'à des fins de sécurité générale (elles ne sont pas utilisées pour les publicités personnalisées par Google).
          </p>
      </div>
    </div>
  )
}
