import React from "react"
import MenuIcon from '@mui/icons-material/Menu'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillVideoCamera } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import './Header.css'


function Header(){
    return (
      <div className="header">
        <div className="header__left">
          <AiOutlineMenu />
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/986/704/original/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
            alt=""
            className="header__logo"
          />
        </div>
        <div className="header__center">
          <input type="text" />
          <AiOutlineSearch className="header__searchbutton" />
        </div>
        <div className="header__right">
          <AiFillVideoCamera className="header__icon" />
          <IoIosNotifications classNmae="header__icon" />
          <BiUserCircle className="header__icon" />
        </div>
      </div>
    );
}

export default Header