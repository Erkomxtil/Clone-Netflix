import { Header } from "../../components/Header"
import { Intro } from "../../components/Intro"
import { EmailForm } from "../../components/EmailForm"
import { Banner } from "../../components/Banner"
import { WatchOnTvMobile } from "../../components/WatchOnTvMobile"
import { ProfilDownload } from "../../components/ProfilDownload"
import { Accordion } from "../../components/Accordion"
import { Footer } from "../../components/Footer"

import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../utils/context/languageContext"

import { WatchDatasFr, WatchDatasEn } from "../../datas/WatchDatas"
import { ProfilDatasFr, ProfilDatasEn } from "../../datas/ProfilDatas"
import { AccordionDatasFr, AccordionDatasEn } from "../../datas/AccordionDatas"

import { WatchProps } from "../../shared/interfaces/watch.interface"
import { ProfilProps } from "../../shared/interfaces/profil.interface"
import { FaqProps } from "../../shared/interfaces/faq.interface"

export const Home = () => {
  const {language} = useContext(UserContext)
  const [watch, setWatch] = useState<WatchProps[]>()
  const [profil, setProfil] = useState<ProfilProps[]>()
  const [faq, setFaq] = useState<FaqProps[]>()

useEffect(()=> {
  if(language === "fr") {
    setWatch(WatchDatasFr)
    setProfil(ProfilDatasFr)
    setFaq(AccordionDatasFr)
  }
  if(language === "en") {
    setWatch(WatchDatasEn)
    setProfil(ProfilDatasEn)
    setFaq(AccordionDatasEn)
  }
},[language])

  return (
    <>
      <div className="backgroundIntro relative bg-black">
        <Header />
        <Intro />
        <EmailForm/>
        <div className="absolute top-0 left-0 bg-[black] bg-opacity-[0.5] z-0 h-[-webkit-fill-available] w-full"></div>
      </div>
      <Banner />
      {watch?.map((language, index) =>         
        <WatchOnTvMobile
          key={index}
          tvVideo={language.tvVideo}
          title={language.title}
          text={language.text}
          image={language.image}
          video={language.video}
        />
      )}
      {profil?.map((profil, index) => 
        <ProfilDownload
          key={index}
          title={profil.title}
          text={profil.text}
          mainImage={profil.mainImage}
          altText={profil.altText}
          downloadGif={profil.downloadGif}
          secondImage={profil.secondImage}
          secondAltText={profil.secondAltText}
          extraText1={profil.extraText1}
          extraText2={profil.extraText2}
          gif={profil.gif}
        />
      )}
      <div className="borderSection text-[white] bg-black pt-[56px] px-[32px] sm:py-[72px]">
        <div className="lg:max-w-[calc(83.33333333333334%-6rem)] lg:mx-[auto]">
          <h2 className="text-center text-[2rem] md:text-[3rem] font-[700] mb-[24px]">
            {language === "fr" ? "Foire aux questions": "Frequently Asked Questions"}            
          </h2>
          <ul>
            {  faq?.map((data, index) => 
            <Accordion key={index} question={data.question} text1={data.text1} text2={data.text2}/>
            )}
          </ul>
          <div className="bg-black pt-[2.85rem]">
            <h3 className="text-[white] text-center px-[64px]">{
              language === "fr" ?
            "Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.": "Ready to watch? Enter your email to create or restart your membership."}</h3>
            <EmailForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}




