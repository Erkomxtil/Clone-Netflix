import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Connexion } from "../pages/Connexion/Connexion"

const router = createBrowserRouter([
  {
  path:"/",
  element: <Home/>
  },
  {
    path:"/connexion",
    element: <Connexion />
  }
])

export const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}