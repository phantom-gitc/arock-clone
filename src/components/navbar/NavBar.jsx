import Logo from './Logo'
import Menu from './Menu'

const NavBar = ({ onMenuClick }) => {
  return (
    <div className="flex w-full items-start justify-between px-3 py-2">
      <Logo />
      <Menu onMenuClick={onMenuClick} />
    </div>
  )
}

export default NavBar