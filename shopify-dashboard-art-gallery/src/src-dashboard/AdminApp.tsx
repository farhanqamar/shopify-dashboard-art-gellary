import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import React from 'react';
import Collection from "./Pages/Coollection";
import NewOrder from "./Pages/NewOrder";
import Hoome from './Pages/Hoome';
import DynamicTable from "./Components/OrderTable";
import './Pages/Dashboard.scss';


const Analytics = lazy(() => import('./Pages/Analytics/Analytics'));
const AdminSideBar = lazy(() => import("./Components/AdminSideBar/AdminSideBar"));
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Order = lazy(() => import("./Pages/Order"));
const Prooduct = lazy(() => import("./Pages/Prooduct"));
const Customer = lazy(() => import("../src-dashboard/Pages/customers/Customer"));
const NewCustomer = lazy(() => import("./Pages/customers/NewCustomer"));
const Discount = lazy(() => import("./Pages/Discount"));
const CreateDiscount = lazy(() => import("./Pages/CreateDiscount"));
const BlogPosts = lazy(() => import("./Pages/BlogPosts"));
const CreateBlog = lazy(() => import("./Pages/CreateBlog"));
const NewProduct = lazy(() => import("./Components/NewProduct"));
const ProductTable = lazy(() => import("./Components/ProductTable"));
const CustomerTable = lazy(() => import("./Components/CustomerTable"));
const DiscountTable = lazy(() => import("./Components/DiscountTable"));



function AdminApp() {


  return (
    <>
      <Suspense fallback={<div className="text-lg font-bold text-center">Loading...</div>}>
        <Navbar />
        <div className="grid grid-cols-8 ">
          <div className={`col-span-2 2xl:col-span-1 h-[95.6vh] hidden md:block`}>
            <AdminSideBar />
          </div>
          <div className="col-span-8 md:col-span-6 2xl:col-span-7 bg-[#F1F1F1] h-[95.6vh] overflow-y-auto">
            <Routes>
              <Route path='/*' element={<Hoome />} />
              
              <Route path='/analytics' element={<Analytics />} />
              <Route path='/order' element={<Order />} />
              <Route path="/order/newOrder" element={<NewOrder />} />
              <Route path="/order/orderTable" element={<DynamicTable />} />


              <Route path='/prooduct' element={<Prooduct />} />
              <Route path='/prooduct/newproduct' element={<NewProduct />} />
              <Route path="/prooduct/allProducts" element={<ProductTable />} />
              <Route path="/prooduct/coollection" element={<Collection/>} />

              <Route path='/customer' element={<Customer />} />
              <Route path='/customer/newCustomer' element={<NewCustomer />} />
              <Route path="/customer/allCustomer" element={<CustomerTable />} />

              <Route path='/discount' element={<Discount />} />
              <Route path='/discount/createDiscount' element={<CreateDiscount />} />
              <Route path="/discount/discountTable" element={<DiscountTable />} />

              <Route path='/blog-post' element={<BlogPosts />} />
              <Route path='/blog-post/createBlog' element={<CreateBlog />} />
              
            </Routes>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default AdminApp;