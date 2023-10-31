import { useContext } from "react"
import { UserContext } from "../../utils/context/languageContext"
import { Footer } from "../../components/Footer"
import { Link } from "react-router-dom"
import logo from "../../assets/netflix-logo.svg"
import bgConnexion from "../../assets/background-connexion.jpg"

export const Thanks = () => {
  const {language} = useContext(UserContext)
  return (
    <div className="relative h-full min-h-[100vh]"> 
      <div className="bg-cover block h-full min-h-[100vh] overflow-hidden absolute w-full z-0 bg-black">
        <img className="hidden mmd:block mmd:min-h-full mmd:min-w-full mmd:max-w-[unset] opacity-[0.5]" src={bgConnexion} alt="Films Netflix" />
      </div>
      <div className="z-10 absolute top-0 w-full">
        <header className="h-[90px] flex items-center ml-[3%]">
          <Link to="/">
            <img className="w-[167px] h-[45px] ml-[3%]" src={logo} alt="Logo Netflix" />      
          </Link>
        </header>
      </div>
      <div className="bg-[rgba(0,0,0,0.5)] absolute top-32 text-[white] left-[50%] translate-x-[-50%]">
        {language === "fr" ?
        <p className="p-[20px] sm:p-20 text-[20px]">
          Merci pour votre visite sur cette démonstration de React Js et typescript, vous pouvez retrouver mon travail sur mon site personnel l'adresse suivante <Link to={"https://delastef.netlify.app/"} target="_blank">https://delastef.netlify.app/</Link>
        </p>
        :
        <p className="p-[20px] sm:p-20 text-[20px]">
        Thank you for your visit to this demonstration of React Js and typescript, you can find my work on my personal website at the following address <Link to="https://delastef.netlify.app/" target="_blank">https://delastef.netlify.app/</Link>
        </p>     
        }
      </div>
      <Footer signIn={true}/>
    </div>
  )
}
