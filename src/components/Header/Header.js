import React from "react";
import "./Header.css";
// import PersonIcon from "@material-ui/icons/Person";
// import ForumIcon from "@material-ui/icons/Forum";
import { Forum as ForumIcon, Person as PersonIcon } from "@material-ui/icons";

import IconButton from "@material-ui/core/IconButton";

export default function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://www.dev.cultureweb.dev/logo192.png"
        alt="logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}
