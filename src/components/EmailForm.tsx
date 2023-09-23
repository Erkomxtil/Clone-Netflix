import React, { useState } from "react"
import arrowBtn from "../assets/arrowButton.svg"

export const EmailForm = () => {
  const [email, setEmail] = useState('')
  const [labelAnimation, setLabelAnimation] = useState('')
  // const inputLabel = useRef<HTMLLabelElement | null >(null)
  // const inputLabel = useRef(label)

  const handleInput = () => {  
    if(email === '' ) {
      setLabelAnimation("clickIn")
    } 
  }

  const handleInputOut = () => {
    if(email === "") {
      setLabelAnimation("clickOut")  
    }
  }

  const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <form className="mx-[24px] mt-[16px] px-[24px] pb-[32px] flex flex-col items-center relative z-10 largeScreen sm:px-[2rem] sm:flex-row sm:items-center sm:mt-[16px] sm:mx-[auto] sm:max-w-[36.625rem]">
      <div className="w-full relative">
        <label className={
          labelAnimation === "clickIn" ? 
          "text-[white] self-start absolute top-[50%] translate-y-[-50%] pl-[0.5rem] z-0 transition-all ease-in-out duration-150 text-[0.75rem] mt-[-10px]": 
          "text-[white] self-start absolute top-[50%] translate-y-[-50%] pl-[0.5rem] z-0 transition-all ease-in-out duration-150 text-[1rem]"
          } htmlFor="email">
          Adresse e-mail
        </label>
        <input value={email} name="email" className="pl-[0.25rem] bg-[rgb(0,0,0,0)] w-full border-solid border-[1px] border-[white] text-[white] leading-[1.5rem] pt-[10px] rounded-md h-[50px] relative z-10" type="text" onChange={(e) => {
          setEmail(e.target.value)
        }} onFocus={() => handleInput()} onBlur={() => handleInputOut()}/>
      </div>
      <button className="text-[white] bg-[red] w-fit mt-[1rem] py-[8px] px-[16px] text-[18px] rounded-[4px] font-[700] flex sm:mt-0 sm:ml-[8px] sm:h-[50px] sm:pl-[24px] sm:pr-[40px] sm:text-[1.5rem] sm:flex sm:items-center sm:flex-[0 0 auto]" onClick={(e) => { handleClickBtn(e)}}>Commencer <img src={arrowBtn} alt="" /></button>
    </form>
  )
}