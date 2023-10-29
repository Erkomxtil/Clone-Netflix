import { useState, useContext } from "react"
import { UserContext } from "../utils/context/languageContext"
import { SignInProps } from "../shared/interfaces/signIn.interface"
import roundCross from "../assets/roundCross.svg"


export const EmailInput = ({signIn, home}:SignInProps) => {
  const {language} = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [labelAnimation, setLabelAnimation] = useState('')
  // console.log(home);

  const handleInput = () => {  
    if(email === "" ) {
      setLabelAnimation("clickIn")
    } 
  }

  const handleInputOut = () => {
    if(email === "") {
      setLabelAnimation("clickOut")  
    }
  }

  console.log("input"+ home);
  
  
  return (
    <>
      <div className="relative">
        {signIn ? 
        <div className="bg-[#333333] rounded-md">
        <label className={
            labelAnimation === "clickIn" ? 
            "text-[black] self-start absolute top-[50%] translate-y-[-50%] pl-[0.5rem] z-20 transition-all ease-in-out duration-150 text-[0.75rem] mt-[-10px] whitespace-nowrap": 
            "text-[#8c8c8c] self-start absolute top-[50%] translate-y-[-50%] pl-[0.5rem] z-0 transition-all ease-in-out duration-150 text-[1rem]"
            } htmlFor="email">
            {language === "fr" ? "Email ou numéro de téléphone": "Email or phone number"}
          </label>
          <input value={email} name="email" className={labelAnimation === "clickOut" ? 
          "pl-[0.25rem] bg-[transparent] w-fulltext-[white] leading-[1.5rem] pt-[10px] rounded-md h-[50px] relative z-10 w-full border-b-[2px] border-solid border-[#e87c03]"
          : "pl-[0.25rem] bg-[transparent] w-fulltext-[white] leading-[1.5rem] pt-[10px] rounded-md h-[50px] relative z-10 w-full "} type="text" onChange={(e) => {
            setEmail(e.target.value)
          }} onFocus={() => handleInput()} onBlur={() => handleInputOut()}/>
        </div> : 
        <>
          <label className={
            labelAnimation === "clickIn" ? 
            "text-[white] self-start absolute top-[50%] translate-y-[-50%] pl-[0.5rem] z-0 transition-all ease-in-out duration-150 text-[0.75rem] mt-[-10px]": 
            "text-[white] self-start absolute top-[50%] translate-y-[-50%] pl-[0.5rem] z-0 transition-all ease-in-out duration-150 text-[1rem]"
            } htmlFor="email">
            {language === "fr" ? "Adresse e-mail": "Email or phone"}
          </label>
          <input autoComplete="email" type="email" minLength={3} maxLength={50} value={email} aria-invalid="true" name="email" className={labelAnimation === "clickOut" && email === "" ? 
          "pl-[0.25rem] bg-[rgb(0,0,0,0)] w-full border-solid border-[1px] border-[red] text-[white] leading-[1.5rem] pt-[10px] rounded-md h-[50px] relative z-10 sm:min-w-[330px]" : 
          "pl-[0.25rem] bg-[rgb(0,0,0,0)] w-full border-solid border-[1px] border-[white] text-[white] leading-[1.5rem] pt-[10px] rounded-md h-[50px] relative z-10 sm:min-w-[330px]"} onChange={(e) => {
            setEmail(e.target.value)
          }} onFocus={() => handleInput()} onBlur={() => handleInputOut()}/>
        </>                
        }
      </div>
      <p className={labelAnimation === "clickOut" && email === "" || home === false ? "block text-[#e87c03] text-[13px] pt-2" : "hidden"}>
      {signIn ? 
        <span>
          {language === "fr" ? 
            "Veuillez entrer une adresse e-mail ou un numéro de téléphone valide." 
            : 
            "Please enter a valid email or phone number."}
        </span>
       : 
        <span className="text-[red] flex">
          <img className="pr-2" src={roundCross} alt="Round with a cross" />
          {language === "fr" ? 
            email !== "" && home === false ?
            "Veuillez saisir une adresse e-mail valide."
            :
            "L'adresse e-mail est obligatoire." 
            : 
            email !== "" && home === false ?
            "Please enter a valid email address." 
            :
            "Email is required."}
        </span>
       }
      </p>
    </>
  )
}
