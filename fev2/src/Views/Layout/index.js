import React, { Component } from 'react'
import Button from '@mui/material/Button';
import { Link, NavLink, Routes } from 'react-router-dom';
import { KeyNavigate } from '../../helper/KeyNavigate';
import { removeToken, getAccessTokenFromLocalStorage } from '../../helper/accessToken';
import { GetCustomerById } from "../../services/Customer";
import jwt from 'jwt-decode'
import { GetStaffById } from '../../services/Staff';


export default class LayoutAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          token :'',
          name:'',
        };
      }

    componentDidMount(){
        let token = getAccessTokenFromLocalStorage()
        console.log(jwt(token))
        if(token){

        this.setState({token:token})
        GetStaffById(jwt(token).userId)
        .then((res) => {
            console.log(res)
            this.setState({ name: res.data.TEN });
        })
        .catch((err) => console.log(err));  
        }
    }

    removeTokenAdmin = () => {
        removeToken()
    }

    render() {
        
        return (
            
            <div>
                <div className="top-bar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <i className="fa fa-users-cog"></i> Trang quản trị
                            </div>
                            <div className="col-sm-6">
                                <i className="">Xin chào {this.state.name}</i>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Top bar End --> */}

                {/* <!-- Nav Bar Start --> */}
                <div className="nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                            <a href="#" className="navbar-brand">MENU</a>
                            <button
                                type="button"
                                className="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div
                                className="collapse navbar-collapse justify-content-between"
                                id="navbarCollapse">
                                <div className="navbar-nav mr-auto">

                                    <div className="navbar-nav ml-auto">
                                        <div className="nav-item dropdown">
                                            <div className="dropdown-menu">
                                                <a href="/Sign-in-admin" className="dropdown-item">Đăng xuất</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* <!-- Nav Bar End --> */}



                {/* <div className="breadcrumb-wrap">
                    <div className="container-fluid">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item active">Quản trị</li>
                            <li className="breadcrumb-item active">Admin </li>
                        </ul>
                    </div>
                </div> */}

                {/* <!-- My Account Start --> */}
                {/* <!-- My Account Start --> */}
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
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Provider)}
                                        className="nav-link"
                                        id="address-nav"
                                        data-toggle="pill"
                                        href="#nhacungcap"
                                        role="tab"
                                    ><i className="fa fa-user-tie"></i>Nhà cung cấp</Link>
                                    {/* <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.DDH)}
                                        className="nav-link"
                                        id="address-nav"
                                        data-toggle="pill"
                                        href="#nhacungcap"
                                        role="tab"
                                    ><i className="fa fa-user-tie"></i>DDH</Link> */}
                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.ProductType)}
                                        className="nav-link"
                                        id="payment-nav"
                                        data-toggle="pill"
                                        href="#catalog"
                                        role="tab"
                                    ><i className="fa fa-wine-bottle"></i>Loại sản phẩm</Link>
                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Brand)}
                                        className="nav-link"
                                        id="payment-nav"
                                        data-toggle="pill"
                                        href="#thuong-hieu"
                                        role="tab"
                                    ><i className="fa fa-wine-glass"></i>Thương hiệu</Link>

                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Product)}
                                        className="nav-link"
                                        id="payment-nav"
                                        data-toggle="pill"
                                        href="#product"
                                        role="tab"
                                    ><i className="fa fa-wine-glass-alt"></i>Sản phẩm</Link>


                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Bill)}
                                        className="nav-link"
                                        id="orders-nav"
                                        data-toggle="pill"
                                        href="#orders-tab"
                                        role="tab"
                                    ><i className="fa fa-shopping-bag"></i>Đơn Hàng</Link>


                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Promo)}
                                        className="nav-link"
                                        id="orders-nav"
                                        data-toggle="pill"
                                        href="#khuyen-mai"
                                        role="tab"
                                    ><i className="fa fa-percentage"></i>Khuyến mãi</Link>
                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.PromoProduct)}
                                        className="nav-link"
                                        id="orders-nav"
                                        data-toggle="pill"
                                        href="#sp-khuyen-mai"
                                        role="tab"
                                    ><i className="fa fa-percentage"></i>Sản phẩm KM</Link>

                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Revenue)}
                                        className="nav-link"
                                        id="orders-nav"
                                        data-toggle="pill"
                                        href="#thong-ke"
                                        role="tab"
                                    ><i className="fa fa-chart-bar"></i>Thống kê</Link>

                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Customer)}
                                        className="nav-link"
                                        id="account-nav"
                                        data-toggle="pill"
                                        href="#khach-hang"
                                        role="tab"
                                    ><i className="fa fa-user"></i>Khách hàng</Link>

                                    <Link
                                        to={KeyNavigate.Layout.concat(KeyNavigate.Staff)}
                                        className="nav-link"
                                        id="account-nav"
                                        data-toggle="pill"
                                        href="#nhan-vien"
                                        role="tab"
                                    ><i className="fa fa-user"></i>Nhân viên</Link>

                                    {/* <a
                                        className="nav-link"
                                        id="account-nav"
                                        href="http://localhost:3000/quan-tri/import_product"
                                    ><i className="fas fa-file-import"></i>Nhập hàng</a>
                                    <a
                                        className="nav-link"
                                        id="account-nav"
                                        data-toggle="pill"
                                        href="#report-pdf"
                                        role="tab"
                                    ><i className="fas fa-file-pdf"></i>Report</a> */}

                                    <NavLink className="nav-link" to={KeyNavigate.LoginAdmin} onClick={ () => this.removeTokenAdmin() }
                                    ><i className="fa fa-sign-out-alt"></i>Đăng Xuất</NavLink>
                                </div>
                            </div>

                            <div className="col-md-10">
                                <Routes>
                                    {this.props.children}
                                </Routes>
                            </div>

                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* <!-- Back to Top --> */}
                <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>


            </div>
        )
    }
}
