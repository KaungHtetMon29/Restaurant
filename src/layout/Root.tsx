import Main from 'pages/main'
import NavBar from './navbar'
import { Outlet, useNavigation } from 'react-router-dom'

function Root() {
  const navigation = useNavigation()
  return (
    <div>
      <div className="fixed top-0 mx-auto left-0 right-0 z-50">
        <NavBar />
      </div>
      {navigation.state === 'loading' ? (
        <div>loading</div>
      ) : (
        <div className="">
          <Outlet />
        </div>
      )}
    </div>
  )
}
export default Root
