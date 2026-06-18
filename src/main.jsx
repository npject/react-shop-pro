import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Products from './pages/Products';
import ContactUs from './pages/Contact-us';
import AboutUs from './pages/About-us';
import Cart from './pages/Cart';
import PageNotFound from './pages/PageNotFound';
import SingleProduct from './pages/Single-product';
import {loader as loaderSingleProduct} from '/src/pages/Single-product.loader.js';
import SinglePost from './pages/Single-post'; 
import {loader as loaderSinglePost} from '/src/pages/Single-post.loader.js';

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
        path:"/aboutus",
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
