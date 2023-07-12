import Main from 'pages/main'
import NavBar from './navbar'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
      <div className="fixed top-0 mx-auto left-0 right-0 z-50">
        <NavBar />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}
export default Root
