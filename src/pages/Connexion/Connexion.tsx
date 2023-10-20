import bgConnexion from "../../assets/background-connexion.jpg"
import logo from "../../assets/netflix-logo.svg"
import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"

export const Connexion = () => {
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
      <Footer signIn={true}/>
    </div>
  )
}