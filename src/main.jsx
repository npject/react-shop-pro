import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import {
  Home, 

  // Blog
  Blog, 
  SinglePost, 
  loaderSinglePost, 

  // Products
  Products, 
  SingleProduct, 
  loaderSingleProduct, 
  Cart, 

  ContactUs, 
  AboutUs, 
  PageNotFound 
} from 'pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    Component:Layout,
    errorElement:<PageNotFound />,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"/blog",
        Component:Blog
      },
      {
        path:"/blog/:idPost",
        Component:SinglePost,
        loader:loaderSinglePost
      },
      {
        path:"/products",
        Component:Products
      },
      {
        path:"/products/:id",
        Component:SingleProduct,
        loader:loaderSingleProduct
      },
      {
        path:"/contactUs",
        Component:ContactUs
      },
      {
        path:"/aboutUs",
        Component:AboutUs
      },
      {
        path:"/cart",
        Component:Cart
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
