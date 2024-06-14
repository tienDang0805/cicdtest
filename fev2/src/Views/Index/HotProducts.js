import React, { Component } from "react";
import { GetListHotProducts, GetProductById } from "../../services/Product";
import CustomeSlider from "../../components/Slider";
import CustomeSlider2 from "../../components/Slider2";

const HotProducts = (props) => {
  

  
  
    return (
      <div className="featured-product product">
        <div className="container-fluid">
          <div className="section-header">
            <h1>HÀNG HOT</h1>
            {(props.data !== []) ? <CustomeSlider data={props.data} /> : []}
          </div>
          <div id="non-noi-bat"></div>
        </div>
      </div>
    )
  
}
export default HotProducts;
