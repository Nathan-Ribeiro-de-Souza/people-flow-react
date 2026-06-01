import { Link } from 'react-router-dom'

function Navbar(){
  return(
    <nav>
      <h2 className='logo'>UserManager</h2>

      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  )
}

export default Navbar