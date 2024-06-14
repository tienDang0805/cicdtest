import React, { Component } from "react";
import Layout from "../../components/Layout";
import Paypal from "../../components/Paypal";
import Body from "./Body";
import { getAccessTokenFromLocalStorage } from "../../helper/accessToken";
import jwt from "jwt-decode";
import { GetCustomerById } from "../../services/Customer";

export default class CheckOut extends Component {
  
    

    
  
  render() {
    return (
      <Layout>
        <Body />
      </Layout>
    );
  }
}
