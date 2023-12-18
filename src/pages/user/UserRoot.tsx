import { Outlet } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
type Props = {}

function UserRoot({}: Props) {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default UserRoot