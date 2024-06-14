import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Routes,Route } from "react-router-dom";
import BodyProductDetail from "../ProductCus-Detail/Body";
import { KeyNavigate } from '../../helper/KeyNavigate'
import { CustomCardProduct } from '../../components/CardProduct'
import { GetListWinetype, GetListProduct, GetListProductByType, GetListProductByName } from "../../services/Product";
import CustomePagination from '../../components/Pagination'
import { getSearchWordFromLocalStorage } from "../../helper/searchWord";


export default class BodyProductSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
          brands: [],
          products: [],
          selectedBrand:'',
          searchWord: getSearchWordFromLocalStorage(),
        };
        this.handleClick = this.handleClick.bind(this)
      }

    componentDidMount() {
        

        GetListWinetype()
        .then(res => {
            const brand = []
            res.data.forEach(item => {
              const { product } = item
              brand.push({item})
            })
            this.setState({ brands: brand })
          })
          .catch(err => console.log(err))    
        
        GetListProductByName(this.state.searchWord)
        .then(res => {
            this.setState({ products: res.data});
        })
        .catch(err => console.log(err))

        
    }

    



    handleClick(data) {
        this.setState({
            selectedBrand: data.MALOAI,
        })
        GetListProductByType(data.MALOAI)
            .then(res => {
                this.setState({products: res.data})
            })
            .catch(err => console.log(err))
        return(
            <CustomePagination data={this.state.products}></CustomePagination>

        )
        
    }
  render() {
    return (
      <div>
        
        

        {/* <!-- Breadcrumb Start --> */}
        <div className="breadcrumb-wrap">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={'/'}>Trang chủ</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={KeyNavigate.ProductCus}>Sản phẩm</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Breadcrumb End --> */}
        
        {/* <!-- Product List Start --> */}
        <div className="product-view">
          <div className="container-fluid">
                
            <div className="row">
              <div className="col-lg-8">
              
                <div className="row">
                
                  <div className="col-md-12">
                    <div className="product-view-top">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="product-search">
                            <input
                              id="myInput"
                              type="email"
                              placeholder="Tìm kiếm tên sản phẩm"
                            />
                            <button>
                              <i className="fa fa-search"></i>
                            </button>
                          </div>
                        </div>

                        
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                          <div className="product-price-range"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- danh sách sản phẩm theo loại đc nhúng tại đây --> */}
                  <div className="col-md-12">
                    <div id="myTable" className="row"></div>
                  </div>
                </div>

                <div className="sidebar-widget category">
                  <CustomePagination data={this.state.products}></CustomePagination>
                  
                </div>
              </div>

              {/* <!-- Side Bar Start --> */}
              <div className="col-lg-4 sidebar">
                <div className="sidebar-widget category">
                  <h2 className="title">Danh mục</h2>
                  <nav className="navbar bg-light">
                    <ul className="navbar-nav">
                      {this.state.brands.map((brand) => {
                        return (
                          //on click sua this.state.prodcuts
                          <li>
                            <Link
                              to={KeyNavigate.ProductCus.concat('/',
                                brand.item.TENLOAI
                              )}
                              onClick={() => {this.handleClick(brand.item)}}
                            >
                              {brand.item.TENLOAI}{" "}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>

                
              </div>
              {/* <!-- Side Bar End --> */}
            </div>
            
          </div>
        </div>
        
        {/* <!-- Product List End --> */}

        {/* <!-- Brand Start --> */}
        <div className="brand">
          <div className="container-fluid">
            <div className="brand-slider">
              <div className="brand-item">
                <a href="/danh-muc/agv">
                  <img src="../img/hennessy.jpg" alt="" />
                </a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/shoei">
                  <img src="../img/bacardi.jpg" alt="" />
                </a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/arai">
                  <img src="../img/chivas.jpg" alt="" />
                </a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/torc">
                  <img src="../img/camus.jpg" alt="" />
                </a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/yohe">
                  <img src="../img/ciroc.png" alt="" />
                </a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/yohe">
                  <img src="../img/raynal.jpg" alt="rượu raynal" />
                </a>
              </div>
              <div className="brand-item">
                <a href="/danh-muc/yohe">
                  <img src="../img/martin.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Brand End --> */}

       
      </div>
    );
  }
}
