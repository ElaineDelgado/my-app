import Home from '../pages/Home'
import About from '../pages/About'
import AboutMe from '../pages/AboutMe'
import AboutProduct from '../pages/AboutProduct'
import NotFound from '../pages/NotFound'
import AboutItem from '../pages/AboutItem' 
import RequiredAuth from '../RequiredAuth'

import {useRoutes} from 'react-router-dom'

const MainRoutes = () => {

  return useRoutes([
    {path: "/" , element: <Home/> },
    {path:  "/sobre", element: <RequiredAuth ><About/></RequiredAuth>},
    {path: "/sobre/sobremim", element: <AboutMe />},
    {path: "/sobre/sobreproduto", element: <AboutProduct/>},
    {path: "/sobre/:slug", element: <AboutItem/>},
    {path: "*", element: <NotFound />},
  ])
}

export default MainRoutes