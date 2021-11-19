import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import defaultCardPicture from "../../assets/images/view/unsplash_5Lw1U5BIumE.png";
import LocationOnOutlinedIcon from "../../assets/images/icons/Vector.png";
import TimeIcon from "../../assets/images/icons/bx_bx-time.png";
import yearPhoto from "../../assets/images/other/unsplash_gdTxVSAE5sk.png";
import artPhoto from "../../assets/images/other/unsplash_8fb3UBhNqc8.png";
import galaPhoto from "../../assets/images/other/unsplash_AlSlE8IAjZo.png";
import otherPhoto from "../../assets/images/other/unsplash_Wj1D-qiOseE.png";

import { HeaderSearch } from "../../Component/Common/Header";
import { Slider } from "../../Component/Common/Slider";
import requestAPI, { requesScenicSpot } from "../../controller/apiManager";

import "./Homepage.scss";

const Homepage = () => {
  const history = useHistory();
  const [sliderData, setSliderData] = useState(false);
  const [hotList, setHotList] = useState([]);

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
          // setSliderData(nearby);
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
      $top: 8,
    });
    setHotList(hotList);
  }, []);

  return (
    <>
      <HeaderSearch />
      {sliderData && <Slider sliderData={sliderData} needRedirect />}
      <div className="homepage-container inner-container">
        {hotList.length > 0 && (
          <>
            <div className="container hot-container">
              <div className="title hot">
                <span>熱門景點</span>
                <p>台灣的各個美景，都美不勝收。<br/> 等你一同來發現這座寶島的奧妙！</p>
              </div>
              <div className="card-container">
                {hotList.map((data) => (
                  <div
                    className="card"
                    key={data.ID}
                    // onClick={() => history.push(`/scenic-spot/view/${data.ID}`)}
                  >
                    <div className="picture"><img src={data.Picture.PictureUrl1 || defaultCardPicture} /></div>
                    <p className="title">{data.Name}</p>
                    <div className="city-info">
                      <img className="icon" src={LocationOnOutlinedIcon}/>
                      <span>{data.Address || data.City}</span>
                    </div>
                    <div className="open-time">
                      <img className="icon" src={TimeIcon}/>
                      <span>{data.OpenTime == "Sun 24 hours；Mon 24 hours；Tue 24 hours；Wed 24 hours；Thu 24 hours；Fri 24 hours；Sat 24 hours"?"全日開放":data.OpenTime}</span>
                    </div>
                    <div className="more">
                      了解更多
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="container class-container">
              <div className="title class">
                <span>活動類別</span>
                <p>各種不同的活動內容<br/> 邀請您一銅來共襄盛舉！</p>
              </div>
              <div className="card-container">
                  <div
                    className="card"
                    // onClick={() => history.push(`/scenic-spot/view/${data.ID}`)}
                  >
                    <div className="picture"><img src={yearPhoto} /></div>
                    <p className="title">年度活動</p>
                  </div>
                  <div
                    className="card"
                    // onClick={() => history.push(`/scenic-spot/view/${data.ID}`)}
                  >
                    <div className="picture"><img src={artPhoto} /></div>
                    <p className="title">藝文活動</p>
                  </div>
                  <div
                    className="card"
                    // onClick={() => history.push(`/scenic-spot/view/${data.ID}`)}
                  >
                    <div className="picture"><img src={galaPhoto} /></div>
                    <p className="title">節慶活動</p>
                  </div>
                  <div
                    className="card"
                    // onClick={() => history.push(`/scenic-spot/view/${data.ID}`)}
                  >
                    <div className="picture"><img src={otherPhoto} /></div>
                    <p className="title">其他</p>
                  </div>
              </div>
            </div>
          </>
        )}
              
      </div>
      <div className="footerSlogn">
        <p>“To travel is to live”<br/> – Hans Christian Anderson-</p>
      </div>
    </>
  );
};

export default Homepage;
