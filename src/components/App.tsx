/* eslint-disable prettier/prettier */

import { Foter } from 'pages/footer'

import 'Assets/styles/common.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from 'layout/Root'
import { Chef } from 'pages/chef'
import Main from 'pages/main'
import Errpage from 'pages/Error'
import { Testrouter } from 'pages/testrouter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Errpage />,
    children: [
      { path: '', element: <Main /> },
      { path: 'footer', element: <Foter /> },
      { path: 'chef', element: <Chef /> },
      { path: 'chef/:id', element: <Testrouter /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
