import React from "react";
import Photo from "../../photo/testbg1.jpg";
//! image is currently a background in css for this div

export default function ShowPageHeader(props) {
  return (
    <div id="mast" className="ui masthead center aligned">
      {/* <img id="bg1" className="ui fluid image" src={Photo}></img> */}
      <div className="ui text container">
        <h1 className="main-title">brewery project</h1>
        <h4 className="main-title2">discover your next brewventure</h4>
      </div>
    </div>
  );
}
