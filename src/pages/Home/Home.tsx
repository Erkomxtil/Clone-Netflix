import { Header } from "../../components/Header"
import { Intro } from "../../components/Intro"
import { EmailForm } from "../../components/EmailForm"
import { Banner } from "../../components/Banner"
import { WatchOnTvMobile } from "../../components/WatchOnTvMobile"
import { ProfilDownload } from "../../components/ProfilDownload"
import { Accordion } from "../../components/Accordion"
import { Footer } from "../../components/Footer"

import profilImg from "../../assets/profils.png"
import stranger from "../../assets/stranger.jpg"
import boxshot from "../../assets/boxshot.png"
import download from "../../assets/download-icon.gif"
import tv from "../../assets/tv.png"
import macMobile from "../../assets/mac-tablet-phone.png"
import { AccordionDatas } from "../../datas/AccordionDatas"

export const Home = () => {
  return (
    <>
      <div className="backgroundIntro relative bg-black">
        <Header />
        <Intro />
        <EmailForm/>
        <div className="absolute top-0 left-0 bg-[black] bg-opacity-[0.5] z-0 h-[-webkit-fill-available] w-full"></div>
      </div>
      <Banner />
      <WatchOnTvMobile 
        tvVideo={true}
        title="Regardez Netflix sur&nbsp;votre TV"
        text="Regardez Netflix sur votre Smart&nbsp;TV, PlayStation, Xbox, Chromecast, Apple TV, lecteur Blu-ray et bien plus."
        image={tv}
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
      />
      <WatchOnTvMobile 
        tvVideo={false}
        title="Où que vous soyez"
        text="Regardez des films et séries en accès illimité sur votre TV, smartphone, tablette et ordinateur."
        image={macMobile}
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
      />
      <ProfilDownload 
      title="Créez des profils pour les enfants"
      text="Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement."
      mainImage={profilImg}
      altText="Enfants et la lapin heureux"
      downloadGif={false}
      />
      <ProfilDownload 
        title="Téléchargez vos séries pour les regarder hors connexion" 
        text="Uniquement disponible dans les offres sans pub."
        mainImage={stranger} 
        altText="Stranger things poster"
        secondImage={boxshot}
        secondAltText="Mini poster Stranger things"
        extraText1="Stranger Things"
        extraText2="Téléchargement en cours..."
        gif={download}
        downloadGif={true}
      />
      <div className="borderSection text-[white] bg-black pt-[56px] px-[32px] sm:py-[72px]">
        <div className="lg:max-w-[calc(83.33333333333334%-6rem)] lg:mx-[auto]">
          <h2 className="text-center text-[2rem] md:text-[3rem] font-[700] mb-[24px]">
            Foire aux questions
          </h2>
          <ul>
            {  AccordionDatas.map((data, index) => 
            <Accordion key={index} question={data.question} text1={data.text1} text2={data.text2}/>
            )}
          </ul>
          <div className="bg-black pt-[2.85rem]">
            <h3 className="text-[white] text-center px-[64px]">Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>
            <EmailForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}




