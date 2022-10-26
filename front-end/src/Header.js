import './Header.css'
import logo from './images/logo2.png'

const Header = props => {
  return (
    <header className="Header-header">
        <a href='/'>
            <img src={logo} alt="Our Logo"/>
        </a>
    </header>
  )
}

export default Header