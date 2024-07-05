import icon from './react-icon.png';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className='nav-container'>
        <img src={ icon } alt="React icon" className='nav-icon' />
        <h3 className='nav-logo-text'>ReactFacts</h3>
        <h4 className='nav-title'>React Course - Project 1</h4>
      </div>
    </nav>
  )
}

export default Navbar;
