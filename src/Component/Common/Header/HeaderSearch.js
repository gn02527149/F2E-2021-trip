import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qs from "querystring";

// import RoomIcon from "@mui/icons-material/Room";
// import SearchIcon from "@mui/icons-material/Search";
import searchIcon from "../../../assets/images/icons/bx_bx-search-alt.png";

import requestAPI, { requesScenicSpot } from "../../../controller/apiManager";

import "./HeaderSearch.scss";

const HeaderSearch = () => {
  const history = useHistory();
  const [searchKind, setSearchKind] = useState("探索景點");
  const [searchCity, setSearchCity] = useState();

  useEffect(async () => {
    // const data = await requesScenicSpot("Taipei", {
    //   $top: 8,
    //   $filter: "contains(Address, '中正區')",
    // });
    // console.log(data);
  }, []);

  const handleSearch = () => {
    history.push(
      `/scenic-spot/search-result?${qs.stringify({
        searchKind,
        searchCity,
      })}`
    );
  };

  return (
    <div className="header-search">
      <div className="inner-container">
        <div className="sloganBox">
          <p className="slogan">
            Welcome to Travel Taiwan
          </p>
        </div>
        <div className="searchBox">
          <select
            className="search-kind"
            value={searchKind}
            onChange={(e) => setSearchKind(e.target.value)}
          >
            <option>類別</option>
            <option>所有類別</option>
            <option>自然風景</option>
            <option>體育健身</option>
            <option>遊憩類</option>
            <option>古蹟類</option>
          </select>
          <select
            className="search-city"
            value={searchCity}
            onChange={(e) => setSearchKind(e.target.value)}
          >
            <option>所有縣市</option>
            <option>台 北 市</option>
            <option>新 北 市</option>
            <option>桃 園 市</option>
            <option>台 中 市</option>
            <option>台 南 市</option>
            <option>高 雄 市</option>
            <option>基 隆 市</option>
            <option>新 竹 市</option>
            <option>新 竹 縣</option>
            <option>苗 栗 縣</option>
            <option>彰 化 縣</option>
            <option>南 投 縣</option>
            <option>雲 林 縣</option>
            <option>嘉 義 縣</option>
            <option>嘉 義 市</option>
            <option>屏 東 縣</option>
            <option>宜 蘭 縣</option>
            <option>花 蓮 縣</option>
            <option>金 門 縣</option>
            <option>澎 湖 縣</option>
            <option>連 江 縣</option>
          </select>
          <div className="search-button" onClick={handleSearch}>
            <img src={searchIcon} alt="search"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
