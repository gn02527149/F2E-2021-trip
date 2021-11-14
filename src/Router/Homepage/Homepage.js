import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import defaultCardPicture from "../../assets/images/view/unsplash_5Lw1U5BIumE.png";

import { HeaderSearch } from "../../Component/Common/Header";
import { Slider } from "../../Component/Common/Slider";
import requestAPI, { requesScenicSpot } from "../../controller/apiManager";

import "./Homepage.scss";

const Homepage = () => {
  const history = useHistory();
  const [sliderData, setSliderData] = useState(false);
  const [hotList, setHotList] = useState([]);
  console.log(hotList)

  useEffect(async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          // console.log(coords, coords.longitude, coords.latitude);
          const nearby = await requesScenicSpot("", {
            $top: 6,
            $select: "ID,City,Name,Picture,Position",
            $spatialFilter: `nearby(${coords.latitude},${coords.longitude},5000)`,
            $filter: "Picture/PictureUrl1 ne null",
          });
          console.log("nearby me", nearby);
          nearby.City = nearby.City || nearby.Address?.substr(0, 3);
          setSliderData(nearby);
        },
        async () => {
          setSliderData(false);
        }
      );
    }

    /* 取得該縣市其他景點資訊 */
    const hotList = await requesScenicSpot("", {
      $filter: "Picture/PictureUrl1 ne null",
      $orderby: "Keyword desc",
      $format: "JSON",
      $skip: Math.floor(Math.random() * (100 - 4 + 1) + 4),
      $top: 4,
    });
    setHotList(hotList);
  }, []);

  return (
    <>
      <HeaderSearch />
      {sliderData && <Slider sliderData={sliderData} needRedirect />}
      <div className="homepage-container inner-container">
        {hotList.length > 0 && (
          <div className="hot-container">
            <p className="title hot">
              <span>熱門景點</span>
              <p>台灣的各個美景，都美不勝收。<br/> 等你一同來發現這座寶島的奧妙！</p>
            </p>
            <div className="card-container">
              {hotList.map((data) => (
                <div
                  className="card"
                  key={data.ID}
                  // onClick={() => history.push(`/scenic-spot/view/${data.ID}`)}
                >
                  <img src={data.Picture.PictureUrl1 || defaultCardPicture} />
                  <p className="title">{data.Name}</p>
                  <div className="city-info">
                    {/* <LocationOnOutlinedIcon className="icon" /> */}
                    <span>{data.Address || data.City}</span>
                  </div>
                  <div className="open-time">
                    {/* <LocationOnOutlinedIcon className="icon" /> */}
                    <span>{data.OpenTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Homepage;
