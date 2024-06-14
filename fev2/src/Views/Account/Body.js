import React, { Component } from 'react'
import { Link, NavLink, Routes, Route} from 'react-router-dom'
import { KeyNavigate } from '../../helper/KeyNavigate'
import CustomerDetail from '../Customer-Detail'
import OrderCustomer from '../Order-customer'
export default class Body extends Component {
    
    render() {
        return (
            <div>
                
                <div className="my-account">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2">
                                <div
                                    className="nav flex-column nav-pills"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <Link
                                        to={KeyNavigate.Account.concat(KeyNavigate.OrderCustomer)}
                                        className="nav-link"
                                        id="address-nav"
                                        data-toggle="pill"
                                        href="#nhacungcap"
                                        role="tab"
                                    ><i className="fa fa-shopping-bag"></i>Đơn hàng</Link>
                                    <Link
                                        to={KeyNavigate.Account.concat(KeyNavigate.CustomerDetail)}
                                        className="nav-link"
                                        id="payment-nav"
                                        data-toggle="pill"
                                        href="#catalog"
                                        role="tab"
                                    ><i className="fa fa-user-tie"></i>Thông tin tài khoản</Link>
                                    

                                    

                                    <NavLink className="nav-link" to={KeyNavigate.LoginAdmin} onClick={ () => this.removeTokenAdmin() }
                                    ><i className="fa fa-sign-out-alt"></i>Đăng Xuất</NavLink>
                                </div>
                            </div>

                            <div className="col-md-10">
                                <Routes>
                                    <Route path={KeyNavigate.OrderCustomer} element={<OrderCustomer/>}  />
                                    <Route path={KeyNavigate.CustomerDetail} element={<CustomerDetail/>}  />
                                </Routes>
                            </div>

                        </div>
                    </div>
                </div>

               

            </div>
        )
    }
}
