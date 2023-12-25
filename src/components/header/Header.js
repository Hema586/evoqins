import React, { useEffect, useRef } from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";
import search from "../../assets/search-icon.svg";
import notificationIcon from "../../assets/notification-icon.svg";
import cartIcon from "../../assets/cart-icon.svg";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Header = (props) => {
  const headerLogoRef = useRef();
  useEffect(() => {
    if (headerLogoRef) {
      props.setLeftProp(headerLogoRef.current.offsetLeft);
    }
  }, [headerLogoRef]);

  return (
    <div className="main-header">
      <img ref={headerLogoRef} src={logo} alt="logo" />
      <div className="search-bar">
        <input
          className="input-search"
          type="text"
          placeholder="Search for domains"
        />
        <button type="submit">
          <img src={search} alt="search-btn" />
        </button>
      </div>
      <div className="notification">
        <img
          className="notification-icon"
          src={notificationIcon}
          alt="notifications"
        />
        <div className="dot"></div>
      </div>
      <div className="profile-details">
        <Avatar
          className="avatar-img"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
        Maria
        <span className="glyphicon glyphicon-menu-down"></span>
      </div>
      <img className="cart-icon" src={cartIcon} alt="cart" />
    </div>
  );
};

export default Header;
