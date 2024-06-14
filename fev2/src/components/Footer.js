import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h2>Liên Hệ</h2>
                  <div className="contact-info">
                    <p>
                      <i className="fa fa-map-marker"></i>Thành phố Hồ Chí Minh
                    </p>
                    <p>
                      <i className="fa fa-envelope"></i>tamtvh96@gmail.com
                    </p>
                    <p>
                      <i className="fa fa-phone"></i>+963548171
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h2>Theo Dõi Tôi</h2>
                  <div className="contact-info">
                    <div className="social">
                      <a href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h2>Thông Tin Cửa Hàng</h2>
                  <ul>
                    <li>
                      <a href="#">Giới thiệu</a>
                    </li>
                    <li>
                      <a href="#">Chính sách bảo mật</a>
                    </li>
                    <li>
                      <a href="#">Hình thức vận chuyển</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h2>Thông Tin Mua Hàng</h2>
                  <ul>
                    <li>
                      <a href="#">Chính sách thanh toán</a>
                    </li>
                    <li>
                      <a href="#">Chính sách vận chuyển</a>
                    </li>
                    <li>
                      <a href="#">Chính sách hoàn trả</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row payment align-items-center">
              <div className="col-md-6">
                <div className="payment-method">
                  <h2>Nhận thanh toán bằng:</h2>
                  <img src="img/payment-method.png" alt="Payment Method" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="payment-security">
                  <h2>Chứng chỉ bảo mật:</h2>
                  <img src="img/godaddy.svg" alt="Payment Security" />
                  <img src="img/norton.svg" alt="Payment Security" />
                  <img src="img/ssl.svg" alt="Payment Security" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
      </>
    );
  }
}
