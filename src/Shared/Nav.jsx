import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyContextProvider } from "../Components/MyContext";


const Nav = () => {
    const {user, handleSignOut}=useContext(MyContextProvider);
    const navLinks=<>
            <NavLink to="/"><li className="mr-3">Home</li></NavLink>   
            <NavLink to="/dashboard"><li className="mr-3">Dashboard</li></NavLink>   
            <NavLink to="/about"><li className="mr-3">About</li></NavLink>   
              
    </>
    
      return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm text-[18px] dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <img src="https://i.ibb.co/chZXCrm/logo.png" alt="" className="w-32 -ml-3"/>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[18px]">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
      {user? <button className="border border-cyan-500 rounded-xl px-3 mr-4 font-medium text-lg " onClick={handleSignOut} >Log out</button>: <Link to={'/signIn'} className="border border-cyan-500 rounded-xl px-3 mr-4 font-medium text-lg">Login</Link>}
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL? <img src={user.photoURL}/>: <img src="https://i.ibb.co/9YTytjp/profile.png"/> }
            </div>
           
      </label>
      
      </div>
    </div>
      );
};

export default Nav;