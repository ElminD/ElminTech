import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className={"w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"}>
            <p className="blue-gradient_text">ED</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            <p className="font-size: 4vw"></p>About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            Projects
            </NavLink>
            <NavLink target="_blank" to="https://www.linkedin.com/in/elmind/overlay/1635550602295/single-media-viewer/?profileId=ACoAACvGRB8BBX_UP1LyX3U669NxLRJRVwkIq_o" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
            Resume
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar