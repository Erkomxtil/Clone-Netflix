import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Connexion } from "../pages/Connexion/Connexion"
import { Thanks } from "../pages/Thanks/Thanks"

const router = createBrowserRouter([
  {
  path:"/",
  element: <Home/>
  },
  {
    path:"/connexion",
    element: <Connexion />
  },
  {
    path:"/thanks",
    element: <Thanks/>
  }
])

export const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}