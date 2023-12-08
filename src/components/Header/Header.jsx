import './Header.css';
import ToggleBtn from '../ToggleBtn/ToggleBtn';

const Header = ({ toggleDarkMode }) => {

  return (
    <header className="site-header">
      <div className="container header-container">
        <h1 className="site-title">Form Builder</h1>
        <div className="light-dark-toggle__wrap">
          <ToggleBtn onClick={ toggleDarkMode } />
        </div>
      </div>
    </header>
  )

}

export default Header;