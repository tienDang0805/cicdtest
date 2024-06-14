import React, { Component } from "react";
import { GetProductById, GetListProduct } from "../../services/Product";
import { removeCartItemToLocalStorage } from "../../helper/addToCart";
import { GetCtPromoById } from "../../services/Promo";

import { toDecimal } from "../../helper/convertPrice";
import { Button, TableRow, TableCell, TextField } from "@mui/material";

import {
  checkKm,
  convertKm,
  convertPrice,
  fixedPrice,
  checkPrice,
} from "../../helper/convertPrice";

export default class Item extends Component {
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

  setCurrentPromo = (promos) => {
    if (promos.length() > 0) {
      promos.map((cur) => {
        if (toDecimal(cur.PHANTRAMGIAM) > this.state.currentPromo) {
          this.setState({ currentPromo: toDecimal(cur.PHANTRAMGIAM) });
        }
      });
    } else {
      this.setState({ currentPromo: 0 });
    }
  };

  removeFromCart = (productId) => {
    removeCartItemToLocalStorage(productId);
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.props.removeItem(this.props.data.productId)
    this.removeFromCart(this.props.data.productId);
  };

  handleClickMinus = () => {
    if (this.state.curQuantity > 1) {
      this.adjCart(-1)
      this.setState((prev => ({
        curQuantity: prev.curQuantity - 1
      })))
      this.setState((prev => ({
        price: prev.price
      })))
      this.props.totalAmount()
    }
  };

  handleClickPlus = () => {
    this.adjCart(1)
    this.setState((prev => ({
      curQuantity: prev.curQuantity + 1
    })))
    this.props.totalAmount()
  };

  adjCart = (i) => {
    let carts = JSON.parse(sessionStorage.getItem("carts")) || [];

    const index = carts.findIndex((i) => i.productId == this.state.product.MADONG);

    if (index >= 0) {
      carts[index].quantity = this.state.curQuantity + i
    } 

    sessionStorage.setItem("carts", JSON.stringify(carts));
  };

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
        <TableCell>{(this.state.price - this.state.promoPrice).toFixed(2)} $</TableCell>
        <TableCell>
          
          {this.state.curQuantity}
          
          </TableCell>
        <TableCell>
          {(
            (this.state.price - this.state.promoPrice) *
            this.state.curQuantity
          ).toFixed(2)}{" "}
          $
        </TableCell>
        
      </TableRow>
    );
  }
}
