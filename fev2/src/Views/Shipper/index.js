import React, { Component } from 'react'
import Button from '@mui/material/Button';
import { Link, NavLink, Routes } from 'react-router-dom';
import { KeyNavigate } from '../../helper/KeyNavigate';
import { removeToken, getAccessTokenFromLocalStorage } from '../../helper/accessToken';
import jwt from 'jwt-decode'
import { GetStaffById } from '../../services/Staff';

export default class Shipper extends Component {
    
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

    Logout(){
        removeToken()
    }

    render() {
        
        return (
            
            <div>
                <div className="top-bar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <i className="fa fa-users-cog"></i> Trang đặt hàng
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
                                        to={KeyNavigate.Shipper.concat(KeyNavigate.OrderShipper)}
                                        className="nav-link"
                                        id="address-nav"
                                        data-toggle="pill"
                                        href="#nhacungcap"
                                        role="tab"
                                    ><i className="fa fa-shopping-bag"></i>Đơn hàng</Link>
                                    <Link
                                        to={KeyNavigate.Shipper.concat(KeyNavigate.ShipperDetail)}
                                        className="nav-link"
                                        id="payment-nav"
                                        data-toggle="pill"
                                        href="#catalog"
                                        role="tab"
                                    ><i className="fa fa-user-tie"></i>Chi tiết tài khoản</Link>
                                    
                                    <NavLink className="nav-link" to={KeyNavigate.LoginShipper} onClick={() => this.Logout()}
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
