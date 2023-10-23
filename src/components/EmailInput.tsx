import { useState, useContext } from "react"
import { UserContext } from "../utils/context/languageContext"
import { SignInProps } from "../shared/interfaces/signIn.interface"


export const EmailInput = ({signIn}:SignInProps) => {
  const {language} = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [labelAnimation, setLabelAnimation] = useState('')

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

  return (
    <div className="relative">
      {signIn ? 
      <div className="bg-[#333333] rounded-md">
      <label className={
          labelAnimation === "clickIn" ? 
          "text-[black] self-start absolute top-[50%] translate-y-[-50%] pl-[0.5rem] z-20 transition-all ease-in-out duration-150 text-[0.75rem] mt-[-10px] whitespace-nowrap": 
          "text-[#8c8c8c] self-start absolute top-[50%] translate-y-[-50%] pl-[0.5rem] z-0 transition-all ease-in-out duration-150 text-[1rem] "
          } htmlFor="email">
          {language === "fr" ? "Email ou numéro de téléphone": "Email or phone number"}
        </label>
        <input value={email} name="email" className="pl-[0.25rem] bg-[transparent] w-fulltext-[white] leading-[1.5rem] pt-[10px] rounded-md h-[50px] relative z-10 w-full " type="text" onChange={(e) => {
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
        <input value={email} name="email" className="pl-[0.25rem] bg-[rgb(0,0,0,0)] w-full border-solid border-[1px] border-[white] text-[white] leading-[1.5rem] pt-[10px] rounded-md h-[50px] relative z-10" type="text" onChange={(e) => {
          setEmail(e.target.value)
        }} onFocus={() => handleInput()} onBlur={() => handleInputOut()}/>
      </>                
      }
    </div>
  )
}
