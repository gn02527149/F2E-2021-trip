import React from "react";
import { Link } from "react-router-dom";

import "./Breadcrumb.scss";

export const Separator = () => <span className="separator">/</span>;

const Breadcrumb = ({ data }) => {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/F2E-2021-trip">首頁</Link>
        <Separator />
        <Link to="/F2E-2021-trip/scenic-spot/search-result">探索景點</Link>
        {data.City && (
          <>
            <Separator />
            <Link to={`/F2E-2021-trip/scenic-spot/search-result?searchCity=${data.enCity}`}>
              {data.City}
            </Link>
            <Separator />
          </>
        )}
        {data.Name}
      </div>
    </>
  );
};

export default Breadcrumb;
