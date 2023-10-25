import { Link } from "react-router-dom";
import LOGO from "../../../assets/icons/logo.svg";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext1 } from "../../../AuthContext/AuthContext";

export default function Navbar() {

  const {username} = useContext(AuthContext1);

    const options =<>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contact</li>
    </>
  return (
    <div className="navbar bg-base-100 h-32">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {
            options
           }
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
            <img src={LOGO} alt="LOGO" style={{marginTop:"-20px"}}/>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-20 navbarUl">
         {
            options
         }
        </ul>
      </div>
      <div className="navbar-end">
        {
          username?username:<Link to="/login"><button className="btn btn-outline btn-error">Login</button></Link>
        }
      
       
      </div>
    </div>
  );
}
