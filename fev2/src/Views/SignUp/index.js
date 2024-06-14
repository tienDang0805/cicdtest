import * as React from 'react';
import { registerCustomer } from '../../services/Customer';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ho: '',
            ten: '',
            username: '',
            email: '',
            phone: '',
            birthday: '',
            sex: '',
            password: '',
            address: '',
            isSubmit: false,
            error: ''
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault()
        this.setState({isSubmit: true})
        console.log(this.state)
        if (this.state.ho.length === 0 ||
            this.state.ten.length === 0 ||
            this.state.username.length === 0 ||
            this.state.email.length === 0 ||
            this.state.phone.length === 0 ||
            this.state.birthday.length === 0 ||
            this.state.sex.length === 0 ||
            this.state.password.length === 0 ||
            this.state.address.length === 0
        ) {
            return
        } else {
            const payload = {
                MAKH: '',
                HO: this.state.ho,
                TEN: this.state.ten,
                GIOITINH: this.state.sex,
                NGAYSINH: this.state.birthday,
                DIACHI: this.state.address,
                SDT: this.state.phone,
                EMAIL: this.state.email,
                USERNAME: this.state.username,
                PASSWORD: this.state.password,
                MANQ: '1'
            }

            await registerCustomer(payload).then(response => {
                if (response.status === 200 || response.status === 201) {
                    window.location.href='/Login'
                } else {
                    this.setState({error: 'Đã có lỗi xảy ra!'})
                }
            })
        }
    }

    handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "ho"){
            this.setState({ho: value});
        }
        if(id === "ten"){
            this.setState({ten: value});
        }
        if(id === "username"){
            this.setState({username: value});
        }
        if(id === "email"){
            this.setState({email: value});
        }
        if(id === "phone"){
            this.setState({phone: value});
        }
        if(id === "birthday"){
            this.setState({birthday: value});
        }
        if(id === "sex"){
            this.setState({sex: value});
        }
        if(id === "password"){
            this.setState({password: value});
        }
        if(id === "address"){
            this.setState({address: value});
        }
    }

    render() {
        return (
            <>
            <div>
                {/* <!-- Top bar Start --> */}
                <div class="top-bar">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                <i class="fa fa-envelope"></i> tamtvh96@gmail.com
                            </div>
                            <div class="col-sm-6">
                                <i class="fa fa-phone-alt"></i> +963548171
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Top bar End --> */}

                {/* <!-- Nav Bar Start --> */}
                <div class="nav">
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                            <a href="#" class="navbar-brand">MENU</a>
                            <button
                                type="button"
                                class="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            
                        </nav>
                    </div>
                </div>
                {/* <!-- Nav Bar End --> */}

                {/* <!-- Breadcrumb Start --> */}
                <div class="breadcrumb-wrap">
                    <div class="container-fluid">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>
                            <li class="breadcrumb-item active">Đăng ký</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Breadcrumb End --> */}

                {/* <!-- Login Start --> */}
                <div class="login">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6 mx-auto">
                                <div class="register-form">
                                    <form >
                                        <div class="row">
                                            <legend class="text-center">ĐĂNG KÝ</legend>
                                            <div class="col-md-6">
                                                <label for="ho">Họ</label>
                                                <input
                                                    id="ho"
                                                    name="ho"
                                                    class="form-control"
                                                    type="text"
                                                    placeholder="Họ"
                                                    onChange={(e) => this.handleInputChange(e)}
                                                />
                                                {(this.state.isSubmit && this.state.ho.length === 0) && (
                                                    <div style={{color: "red"}}>Vui lòng điền Họ!</div>
                                                )}
                                            </div>
                                            <div class="col-md-6">
                                                <label for="ten">Tên</label>
                                                <input
                                                    id="ten"
                                                    name="ten"
                                                    class="form-control"
                                                    type="text"
                                                    placeholder="Tên"
                                                    onChange={(e) => this.handleInputChange(e)}
                                                />
                                                {(this.state.isSubmit && this.state.ten.length === 0) && (
                                                    <div style={{color: "red"}}>Vui lòng điền Tên!</div>
                                                )}
                                            </div>
                                            <div class="col-md-12">
                                                <label for="username">Tên Đăng Nhập</label>
                                                <input
                                                    id="username"
                                                    name="username"
                                                    class="form-control"
                                                    type="text"
                                                    placeholder="Username"
                                                    onChange={(e) => this.handleInputChange(e)}
                                                />
                                                {(this.state.isSubmit && this.state.username.length === 0) && (
                                                    <div style={{color: "red"}}>Vui lòng điền Username!</div>
                                                )}
                                            </div>
                                            <div class="col-md-6">
                                                <label for="email">E-mail</label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    class="form-control"
                                                    type="text"
                                                    placeholder="E-mail"
                                                    onChange={(e) => this.handleInputChange(e)}
                                                />
                                                {(this.state.isSubmit && this.state.email.length === 0) && (
                                                    <div style={{color: "red"}}>Vui lòng điền Email!</div>
                                                )}
                                            </div>
                                            <div class="col-md-6">
                                                <label for="phone">Số Điện Thoại</label>
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    class="form-control"
                                                    type="text"
                                                    placeholder="0123456789"
                                                    onChange={(e) => this.handleInputChange(e)}
                                                />
                                                {(this.state.isSubmit && this.state.phone.length === 0) && (
                                                    <div style={{color: "red"}}>Vui lòng điền SĐT!</div>
                                                )}
                                            </div>
                                            <div class="col-md-6">
                                                <label for="birthday">Ngày sinh</label>
                                                <input
                                                    id="birthday"
                                                    name="birthday"
                                                    class="form-control"
                                                    type="date"
                                                    placeholder="1999-09-09"
                                                    onChange={(e) => this.handleInputChange(e)}
                                                />
                                                {(this.state.isSubmit && this.state.birthday.length === 0) && (
                                                    <div style={{color: "red"}}>Vui lòng điền Ngày sinh!</div>
                                                )}
                                            </div>
                                            <div class="col-md-6">
                                                <label for="sex">Giới tính</label><br />
                                                <input id="sex" name="sex" type="radio" value="Nam" onChange={(e) => this.handleInputChange(e)}/>Nam
                                                <input id="sex" name="sex" type="radio" value="Nữ" onChange={(e) => this.handleInputChange(e)}/>Nữ
                                                {(this.state.isSubmit && this.state.sex.length === 0) && (
                                                    <div style={{color: "red"}}>Vui lòng điền Giới tính!</div>
                                                )}
                                            </div>

                                            <div class="col-md-6">
                                                <label for="password">Mật Khẩu</label>
                                                <input
                                                    id="password"
                                                    name="password"
                                                    class="form-control"
                                                    type="password"
                                                    placeholder="Nhập mật khẩu của bạn"
                                                    onChange={(e) => this.handleInputChange(e)}
                                                />
                                                {(this.state.isSubmit && this.state.password.length === 0) && (
                                                    <div style={{color: "red"}}>Vui lòng điền Mật khẩu!</div>
                                                )}
                                            </div>

                                            <div class="col-md-12">
                                                <label>Địa chỉ</label>
                                                <input
                                                    id="address"
                                                    name="address"
                                                    class="form-control"
                                                    type="text"
                                                    placeholder="Địa chỉ"
                                                    onChange={(e) => this.handleInputChange(e)}
                                                />
                                                {(this.state.isSubmit && this.state.address.length === 0) && (
                                                    <div style={{color: "red"}}>Vui lòng điền Địa chỉ!</div>
                                                )}
                                            </div>
                                            <div class="col-md-12 text-center">
                                                <button onClick={(e) => this.handleSubmit(e)}
                                                    class="btn">Đăng ký</button>
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

                {/* <!-- Footer Start --> */}
                <div class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="footer-widget">
                                    <h2>Liên Hệ</h2>
                                    <div class="contact-info">
                                        <p><i class="fa fa-map-marker"></i>Thành phố Hồ Chí Minh</p>
                                        <p><i class="fa fa-envelope"></i>tamtvh96@gmail.com</p>
                                        <p><i class="fa fa-phone"></i>+963548171</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="footer-widget">
                                    <h2>Theo Dõi Tôi</h2>
                                    <div class="contact-info">
                                        <div class="social">
                                            <a href=""><i class="fab fa-twitter"></i></a>
                                            <a href="https://www.facebook.com/ybx1802"
                                            ><i class="fab fa-facebook-f"></i></a>
                                            <a href="https://www.linkedin.com/in/huy-tran-57777b202/"
                                            ><i class="fab fa-linkedin-in"></i></a>
                                            <a href="https://www.instagram.com/huy_jr18"
                                            ><i class="fab fa-instagram"></i></a>
                                            <a
                                                href="https://www.youtube.com/channel/UCctcteJFmH4Wxc8npHW9Cog"
                                            ><i class="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="footer-widget">
                                    <h2>Thông Tin Cửa Hàng</h2>
                                    <ul>
                                        <li><a href="#">Giới thiệu</a></li>
                                        <li><a href="#">Chính sách bảo mật</a></li>
                                        <li><a href="#">Hình thức vận chuyển</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="footer-widget">
                                    <h2>Thông Tin Mua Hàng</h2>
                                    <ul>
                                        <li><a href="#">Chính sách thanh toán</a></li>
                                        <li><a href="#">Chính sách vận chuyển</a></li>
                                        <li><a href="#">Chính sách hoàn trả</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="row payment align-items-center">
                            <div class="col-md-6">
                                <div class="payment-method">
                                    <h2>Nhận thanh toán bằng:</h2>
                                    <img src="../img/payment-method.png" alt="Payment Method" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="payment-security">
                                    <h2>Chứng chỉ bảo mật:</h2>
                                    <img src="../img/godaddy.svg" alt="Payment Security" />
                                    <img src="../img/norton.svg" alt="Payment Security" />
                                    <img src="../img/ssl.svg" alt="Payment Security" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Footer End --> */}

                {/* <!-- Footer Bottom Start --> */}
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 copyright">
                                <p>
                                    Copyright &copy;
                                    <a href="https:www.facebook.com/ybx1802">Ruou Ngon Store</a>. All
                                    Rights Reserved
                                </p>
                            </div>

                            <div class="col-md-6 template-by">
                                <p>Developed By <a href="https://htmlcodex.com">Hoang Tam</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Footer Bottom End --> */}

                {/* <!-- Back to Top --> */}
                <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
            </div>

            </>
        )
    }

}
