import React, { Component } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import { getListCartItemsFromLocalStorage } from "../../helper/addToCart";
import { GetProductById, GetListProduct } from "../../services/Product";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";
import Paper from "@mui/material/Paper";

import { Box, Button } from "@mui/material";
import { createPhieuDat } from "../../services/Phieudat";
import * as moment from "moment";
import {
  checkKm,
  convertKm,
  convertPrice,
  fixedPrice,
  checkPrice,
  toDecimal,
} from "../../helper/convertPrice";
import { KeyNavigate } from "../../helper/KeyNavigate";
export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      total: 0,
    };

    this.removeItem = this.removeItem.bind(this);
    this.totalAmount = this.totalAmount.bind(this);
  }

  componentDidMount() {
    const carts = JSON.parse(getListCartItemsFromLocalStorage());
    if(carts){
      this.setState({ carts });
    
      let totalAmountTemp = 0;
      carts.map((cur) => {
        GetProductById(cur.productId)
          .then((res) => {
            let price = checkPrice(res.data.changeprices);
            let promoPrice =
              checkPrice(res.data.changeprices) *
              toDecimal(checkKm(res.data.ct_khuyenmais));
            let totalTemp = price - promoPrice;
            totalAmountTemp += totalTemp * cur.quantity;
            this.setState({ total: totalAmountTemp.toFixed(2) });
          })
          .catch((err) => console.log(err));
      });
    }
    
  }

  totalAmount() {
    const carts = JSON.parse(getListCartItemsFromLocalStorage());
    if(carts){
      let totalAmountTemp = 0;
      carts.map((cur) => {
        GetProductById(cur.productId)
          .then((res) => {
            let price = checkPrice(res.data.changeprices);
            let promoPrice =
              checkPrice(res.data.changeprices) *
              toDecimal(checkKm(res.data.ct_khuyenmais));
            let totalTemp = price - promoPrice;
            totalAmountTemp += totalTemp * cur.quantity;
            this.setState({ total: totalAmountTemp.toFixed(2) });
          })
          .catch((err) => console.log(err));
      });
    }
    
  }

  removeItem(productId) {
    const carts = JSON.parse(getListCartItemsFromLocalStorage());
    if(carts) {
      const newCarts = carts.filter((product) => product.productId != productId);
      this.setState({ carts: newCarts });
    }

    

    //this.setState({total: })
  }

  async checkout() {
    console.log(moment(new Date()).format("YYYY-MM-DD"));
    //goi api de tao phieu dat = tat ca data trong gio hang
    //const data = await createPhieuDat()
  }

  render() {
    return (
      <div className="cart-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="cart-page-inner">
                <div className="table-responsive">
                  <TableContainer TableContainer component={Paper}>
                    <Table
                      sx={{ minWidth: 650 }}
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>Sản phẩm</TableCell>
                          <TableCell style={{width: '25%'}}>Hình ảnh</TableCell>
                          <TableCell>Giá</TableCell>
                          <TableCell>Số lượng</TableCell>
                          <TableCell>Tổng</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.carts &&
                          this.state.carts.map((item, index) => {
                            return (
                              <Item
                                id={item.productId}
                                data={item}
                                removeItem={this.removeItem}
                                totalAmount={this.totalAmount}
                              />
                            );
                          })}
                      </TableBody>
                    </Table>
                    <Table style={{ marginTop: "20px" }}>
                      <TableRow
                        style={{ textAlign: "center", fontSize: "30px" }}
                      >
                        Tổng tiền: {this.state.total}${"   "}
                      </TableRow>
                    </Table>
                  </TableContainer>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
