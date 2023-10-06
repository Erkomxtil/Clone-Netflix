import { useState } from "react"
import cross from "../assets/cross.svg"

interface AccordionDatasProps {
 question: string
 text1: string
 text2?: string
}

export const Accordion = ({question, text1, text2}:AccordionDatasProps) => {
  const [btnColor, setBtnColor] = useState(false)  
  const handleClickBtn = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event.target);
    
    if(btnColor){
      setBtnColor(false)
    } else {
      setBtnColor(true)      
    }
  }
  return (
    <div className="pb-[8px] text-[1.125rem] md:text-[1.5rem]">
      <div className={btnColor ? "flex justify-between p-[1.5rem] bg-[#414141] cursor-pointer" : "flex justify-between p-[1.5rem] bg-[#2D2D2D] cursor-pointer "} onClick={(event) => handleClickBtn(event)}>
      {question} <img className={btnColor ? "rotate-45 active": "rotate-0 active" } src={cross} alt="En savoir plus" />
      </div>
      <div className={btnColor ? 
        "bg-[#2D2D2D] p-[1.5rem] max-h-[75rem] overflow-visible active opacity-100" :
        "bg-[#2D2D2D] max-h-[0] overflow-hidden collapse active opacity-0"}>
        <p>{text1}</p><br/>
        <p>{text2}</p>       
      </div>      
    </div>

  )
}
