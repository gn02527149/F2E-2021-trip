// import React, { useEffect, useState } from "react";
// import { useHistory, useLocation, useParams } from "react-router";
// import { Link } from "react-router-dom";
// import qs from "querystring";

// import SearchIcon from "@mui/icons-material/Search";
// import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import defaultCardPicture from "../../assets/image/default-card-picture.png";

// import { CITY_OPTIONS } from "../../constants/city";
// import requestAPI, { requesScenicSpot } from "../../controller/apiManager";
// import { Slider } from "../../Component/Common/Slider";

// import "./ViewDetail.scss";
// import { Breadcrumb } from "../../Component/Common/Breadcrumb";

// const ViewDetail = () => {
//   const { searchKind = "scenic-spot", id } = useParams();
//   const history = useHistory();
//   const loc = useLocation();
//   const [viewDetail, setViewDetail] = useState(false);
//   const [recommendList, setRecommendList] = useState([]);
//   const [otherList, setOtherList] = useState([]);

//   useEffect(async () => {
//     if (searchKind === "scenic-spot") {
//       /* 取得該景點資訊 */
//       const [data] = await requesScenicSpot("", {
//         $filter: `ID eq '${id}'`,
//         $format: "JSON",
//       });
//       data.enCity = Object.keys(CITY_OPTIONS).filter(
//         (cityKey) => CITY_OPTIONS[cityKey] === data.City
//       );
//       data.Picture.PictureUrl1 = data.Picture.PictureUrl1 || defaultCardPicture;
//       data.classLists = [data.Class1, data.Class2, data.Class3];
//       data.City = data.City || data.Address.substr(0, 3);
//       setViewDetail(data);

//       /* 取得該景點周遭資訊 */
//       const nearby = await requesScenicSpot("", {
//         $spatialFilter: `nearby(${data.Position.PositionLat},${data.Position.PositionLon},5000)`,
//         $filter: "Picture/PictureUrl1 ne null",
//         $format: "JSON",
//         $top: 4,
//       });
//       setRecommendList(nearby);

//       /* 取得該縣市其他景點資訊 */
//       const other = await requesScenicSpot(data.enCity, {
//         $filter: "Picture/PictureUrl1 ne null",
//         $orderby: "ID desc",
//         $format: "JSON",
//         $skip: Math.floor(Math.random() * (100 - 4 + 1) + 4),
//         $top: 4,
//       });
//       setOtherList(other);
//     }
//   }, [loc]);

//   const ClassTag = ({ value }) => <span className="class-tag"># {value}</span>;
//   const DetailInfoRow = ({ title, description }) =>
//     description ? (
//       <div className="row">
//         <span className="info-title">{title}：</span>
//         <span className="info-description">{description}</span>
//       </div>
//     ) : null;

//   const DetailInfo = ({ data }) => (
//     <div className="detail-info">
//       <DetailInfoRow title="開放時間" description={data.OpenTime} />
//       <DetailInfoRow title="服務電話" description={data.Phone} />
//       <DetailInfoRow
//         title="景點地址"
//         description={
//           data.Address ? (
//             <a
//               target="_blank"
//               href={`https://www.google.com.tw/maps/@${data.Position.PositionLat},${data.Position.PositionLon}z`}
//             >
//               {data.Address}
//             </a>
//           ) : null
//         }
//       />
//       <DetailInfoRow
//         title="官方網站"
//         description={
//           data.WebsiteUrl ? (
//             <a target="_blank" href={data.WebsiteUrl}>
//               {data.WebsiteUrl}
//             </a>
//           ) : null
//         }
//       />
//       <DetailInfoRow title="票價資訊" description={data.TicketInfo} />
//       <DetailInfoRow title="注意事項" description={data.Remarks} />
//     </div>
//   );

//   return (
//     <>
//       <div className="search-result">
//         <div className="inner-container">
//           <Breadcrumb data={viewDetail} />
//           <Slider sliderData={!viewDetail || [viewDetail]} />
//           <div className="info-container">
//             <p className="title">{viewDetail.Name}</p>
//             <div className="class-tag-container">
//               {viewDetail &&
//                 viewDetail.classLists.map((item) =>
//                   item ? <ClassTag key={item} value={item} /> : null
//                 )}
//             </div>
//             <p className="info-title">景點介紹</p>
//             <p className="info-description">{viewDetail.DescriptionDetail}</p>
//             <div className="detail-container">
//               <DetailInfo data={viewDetail} />
//               <div className="detail-direction">
//                 <div className="map">
//                   <iframe
//                     width="100%"
//                     height="250"
//                     loading="lazy"
//                     src={`https://maps.google.com/maps?q=${viewDetail.Name}&hl=zh-TW&z=16&output=embed`}
//                     data-v-7c9f8033=""
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {recommendList.length > 0 && (
//             <div className="recommend-container">
//               <p className="title">
//                 <span>附近景點</span>
//               </p>
//               <div className="card-container">
//                 {recommendList.map((data) => (
//                   <div
//                     className="card"
//                     key={data.ID}
//                     onClick={() => history.push(`/scenic-spot/view/${data.ID}`)}
//                   >
//                     <img src={data.Picture.PictureUrl1 || defaultCardPicture} />
//                     <p className="title">{data.Name}</p>
//                     <div className="city-info">
//                       <LocationOnOutlinedIcon className="icon" />
//                       <span>{data.Address || data.City}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//           {otherList.length > 0 && (
//             <div className="recommend-container">
//               <p className="title">
//                 <span>還有這些不能錯過的景點</span>
//                 <span
//                   className="more-text"
//                   onClick={() =>
//                     history.push(
//                       `/senic-spot/search-result?searchCity=${ViewDetail.enCity}`
//                     )
//                   }
//                 >
//                   更多{viewDetail.City}景點
//                   <ChevronRightOutlinedIcon className="icon" />
//                 </span>
//               </p>
//               <div className="card-container">
//                 {otherList.map((data) => (
//                   <div
//                     className="card"
//                     key={data.ID}
//                     onClick={() => history.push(`/scenic-spot/view/${data.ID}`)}
//                   >
//                     <img src={data.Picture.PictureUrl1 || defaultCardPicture} />
//                     <p className="title">{data.Name}</p>
//                     <div className="city-info">
//                       <LocationOnOutlinedIcon className="icon" />
//                       <span>{data.Address || data.City}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ViewDetail;
