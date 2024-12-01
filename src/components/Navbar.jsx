import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logodc.png";
import logo_mob from '../assets/864b8e520a3c45608015284354fa300f-free.png'
import dropdown_icon from "../assets/dropdown_icon.svg";
import menu_icon from '../assets/menu_icon.svg';
import cross_icon from '../assets/cross_icon.png'
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropshowMenu,setDropShowMenu] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
  const {token ,setToken,userData} = useContext(AppContext)
  const logout = () =>{
    setToken(false)
    localStorage.removeItem("token")
    toast.success("Logged out successfully!");
  }

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      {/* Logo */}
      <img className="w-20 cursor-pointer" src={logo} alt="Logo" onClick={() => { navigate('/') }} />

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary"
          }
        >
          <li>HOME</li>
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary"
          }
        >
          <li>ALL DOCTORS</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary"
          }
        >
          <li>ABOUT</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary"
          }
        >
          <li>CONTACT</li>
        </NavLink>
      </ul>

      {/* User Profile or Login Button */}
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div
            className="flex items-center gap-2 cursor-pointer relative group"
            onClick={() => setDropShowMenu(!dropshowMenu)}
          >
            <img className="w-8 rounded-full" src={userData.image} alt="Profile" />
            <img className="w-2.5" src={dropdown_icon} alt="Dropdown" />

            {/* Dropdown Menu */}
            {dropshowMenu && (
              <div className="absolute right-0 mt-40 bg-white shadow-md rounded-lg p-2 w-44">
                <ul>
                  <li
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer hover:font-bold "
                    onClick={() => navigate("/my-profile")}
                  >
                    My Profile
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer hover:font-bold"
                    onClick={() => navigate("/myappointments")}
                  >
                    My Appointments
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-red-600 hover:font-bold"
                    onClick={() => {
                      logout(); // Mock logout
                      navigate("/");
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="sm:bg-cyan-800 sm:text-white sm:px-8 sm:py-3 sm:rounded-full sm:font-light bg-cyan-800 text-white px-4 py-2 rounded-full font-light  md:block"
          >
            Create Account
          </button>
        )}
        <img onClick={() => setShowMenu(true)} className="w-6 md:hidden" src={menu_icon} alt="Menu Icon" />

        <div className={`${showMenu ? 'fixed w-2/3' : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-none`}>
          <div className="flex items-center justify-between px-5 py-6 bg-[#00B1AF]">
            <img className="w-auto h-24" src={logo_mob} alt="Logo"/>
            <img className="w-7 transition-colors" onClick={() => setShowMenu(false)} src={cross_icon} alt="Close Menu" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary border-primary " : "hover:text-primary"
              }
              onClick={() => setShowMenu(false)}
            >
              <li>HOME</li>
            </NavLink>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                isActive ? "text-primary  border-primary " : "hover:text-primary"
              }
              onClick={() => setShowMenu(false)}
            >
              <li>ALL DOCTORS</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primary  border-primary " : "hover:text-primary"
              }
              onClick={() => setShowMenu(false)}
            >
              <li>ABOUT</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-primary  border-primary " : "hover:text-primary"
              }
              onClick={() => setShowMenu(false)}
            >
              <li>CONTACT</li>
            </NavLink>
          </ul>
          <p className="flex items-center justify-center pt-56">doctorcare&copy;2024</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
