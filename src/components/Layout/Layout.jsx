import Header from '../Header/Header.jsx'
import {Outlet} from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

