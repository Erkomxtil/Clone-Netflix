import { IntroDatasEn } from "../datas/IntroDatas"
import { IntroDatasFr } from "../datas/IntroDatas"
import { UserContext } from "../utils/context/languageContext"
import { useContext, useState, useEffect } from "react"

interface IntroProps {
  title: string | undefined
  text1: string | undefined
  text2: string | undefined
}

export const Intro = () => {
  const {language} = useContext(UserContext)
  const [IntroDatas, setIntroDatas] = useState<IntroProps>()

  useEffect(() => {
    if (language === "en") {
      setIntroDatas(IntroDatasEn)
    }
    if (language === "fr") {
      setIntroDatas(IntroDatasFr)
    }
  },[language])

  return (
    <div className="text-center text-[white] font-[700] mx-[24px] px-[24px] pt-[40px] relative z-10 largeScreen">
      <h1 className="text-[2rem] md:text-[3rem]">{IntroDatas?.title}</h1>
      <p className="text-[1.125rem] mt-[1rem] font-[400] md:text-[1.5rem]">{IntroDatas?.text1}</p>
      <h2 className="text-[1.125rem] mt-[1rem] font-[400] leading-[1.6875rem] md:text-[1.5rem] ">
        {IntroDatas?.text2}
      </h2>
    </div>
  )
}