import { useState, useContext } from "react"
import { UserContext } from "../utils/context/languageContext"

export const PasswordInput = () => {
  const {language} = useContext(UserContext)
  const [password, setPassword] = useState('')
  const [labelAnimation, setLabelAnimation] = useState('')

  const handleInput = () => {  
    if(password === "" ) {
      setLabelAnimation("clickIn")
    } 
  }

  const handleInputOut = () => {
    if(password === "") {
      setLabelAnimation("clickOut")  
    }
  }

  return (
    <>
      <div className="relative">
        <div className="bg-[#333333] rounded-md">
          <label className={
            labelAnimation === "clickIn" ? 
            "text-[black] self-start absolute top-[50%] translate-y-[-50%] pl-[0.5rem] z-20 transition-all ease-in-out duration-150 text-[0.75rem] mt-[-10px] whitespace-nowrap": 
            "text-[#8c8c8c] self-start absolute top-[50%] translate-y-[-50%] pl-[0.5rem] z-0 transition-all ease-in-out duration-150 text-[1rem]"
            } htmlFor="password">
            {language === "fr" ? "Mot de passe": "Password"}
          </label>
          <input value={password} name="password" className={ labelAnimation === "clickOut" && password === ""  ? 
          "pl-[0.25rem] bg-[transparent] w-full text-[black] leading-[1.5rem] pt-[10px] rounded-md h-[50px] relative z-10 border-b-[2px] border-solid border-[#e87c03]"
          : "pl-[0.25rem] bg-[rgb(0,0,0,0)] w-full text-[black] leading-[1.5rem] pt-[10px] rounded-md h-[50px] relative z-10 "} type="password" onChange={(e) => {
            setPassword(e.target.value)
          }} onFocus={() => handleInput()} onBlur={() => handleInputOut()}/>                   
        </div>
      </div>
      <p className={labelAnimation === "clickOut" && password === "" ? "block text-[#e87c03] text-[13px] pt-2" : "hidden"}>
        Votre mot de passe doit comporter entre 4 et 60 caractères.
      </p>
    </>
  )
}

