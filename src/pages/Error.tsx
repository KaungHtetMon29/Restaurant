import NavBar from 'layout/navbar'
import { Link } from 'react-router-dom'

function Errpage() {
  return (
    <div>
      <NavBar />
      <div className="text-center">
        <p>Error Found nothing</p>
        <Link to="/">To homepage</Link>
      </div>
    </div>
  )
}
export default Errpage
