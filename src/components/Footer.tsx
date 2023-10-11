import { UserContext } from "../utils/context/languageContext"
import { useContext, useState, useEffect } from "react"

import { LinkProps } from "../shared/interfaces/link.interface"
import { FooterDatasFr, FooterDatasEn } from "../datas/FooterDatas"
import { SelectLanguage } from "./SelectLanguage"

export const Footer = () => {
  const { language } = useContext(UserContext)
  const [link, setLink] = useState<LinkProps[]>()

  useEffect(()=> {
    if (language === "fr") {
      setLink(FooterDatasFr)
    }
    if (language === "en") {
      setLink(FooterDatasEn)
    }
  },[language])

  return (
    <footer className="bg-black borderSection" >
      <div className="my-[32px] px-[24px] md:py-[72px] md:px-[32px] lg:max-w-[calc(83.33333333333334%-6rem)] lg:mx-[auto]">
        <div>
            {language === "fr" &&
            <p className="text-[rgba(255,255,255,0.7)]">
              Des questions ? Appelez le <a className="underline" href="tel:(+33) 0805-543-063">(+33) 0805-543-063</a>
            </p>
            } 
            {language === "en" &&   
            <p className="text-[rgba(255,255,255,0.7)]">
              <a className="underline" href="https://help.netflix.com/fr/contactus">Questions? Contact us.</a>
            </p>        
            } 
        </div>
        <div className="text-[white] mt-7">
          <ul className="columns-2 md:columns-4">
            {link?.map((link, index) =>
            <li key={index} className="mb-4">
              <a className="underline text-[rgba(255,255,255,0.7)]" href={link.link}>{link.text}</a>
            </li>
            )}
          </ul>
        </div>          
        <div className="relative">
          <SelectLanguage footer={true}/>
        </div>
        <p className="text-[rgba(255,255,255,0.7)] mt-6">Netflix France</p>
      </div>
    </footer>
  )
}
