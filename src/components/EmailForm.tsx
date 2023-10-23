import React, { useContext } from "react"
import arrowBtn from "../assets/arrowButton.svg"
import { UserContext } from "../utils/context/languageContext"
import { EmailInput } from "./EmailInput"

export const EmailForm = () => {
  const {language} = useContext(UserContext)
  const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <form className="w-fit m-auto pt-[16px] px-[24px] pb-[32px] flex flex-col items-center relative z-10 largeScreen sm:px-[2rem] sm:flex-row sm:items-center sm:mx-[auto]">
      <div className="w-full relative">
        <EmailInput signIn={false} />
      </div>
      <button className="text-[white] bg-[red] w-[-webkit-fill-available] mt-[1rem] py-[8px] px-[16px] text-[18px] rounded-[4px] font-[700] flex sm:mt-0 sm:ml-[8px] sm:h-[50px] sm:pl-[24px] sm:pr-[24px] sm:text-[1.5rem] sm:flex sm:items-center sm:flex-[0 0 auto]" onClick={(e) => { handleClickBtn(e)}}>{language === "fr" ? "Commencer" : "Get Started"} <img src={arrowBtn} alt="" /></button>
    </form>
  )
}