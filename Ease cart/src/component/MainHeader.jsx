import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.webp";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

function MainHeader() {
  const [inputValue, setInputValue] = useState("");

  const onChangeSeacrhBox = (e) => {
    setInputValue(e.target.value);
  };

  const [cart, setCart] = useState([]);
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="h-20 bg-[#212529] w-full  flex justify-around items-center text-white ">
      <div className="">
        <Link to="/">
          <img className="w-16 h-14 rounded-full " src={logo} alt="Logo " />
        </Link>
      </div>
      <div className="mx-2 relative">
        <input
          type="text"
          onChange={onChangeSeacrhBox}
          className=" inputBox  w-72 sm:w-[500px] h-10 rounded-lg capitalize  placeholder:font-serif placeholder:text-lg placeholder:text-gray-400 outline-none text-black p-2"
          placeholder="Search"
        />

        <div className="absolute top-[11px] cursor-pointer text-lg right-2 text-red-500 ">
          <FaSearch></FaSearch>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="relative">
          <button
            onClick={() => setisOpen(!isOpen)}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg flex items-center"
          >
            <FaShoppingCart fontSize="25px" />
            <span className="ml-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs">
              {cart.length}
            </span>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
              {cart.length === 0 ? (
                <span className="block p-4 text-red-400 ">Cart is Empty!</span>
              ) : (
                // Render cart items here
                <ul>
                  {cart.map((item, index) => (
                    <li key={index} className="p-2 border-b last:border-none">
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        <div className=" flex gap-2 items-center justify-center text-center  text-red-100 mr-5">
          <button className="font-serif text-center h-10 w-14  rounded-lg hover:bg-blue-600 bg-blue-500">
            
            Login
          </button>

          <button className="font-serif hover:bg-red-600 text-center h-10 w-14  rounded-lg bg-red-500">
            
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;

//  <div className="relative">
//       <button
//         onClick={() => setisOpen(!isOpen)}
//         className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg flex items-center"
//       >
//         <FaShoppingCart fontSize="25px" />
//         <span className="ml-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs">{cart.length}</span>
//       </button>
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
//           {cart.length === 0 ? (
//             <span className="block p-4 text-red-400 ">Cart is Empty!</span>
//           ) : (
//             // Render cart items here
//             <ul>
//               {cart.map((item, index) => (
//                 <li key={index} className="p-2 border-b last:border-none">
//                   {item.name}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}
//     </div>
