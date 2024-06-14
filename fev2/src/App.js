import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router';
import Layout from './Views/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/asset.css"
import Provider from './Views/Provider'
import ProductType from './Views/ProductType'
import Brand from './Views/Brand'
import Product from './Views/Product'
import Bill from './Views/Bill'
import Promo from './Views/Promo'
import PromoProduct from './Views/PromoProduct'
import Revenue from './Views/Revenue'
import Customer from './Views/Customer'
import Staff from './Views/Staff'
import LayoutIndex from './Views/Index';
import React from 'react';


import { KeyNavigate } from './helper/KeyNavigate';
import Login from './Views/Login';
import LoginAdmin from './Views/LoginAdmin';
import ProductCus from './Views/ProductCus';
import Account from './Views/Account';
import Cart from './Views/Cart';
import LayoutAdmin from './Views/Layout';
import ProductCusDetail from './Views/ProductCus-Detail';
import BodyProductDetail from './Views/ProductCus-Detail/Body';
import ProductSearch from './Views/SearchPage';
import CheckOut from './Views/Checkout';
import Shipper from './Views/Shipper';
import LoginShipper from './Views/Login-Shipper';
import OrderShipper from './Views/Order-Shipper';
import ShipperDetail from './Views/ShipperDetail';
import CustomerDetail from './Views/Customer-Detail';
import OrderCustomer from './Views/Order-customer';
import DDH from './Views/DDH';
import Index from "./Views/SignUp";
import SignUp from "./Views/SignUp";
function App() {
  return (
    <Routes>
      <Route path={'/'} element={<LayoutIndex></LayoutIndex>}></Route>
      <Route path={KeyNavigate.LoginAdmin} element={<LoginAdmin></LoginAdmin>}></Route>
      <Route path={KeyNavigate.ProductCus.concat('/*')} element={<ProductCus>
        {/* <Route path={KeyNavigate.Detail} element={<BodyProductDetail />} /> */}
        {/* <Route path={':id'} element={<BodyProductDetail />} /> */}

        
      </ProductCus>}></Route>
      <Route path={KeyNavigate.Login} element={<Login></Login>}></Route>
      <Route path={KeyNavigate.SignUp} element={<SignUp></SignUp>}></Route>

      <Route path={KeyNavigate.Account.concat('/*')} element={<Account>
        <Route path={KeyNavigate.OrderCustomer} element={<OrderCustomer/>}  />
        <Route path={KeyNavigate.CustomerDetail} element={<CustomerDetail/>}  />
      </Account>}></Route>

      <Route path={KeyNavigate.Cart} element={<Cart></Cart>}></Route>
      <Route path={KeyNavigate.CheckOut} element={<CheckOut></CheckOut>}></Route>


      <Route path={KeyNavigate.Detail.concat('/:id')} element={<ProductCusDetail/>} />
      <Route path={KeyNavigate.Search.concat('/:text')} element={<ProductSearch/>} />


      <Route path={KeyNavigate.LoginShipper} element={<LoginShipper/>} />
      <Route path={KeyNavigate.Shipper.concat('/*')} element={<Shipper>
        <Route path={KeyNavigate.OrderShipper} element={<OrderShipper />} />
        <Route path={KeyNavigate.ShipperDetail} element={<ShipperDetail />} />
      </Shipper>} />
        
      


      <Route path={KeyNavigate.Layout.concat('/*')} element={<LayoutAdmin>
        <Route path={KeyNavigate.Provider} exact element={<Provider />} />
          <Route path={KeyNavigate.ProductType} element={<ProductType />} />
          <Route path={KeyNavigate.Brand} element={<Brand />} />
          <Route path={KeyNavigate.Product} element={<Product />} />
          <Route path={KeyNavigate.Bill} element={<Bill />} />
          <Route path={KeyNavigate.Promo} element={<Promo />} />
          <Route path={KeyNavigate.PromoProduct} element={<PromoProduct />} />
          <Route path={KeyNavigate.Revenue} element={<Revenue />} />
          <Route path={KeyNavigate.Customer} element={<Customer />} />
          <Route path={KeyNavigate.Staff} element={<Staff />} />
          <Route path={KeyNavigate.DDH} element={<DDH />} />

      </LayoutAdmin>}></Route>

      

      

    </Routes>


  );
}

export default App;
