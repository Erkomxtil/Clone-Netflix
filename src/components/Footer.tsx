import { UserContext } from "../utils/context/languageContext"
import { useContext, useState, useEffect } from "react"

import { LinkProps } from "../shared/interfaces/link.interface"
import { FooterDatasFr, FooterDatasEn, FooterSigninDatasFr, FooterSigninDatasEn } from "../datas/FooterDatas"
import { SelectLanguage } from "./SelectLanguage"

interface FooterProps {
  signIn: boolean
}

export const Footer = ({signIn}:FooterProps) => {
  const { language } = useContext(UserContext)
  const [link, setLink] = useState<LinkProps[]>()

  useEffect(()=> {
    if (language === "fr" && signIn === false) {
      setLink(FooterDatasFr)
    }
    if (language === "fr" && signIn === true) {
      setLink(FooterSigninDatasFr)
    }
    if (language === "en" && signIn === false) {
      setLink(FooterDatasEn)
    }
    if (language === "en" && signIn === true) {
      setLink(FooterSigninDatasEn)
    }
  },[language, signIn])

  return (
    <footer className={signIn ? "absolute w-full bottom-0 bg-[rgba(0,0,0,.75)]":"bg-black borderSection"} >
      <div className="py-[32px] px-[24px] md:py-[72px] md:px-[32px] lg:max-w-[calc(83.33333333333334%-6rem)] lg:mx-[auto]">
        <div>
            {language === "fr" &&
            <p className={!signIn ? "text-[rgba(255,255,255,0.7)]" : "text-[13px] text-[#737373]"}>
              Des questions ? Appelez le <a className={!signIn ? "underline" : "hover:underline"} href="tel:(+33) 0805-543-063">(+33) 0805-543-063</a>
            </p>
            } 
            {language === "en" &&   
            <p className={!signIn ? "text-[rgba(255,255,255,0.7)]" : "text-[13px] text-[#737373]"}>
              <a className={!signIn ? "underline" : "hover:underline"} href="https://help.netflix.com/fr/contactus">Questions? Contact us.</a>
            </p>        
            } 
        </div>
        <div className="text-[white] mt-7">
          <ul className="columns-2 md:columns-4">
            {link?.map((link, index) =>
            <li key={index} className="mb-4">
              <a className={!signIn ? "underline text-[rgba(255,255,255,0.7)]": "text-[13px] hover:underline text-[#737373]"} href={link.link}>{link.text}</a>
            </li>
            )}
          </ul>
        </div>          
        <div className="relative">
          <SelectLanguage footer={true} signin={signIn}/>
        </div>
        <p className={signIn ? "hidden":"text-[rgba(255,255,255,0.7)] mt-6"}>Netflix France</p>
      </div>
    </footer>
  )
}
