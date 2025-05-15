import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages";

import React from 'react'
import { ProductList } from "../Pages/Products/ProductList";
import ProductDetails from "../Pages/ProductDetails";
import CartPage from "../Pages/Cart/CartPage";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import OrderPage from "../Pages/Order/OrderPage";
import DashboardPage from "../Pages/Dashboard/DashboardPage";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/order-summary" element={<OrderPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
      </Routes>
    </>
  )
}

