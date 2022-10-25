import './Header.css'
import logo from './images/logo2.png'

const Header = props => {
  return (
    <header className="Header-header">
      <img src={logo} alt="Our Logo"/>
    </header>
  )
}

export default Header