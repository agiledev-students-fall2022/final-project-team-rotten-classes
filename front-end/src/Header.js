import './Header.css'
import logo from './logo.svg'

/**
 * A React component that is used for the header displayed at the top of every page of the site.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Header = props => {
  return (
    <header className="Header-header">
      <h1>WELCOMEEE!</h1>
    </header>
  )
}

// make this component available to be imported into any other file
export default Header