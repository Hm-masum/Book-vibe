import { Link, NavLink } from "react-router-dom";

const Nav = () => {

    const links = (
        <>
          <NavLink className={({isActive})=> isActive ? 'text-green-400 border-2 border-green-400 rounded-lg p-2' : 'text-black'} to='/'>Home</NavLink>
          <NavLink className={({isActive})=> isActive ? 'text-green-400 border-2 border-green-400 rounded-lg p-2' : 'text-black'} to='/listedBooks'>Listed Books</NavLink>
          <NavLink className={({isActive})=> isActive ?  'text-green-400 border-2 border-green-400 rounded-lg p-2' : 'text-black'} to='/PageToRead'>Pages to Read</NavLink>
        </>);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl lg:text-2xl">Book Vibe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg px-1 hidden sm:flex items-center gap-5">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-1 lg:space-x-2">
          <a className="btn bg-green-400">Sign in</a>
          <a className="btn bg-cyan-400">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
