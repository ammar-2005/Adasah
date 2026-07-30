import './App.css'
import Layout from './Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Note from './Component/Note'
import Home from './Component/Home'
import About from './Component/About'
import Error from './NotFound/NotFound'
import AllArticles from './AllArticles/AllArticles'
import Lighting from './AllArticles/Lighting'
import Portrait from './AllArticles/Portrait'
import Landscape from './AllArticles/Landscape'
import Techniques from './AllArticles/Techniques'
import Equipment from './AllArticles/Equipment'
import Privacy from './Privacy'
import Service from './Service'

function App() {
 const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'home', element: <Home /> },
        { index: true, element: <Home /> },
        { path: 'note', element: <Note />, children: [
          { index: true, element: <AllArticles/> },
          { path: 'AllArticles', element: <AllArticles/> },
          { path: 'Lighting', element: <Lighting/> },
          { path: 'Portrait', element: <Portrait/> },
          { path: 'Landscape', element: <Landscape/> },
          { path: 'Techniques', element: <Techniques/> },
          { path: 'Equipment', element: <Equipment/> },
        ] },
        { path: 'about', element: <About /> },
        { path: 'privacy', element: <Privacy/> },
        { path: 'service', element: <Service/> },
        { path: '*', element: <Error /> }
      ]
    }
  ], {
    basename: '/Adasah'
  })

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
