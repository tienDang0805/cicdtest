import React, { Component } from "react";
import { GetProductById, GetListProduct } from "../../services/Product";
import { removeCartItemToLocalStorage } from "../../helper/addToCart";

import { toDecimal } from "../../helper/convertPrice";
import { Button, TableRow, TableCell, TextField } from "@mui/material";

import {
  checkKm,
  convertKm,
  convertPrice,
  fixedPrice,
  checkPrice,
} from "../../helper/convertPrice";

export default class ItemPd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: {},
      promos: [],
      currentPromo: 0,
      price: 0,
      promoPrice: 0,
      curQuantity: 0,

    };
  }

  componentDidMount() {
    GetProductById(this.props.data.productId)
      .then((res) => {
        this.setState({
          product: res.data,
          price: checkPrice(res.data.changeprices),
          promoPrice:
            checkPrice(res.data.changeprices) *
            toDecimal(checkKm(res.data.ct_khuyenmais)),
        });
      })
      .catch((err) => console.log(err));
      
    this.setState({curQuantity: this.props.data.quantity})
  }

  
  render() {
    return (
      <TableRow>
        <TableCell>{this.state.product.TENDONG}</TableCell>
        <TableCell align="left" >
                <img
                  src={"../../../".concat(this.state.product.HINHANH)}
                  width={"15%"}
                  height={"15%"}
                />
                </TableCell>
        
        <TableCell>
          
          {this.state.curQuantity}
          
          </TableCell>
        <TableCell>
          {this.props.data.GIA}{" "}
          $
        </TableCell>
        
      </TableRow>
    );
  }
}
