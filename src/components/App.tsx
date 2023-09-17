/* eslint-disable prettier/prettier */

import { Foter } from 'pages/footer'

import 'Assets/styles/common.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from 'layout/Root'
// import { Chef } from 'pages/chef'
import Main from 'pages/main'
// import Errpage from 'pages/Error'
import { Testrouter } from 'pages/testrouter'
import Gcard from './resgallery card/Gallerycard'
// import Gallery from 'pages/Gallery'
// import Gallerydetail from 'pages/Gallerydetail'
// import Aboutus from 'pages/Aboutus'
// import EventPage from 'pages/Event'
import { lazy, Suspense } from 'react'

const EventPage = lazy(() => import('pages/Event'))
const Gallery = lazy(() => import('pages/Gallery'))
const Errpage = lazy(() => import('pages/Error'))
const Gallerydetail = lazy(() => import('pages/Gallerydetail'))
const Aboutus = lazy(() => import('pages/Aboutus'))
const Chef = lazy(() => import('pages/chef'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: (
      <Suspense fallback={<p>Loading.....</p>}>
        <Errpage />
      </Suspense>
    ),
    children: [
      {
        path: '',
        element: <Main />
      },
      {
        path: 'event',
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <EventPage />
          </Suspense>
        )
      },
      {
        path: 'gallery',
        children: [
          {
            path: '',
            element: (
              <Suspense fallback={<p>Loading.....</p>}>
                <Gallery />
              </Suspense>
            )
          },
          {
            path: ':name/:id',
            element: (
              <Suspense fallback={<p>Loading.....</p>}>
                <Gallerydetail />
              </Suspense>
            )
          }
        ]
      },
      {
        path: 'aboutus',
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <Aboutus />
          </Suspense>
        )
      },
      {
        path: 'chef',

        children: [
          {
            path: '',
            element: (
              <Suspense fallback={<p>Loading.....</p>}>
                <Chef />
              </Suspense>
            )
          },
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
