import React, { Component } from 'react'
import { loginUser } from '../../services/Customer';
import { addAccessTokenToLocalStorage, addUserProfileToLS, defineUser } from '../../helper/accessToken';
import { getMe } from '../../services/Getme';

import jwt from 'jwt-decode' 


export default class LoginAdmin extends Component {
    //const navigate = useNavigate();
    constructor(props) {
        super(props);
        this.state = {
            listStaffs: [],
            username: '',
            password: '',
            error: ''
        };
    }

    componentDidMount() {
        //console.log('sadasd');
        // async function fetchListStaffs() {
        //     const staffs = (await GetListStaff()).data

        //     this.setListStaffs(staffs)
        //     console.log(this.state.listStaffs)
        // };

        // fetchListStaffs()
    }




    handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            USERNAME: this.state.username,
            PASSWORD: this.state.password,
        }
        console.log('payload', payload);
        
        await loginUser(payload).then(response => {
            if((response.status === 201 || response.status === 200) && response.data.role === 'staff') {
              
                addAccessTokenToLocalStorage(response.data.accessToken)
                
                getMe(response.data.accessToken).then(res => {
                    defineUser(res.data)
                })
              window.location.href='/Admin'
            //   <Link to={KeyNavigate.Layout}></Link>

            }
            else{
                this.setState({error: 'Sai tên đăng nhập hoặc mật khẩu'})
            }
          },reason => {
            this.setState({error: 'Sai tên đăng nhập hoặc mật khẩu'})
          })
        
    }




    //demo cach goi api
    // useEffect(() => {
    //     async function fetchListStaffs() {
    //         const staffs = (await GetListStaffs()).data

    //         setListStaffs(staffs)
    //     }

    //     fetchListStaffs()
    // }, [listStaffs])

    render() {
        return (

            <div>
                <div className="top-bar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <i className="fa fa-envelope"></i>tamtvh96@gmail.com
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-phone-alt"></i>+963548171
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
                                id="navbarCollapse"
                            >
                                <div className="navbar-nav mr-auto">
                                    <a href="/" className="nav-item nav-link">Trang Chủ</a>
                                    <div className="navbar-nav ml-auto">
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* <!-- Nav Bar End --> */}



                {/* <!-- Breadcrumb Start --> */}
                <div className="breadcrumb-wrap">
                    <div className="container-fluid">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                            <li className="breadcrumb-item active">Đăng nhập trang quản trị</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Breadcrumb End --> */}

                {/* <!-- Login Start --> */}
                <div className="login">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="login-form">
                                    <form  >
                                        <div className="row">
                                            <legend className="text-center">Đăng nhập Admin</legend>
                                            <div className="col-md-6">
                                                <label for="username">Username</label>
                                                <input
                                                    id="username"
                                                    name="username"
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Username"
                                                    onChange={(e) => this.setState({ username: e.target.value})}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="password">Mật khẩu</label>
                                                <input
                                                    id="password"
                                                    name="password"
                                                    className="form-control"
                                                    type="password"
                                                    placeholder="Mật khẩu"
                                                    onChange={(e) => this.setState({ password: e.target.value})}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <div className="custom-control custom-checkbox">
                                                    {/* <!-- <input type="checkbox" className="custom-control-input" id="newaccount">
                                            <label className="custom-control-label" for="newaccount">Lưu đăng nhập</label> --> */}
                                                    <a href="">Quên mật khẩu?</a>
                                                </div>
                                            </div>
                                            <div className="col-md-12 text-center">
                                                <button  onClick={(e) => this.handleSubmit(e)}>
                                                {/* <Link> to={KeyNavigate.Layout}</Link> */}
                                                Đăng nhập
                                                </button>
                                            {this.state.error ? <p style={{ color: "red" }}>{this.state.error}</p> : null}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Login End --> */}

                {/* <!-- Back to Top --> */}
                <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>

            </div>
        )
    }
}
