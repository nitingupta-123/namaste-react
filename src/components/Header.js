import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center border-b border-gray-300 shadow-md px-4 py-2">
      <div className="logo-container">
        <img className="w-48 h-16 object-contain" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex items-center list-none text-xl gap-4">
          <li className="px-2 py-2">Online Status: {onlineStatus===true ? "✅" : "❌"}</li>
          <li className="px-2 py-2 hover:text-blue-600 transition-colors"><Link to="/">Home</Link></li>
          <li className="px-2 py-2 hover:text-blue-600 transition-colors"><Link to="/about">About Us</Link></li>
          <li className="px-2 py-2 hover:text-blue-600 transition-colors"><Link to="/contact">Contact Us</Link></li>
          <li className="px-2 py-2 hover:text-blue-600 transition-colors cursor-pointer">Cart</li>
          <li className="px-2 py-2 hover:text-blue-600 transition-colors"><Link to="/grocery">Grocery</Link></li>
          <button
            className="px-5 py-2 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
