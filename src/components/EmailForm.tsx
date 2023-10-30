import React, { useContext, useState } from "react"
import arrowBtn from "../assets/arrowButton.svg"
import { UserContext } from "../utils/context/languageContext"
import { EmailInput } from "./EmailInput"
import { CheckEmail } from "../utils/checkEmail/CheckEmail"
import { useNavigate } from "react-router-dom"

export const EmailForm = () => {
  const {language} = useContext(UserContext)
  const [buttonClick, setButtonClick] = useState(true)
  const nagivate = useNavigate()
  
  const HandleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    console.log(event.currentTarget.parentElement);
    
    const formData = (event.currentTarget.parentElement as HTMLInputElement).getElementsByTagName("input")
    const email = formData[0].value
    if(email === "" || email !== "" && CheckEmail(email) === false || email === "" && CheckEmail(email) === false) {
      setButtonClick(false)
    } else {
        setButtonClick(true)
        nagivate("/thanks")
    }
  }
  
  return (
    <form className="w-fit m-auto pt-[16px] px-[24px] pb-[32px] flex flex-col items-center relative z-10 largeScreen sm:px-[2rem] sm:flex-row sm:items-start sm:mx-[auto] h-[78px]">
      <div className="w-full relative">
        <EmailInput signIn={false} home={buttonClick}/>
      </div>
      <button className="text-[white] bg-[red] w-[-webkit-fill-available] mt-[1rem] py-[8px] px-[16px] text-[18px] rounded-[4px] font-[700] flex sm:mt-0 sm:ml-[8px] sm:h-[50px] sm:pl-[24px] sm:pr-[24px] sm:text-[1.5rem] sm:flex sm:items-center sm:flex-[0 0 auto]" type="submit" onClick={(e) => HandleSubmit(e)}>
        {language === "fr" ? "Commencer" : "Get Started"} <img src={arrowBtn} alt="Arrow" />
      </button>
    </form>
  )
}