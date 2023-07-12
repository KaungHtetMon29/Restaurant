import { Link, useParams } from 'react-router-dom'
export function Testrouter() {
  const Param = useParams()

  return (
    <div>
      <h1>id1</h1>
      <p>{Param.id}</p>
      <p>
        <Link to=".." relative="route">
          {' '}
          back
        </Link>
      </p>
    </div>
  )
}
