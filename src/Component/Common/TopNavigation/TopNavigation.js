// import React, { useCallback, useState } from "react";
import React from "react";
// import { useHistory } from 'react-router-dom';


import "./TopNavigation.scss";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  // const history = useHistory();
  // const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <div id="top-navigation">
      <div className="inner-container">
        <div className="logoBox">
          <div className="logo"></div>
          <p>Travel Taiwan</p>
        </div>
        <ul>
          <Link className="select" to="/">首頁</Link>
          <Link className="not-allowed" to={`/:searchKind/search-result`}>
            景點導覽
          </Link>
          <Link className="not-allowed" to="/">
            觀光活動
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TopNavigation;
