import React, { Component } from "react";
import HotProducts from "./HotProducts";
import TopPromo from "./TopPromo";
import { GetListHotProducts, GetProductById } from "../../services/Product";


export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotproducts: [],
      
    };
  }

  componentDidMount() {
    //get arr hot prod
    let listTemp = []
    GetListHotProducts()
      .then((res) => {
        this.setState({hotproducts: res.data})
      })
      .catch((err) => console.log(err));
    // get prod by arr
    
  }
  render() {
    return (
      <main id="main">
        
        {/* <!-- Brand Start --> */}
        <div className="brand">
          
          
        </div>
        {/* <!-- Brand End --> */}
        {/* <!-- Category Start--> */}
        <div className="category">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="category-item ch-400">
                  <img src="img/banner8.jpg" />
                  <a className="category-name" href="">
                    <p>Nothing is impossible</p>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="category-item ch-250">
                  <img src="img/banner3.jpg" />
                  <a className="category-name" href="">
                    <p>Ride or die</p>
                  </a>
                </div>
                <div className="category-item ch-150">
                  <img src="img/banner9.jpg" />
                  <a className="category-name" href="">
                    <p>I love scene beautfiull</p>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="category-item ch-150">
                  <img src="img/banner10.jpg" />
                  <a className="category-name" href="">
                    <p>My brothers and me</p>
                  </a>
                </div>
                <div className="category-item ch-250">
                  <img src="img/banner5.jpg" />
                  <a className="category-name" href="">
                    <p>
                      He said: "One day, you'll leave this world behind so live
                      a life you will remember"
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="category-item ch-400">
                  <img src="img/banner11.jpg" />
                  <a className="category-name" href="">
                    <p>
                      “A great love is not one who loves many, but one who loves
                      one woman for life”
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-6 feature-col">
                <div className="feature-content">
                  <i className="fab fa-cc-mastercard"></i>
                  <h2>Bảo Mật Thanh Toán</h2>
                  <p>Website cam kết bảo mật thông tin khách hàng</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 feature-col">
                <div className="feature-content">
                  <i className="fa fa-truck"></i>
                  <h2>Vận Chuyển Toàn Quốc</h2>
                  <p>Freeship toàn quốc, có hỗ trợ SHIP CODE cho khách hàng</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 feature-col">
                <div className="feature-content">
                  <i className="fa fa-sync-alt"></i>
                  <h2>90 Ngày Đổi Trả</h2>
                  <p>
                    Cho phép khách hàng được đổi trả sản phẩm trong vòng 90 ngày
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 feature-col">
                <div className="feature-content">
                  <i className="fa fa-comments"></i>
                  <h2>Tư Vấn 24/7</h2>
                  <p>
                    Luôn có nhân viên tư vấn online 24/24. Hỗ trợ chăm sóc khách
                    hàng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Feature End--> */}

        

        
      <HotProducts data={this.state.hotproducts}/> 
       

      <TopPromo/>

      </main>
    );
  }
}
