import React, { Component } from "react";
import CartSection from "./CartSection";

export default class Body extends Component {
  render() {
    return (
      <>
        {/* <!-- Breadcrumb Start --> */}
        <div className="breadcrumb-wrap">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Trang chủ</a>
              </li>
              <li className="breadcrumb-item active">Giỏ hàng</li>
            </ul>
          </div>
        </div>
        {/* <!-- Breadcrumb End --> */}

        <CartSection />
      </>
    );
  }
}
