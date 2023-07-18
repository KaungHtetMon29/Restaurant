/* eslint-disable prettier/prettier */

import { Foter } from 'pages/footer'

import 'Assets/styles/common.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from 'layout/Root'
import { Chef } from 'pages/chef'
import Main from 'pages/main'
import Errpage from 'pages/Error'
import { Testrouter } from 'pages/testrouter'
import Gcard from './resgallery card/Gallerycard'
import Gallery from 'pages/Gallery'
import Gallerydetail from 'pages/Gallerydetail'
import Aboutus from 'pages/Aboutus'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Errpage />,
    children: [
      { path: '', element: <Main /> },
      {
        path: 'gallery',
        children: [
          { path: '', element: <Gallery /> },
          {
            path: ':name/:id',
            element: <Gallerydetail />
          }
        ]
      },
      { path: 'aboutus', element: <Aboutus /> },
      {
        path: 'chef',

        children: [
          { path: '', element: <Chef /> },
          { path: ':id', element: <Testrouter /> }
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
