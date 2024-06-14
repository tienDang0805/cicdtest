import React, { Component } from "react";
import { Link } from "react-router-dom";
import { KeyNavigate } from "../../helper/KeyNavigate";
import { GetProductById } from "../../services/Product";
import { addCartItemToLocalStorage2, getListCartItemsFromLocalStorage } from "../../helper/addToCart";
import { checkKm, convertKm, convertPrice, fixedPrice, checkPrice, convertGIA, checkRating } from "../../helper/convertPrice";
import { getQuantity } from "../../services/Product";
import Rating from '@mui/material/Rating';
import { CreateReview, GetReviewByMadong } from "../../services/Rating";
import { ListItem, TextField } from "@mui/material";
import { Button } from "@mui/material";
import List from '@mui/material/List';
import Paper from "@mui/material/Paper";
import ListItemText from '@mui/material/ListItemText';
import { GetListCustomer } from "../../services/Customer";
import { getAccessTokenFromLocalStorage } from "../../helper/accessToken";
import jwt from 'jwt-decode' 
import * as moment from "moment";


export default class BodyProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {},
      quantity: 1,
      oldPrice: 0,
      newPrice: 0,
      rating: 0,
      error: '',
      review: [],
      curRating: 0,
      customers: [],
      NOIDUNG: '',


    }
  }

  async componentDidMount() {
    //console.log('body',this.props.params)
    await GetProductById(this.props.params.id).then(res => {
      console.log(res.data.reviews)
      this.setState({
        product: res.data,
        oldPrice: convertPrice(
          checkPrice(res.data.changeprices),
          convertKm([])),
        newPrice: convertPrice(
          checkPrice(res.data.changeprices),
          convertKm(res.data.ct_khuyenmais) / 100 || 0),
        rating: checkRating(res.data.reviews),
        review: res.data.reviews

      })
    })

    GetListCustomer().then(res => {
      // console.log(res.data)
      this.setState({customers: res.data})
    })

    

    // GetReviewByMadong(this.props.params.id).then(res => {
    //   console.log('res',res.data[0].RATING)
    //   this.setState({ review: res.data })
    // })
  }

  addToCart = (productId, price, quantity) => {
    addCartItemToLocalStorage2(productId, price, quantity)
  };

  handleClick = async () => {
    let carts = JSON.parse(getListCartItemsFromLocalStorage()) || [];
    let quantityProductInCart = 0
    carts.map(cur => {
      if (cur.productId == this.state.product.MADONG) {
        quantityProductInCart = cur.quantity
      }
    })

    //slt
    let slt = await getQuantity(this.state.product.MADONG).then(res => (res.data[0].soluongton))

    if (slt < (this.state.quantity + quantityProductInCart)) {
      //console.log('vuot qua so luong')
      this.setState({ error: 'Số lượng hàng còn lại không đủ' })


    }
    else this.addToCart(this.state.product.MADONG, this.state.product.GIA, this.state.quantity)
  }

  handleClickMinus = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 })
    }
  }

  handleClickPlus = () => {
    this.setState({ quantity: this.state.quantity + 1 })
  }
  handleRatingStar = (e) => {
    // console.log('asdads', e)
    this.setState({ curRating: e })
  }

  handleND = (event) => {
    // console.log('asdads', e)
    this.setState({ NOIDUNG: event.target.value })
  }

  

  handleReview = async () => {
    // add new review to db
    let token = jwt (getAccessTokenFromLocalStorage())
    // console.log(token.userId)
    let time = moment(new Date).format("YYYY-MM-DD")
    let data = {
      MAKH : token.userId,
      MADONG: this.state.product.MADONG,
      NGAYDANHGIA: time,
      NOIDUNG: this.state.NOIDUNG,
      RATING: this.state.curRating

    }

    console.log(data)

    await CreateReview(data).then(res => {
      if(res.status == 201 || res.status === 200){
        alert('Cảm ơn bạn đã đánh giá')
      }
    })
  }

  findCusName = (id) => {
    let temp = ''

    if(this.state.customers){
      this.state.customers.map(cur => {
        if(id === cur.MAKH){
          console.log('cus', cur.HO.concat(' ').concat(cur.TEN))
          temp = cur.HO.concat(' ').concat(cur.TEN)
          return temp
        }
      })
    }

    return temp

  }




  render() {
    return (
      <div>
        {/* <h2>{this.props.match.params.id}</h2> */}
        {/* <!-- Breadcrumb Start --> */}
        <div className="breadcrumb-wrap">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/san-pham">Sản phẩm</a></li>
              {/* <li className="breadcrumb-item active"><%=breadcrumb%></li> */}
            </ul>
          </div>
        </div>
        {/* <!-- Breadcrumb End --> */}

        {/* <!-- Product Detail Start --> */}
        <div className="product-detail">
          <div className="container-fluid">
            <div className="row">
              {/* add col 4 here */}
              <div className="col-lg-8">
                <div className="product-detail-top">
                  <div id="chi-tiet-san-pham" className="row align-items-center">
                    <div className="col-md-5">
                      <div className="product-slider-single normal-slider">
                        <img src={"../../../".concat(this.state.product.HINHANH && this.state.product.HINHANH)} width={"100%"} height={"auto"}></img>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="product-content">
                        <div className="title">
                          <h2 id="nameProduct">{this.state.product.TENDONG}</h2>
                        </div>
                        <div className="ratting">
                          {/* {console.log((this.state.rating))} */}
                          <Rating name="read-only" value={this.state.rating} readOnly />



                        </div>
                        <div className="price">
                          <h4 width={'50px'}>Giá: ${this.state.newPrice}
                            {(this.state.newPrice !== this.state.oldPrice) ? <del> ${this.state.oldPrice} </del> : null}
                          </h4>
                          <p id="priceProduct"></p>
                        </div>
                        <div className="quantity">
                          <h4 style={{ fontSize: '1em' }}>Số lượng:</h4>
                          <div className="qty">
                            <button className="btn-minus" onClick={this.handleClickMinus}>
                              <i className="fa fa-minus"></i>
                            </button>
                            <input type="text" value={this.state.quantity} />
                            <button className="btn-plus" onClick={this.handleClickPlus}>
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>


                        <div className="action">
                          <Link className="btn" to={KeyNavigate.Cart}><i className="fa fa-shopping-bag"></i>Mua Ngay</Link>
                          <a className="btn" onClick={e => this.handleClick()}>
                            <i className="fa fa-shopping-cart"></i>
                            Thêm vào giỏ
                          </a>
                        </div>
                        {this.state.error ? <p style={{ color: "red" }}>{this.state.error}</p> : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row product-detail-bottom">
                  <div className="col-lg-12">
                    <ul className="nav nav-pills nav-justified">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="pill"
                          href="#description"
                        >Mô tả</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#specification"
                        >Chi tiết</a>
                      </li>

                    </ul>

                    <div className="tab-content">
                      <div id="description" className="container tab-pane active">
                        <h4>Mô tả sản phẩm</h4>
                        <p id="desProduct">{this.state.product.MOTA}</p>
                      </div>
                      <div id="specification" className="container tab-pane fade">
                        <h4>Chi tiết sản phẩm</h4>

                      </div>
                      <div id="reviews" className="container tab-pane fade">

                        <form
                          action="/san-pham/comment/createcomment"
                          method="post"
                        >
                          <div className="reviews-submit">
                            <div className="field">
                              <h4>Viết đánh giá của bạn:</h4>
                              <div className="control">
                                <div className="rating">
                                  <input
                                    type="radio"
                                    name="star"
                                    id="star1"
                                    value="5"
                                  /><label for="star1"> </label>
                                  <input
                                    type="radio"
                                    name="star"
                                    id="star2"
                                    value="4"
                                  /><label for="star2"> </label>
                                  <input
                                    type="radio"
                                    name="star"
                                    id="star3"
                                    value="3"
                                  /><label for="star3"> </label>
                                  <input
                                    type="radio"
                                    name="star"
                                    id="star4"
                                    value="2"
                                  /><label for="star4"> </label>
                                  <input
                                    type="radio"
                                    name="star"
                                    id="star5"
                                    value="1"
                                  /><label for="star5"> </label>
                                </div>
                              </div>
                            </div>

                            <div className="row form clearfix">
                              <div className="col-sm-6">
                                <input name="ten" type="text" placeholder="Tên" />
                              </div>
                              <div className="col-sm-6">
                                <input
                                  name="email"
                                  type="email"
                                  placeholder="Email"
                                />
                              </div>
                              <div className="col-sm-12">
                                <textarea
                                  name="content"
                                  placeholder="Đánh giá..."
                                ></textarea>
                              </div>
                              <input
                                type="hidden"
                                name="idProduct"
                                value="<%=itemPro.MADONG%>"
                              />
                              <input
                                type="hidden"
                                name="nameProduct"
                                value="<%=itemPro.TENDONG%>"
                              />
                              <div className="col-sm-12">
                                <button>Gửi</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              {/* <div className="col-4">
          <div className="product-detail-top">hgh</div>
          </div> */}

              {/* <!-- Side Bar Start --> */}
              <div className="col-lg-4 sidebar">
                <div className="sidebar-widget category">
                  <h2 className="title">Đánh giá</h2>
                  <Rating
                    name="simple-controlled"
                    value={this.state.curRating}
                    onChange={(event, newValue) => this.handleRatingStar(newValue)}

                  />

                  <div className="row">
                    <TextField
                      multiline={true}
                      minRows={3}
                      label='Viết đánh giá của bạn'
                      onChange={(e) => this.handleND(e)}>
                      

                    </TextField>
                    <Button

                      variant="outlined"
                      style={{
                        textAlign: "center",
                        marginTop: '20px',
                        fontSize: "20px",
                        color: "#FF5733",
                        borderColor: "#FF5733",
                      }}
                      onClick={this.handleReview}
                    >
                      Gửi đánh giá
                    </Button>
                  </div>
                </div>

                <div className="sidebar-widget category">
                    <div className="row">
                    {/* <List style={{maxHeight: '100%', overflow: 'auto' }}>
                      {this.state.review && this.state.review.map(cur => {
                          this.state.customers && this.state.customers.map(customer => {
                            console.log('cus',customer, 'cur', cur.MAKH)
                            if(customer.MAKH === cur.MAKH){
                              console.log('was here')
                              return (<ListItemText  primary="Inbox">{cur.HO}</ListItemText>)
                            }
                          })
                        })}
                    </List> */}


                    <List style={{maxHeight: '200px', overflow: 'auto', backgroundColor:'#F0F8FF'}}>
                      {this.state.review && this.state.review.map(cur => {
                        
                          
                              return (
                                <div style={{backgroundColor:'#FFFAF0'}}>
                                <ListItemText style={{marginTop:'10px', marginLeft:'10px'}} primary={this.findCusName(cur.MAKH).concat(' - ').concat(moment(cur.NGAYDANHGIA).format('YYYY/MM/DD'))}>
                                  
                                </ListItemText>
                                <Rating style={{marginLeft:'10px'}} name="read-only" value={cur.RATING} readOnly />
                                <ListItemText style={{ marginLeft:'10px'}} primary={cur.NOIDUNG}></ListItemText>

                                </div>
                              )
                            
                        })}
                    </List>
                      
                    </div>
                </div>






              </div>
              {/* <!-- Side Bar End --> */}
            </div>
          </div>
          {/* <!-- Product Detail End --> */}





        </div>
      </div>
    );
  }
}
