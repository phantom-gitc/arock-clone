import Logo from './Logo'
import Menu from './Menu'

const NavBar = () => {
  return (
    <div className="flex w-full items-start justify-between px-3 py-2">
      <Logo />
      <Menu />
    </div>
  )
}

export default NavBar