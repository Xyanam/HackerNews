import React from "react";

const Loader = () => {
  return (
    <div className="wrapper">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <span className="loading">LOADING</span>
    </div>
  );
};

export default Loader;
