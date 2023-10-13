import bgConnexion from "../../assets/background-connexion.jpg"
import logo from "../../assets/netflix-logo.svg"
import { Link } from "react-router-dom"

export const Connexion = () => {
  return (
    <div> 
      <div className="bg-cover block min-h-[100vh] h-full z-0 bg-black">
        <img className="min-w-full min-h-full opacity-[0.5] blur-[1px]" src={bgConnexion} alt="Films Netflix" />
      </div>
      <div className="z-10 absolute top-0 w-full">
        <header className="h-[90px] flex items-center ml-[3%]">
          <Link to="/">
            <img className="w-[167px] h-[45px] ml-[3%]" src={logo} alt="Logo Netflix" />      
          </Link>
        </header>
      </div>
    </div>
  )
}