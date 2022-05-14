import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import Items from './Pages/Home/Items/Items';
import Explor from './Pages/Home/Explor/Explor';
import Login from './Pages/Login/Login/Login';
import BlogsQA from './Pages/Login/BlogsQA/BlogsQA';
import MyItems from './Pages/Login/MyItems/MyItems';
import Registration from './Pages/Login/Registration/Registration';
import NotFound from './Pages/Login/NotFound/NotFound';
import FullDetails from './Pages/Home/Items/Item/ItemDetail/FullDetails/FullDetails';
import RequireAuth from './RequireAuth/RequireAuth';
import CheckOut from './CheckOut/CheckOut';
import Ourblogs from './Pages/Home/Ourblogs/Ourblogs';
import OurblogsDetails from './Pages/Home/Ourblogs/OurblogsDetails';
import ExplorItemsDetails from './Pages/Home/Explor/ExplorItemsDetails';
import Footer from './Pages/Home/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Items" element={<Items></Items>}></Route>
        <Route path="/Item/:ItemID" element={
          <RequireAuth>
            <FullDetails></FullDetails>
          </RequireAuth>}>
          </Route>
        <Route path="/Explor" element={<Explor></Explor>}></Route>
        <Route path="/ExplorItemsDetails" element={<ExplorItemsDetails></ExplorItemsDetails>}></Route>
        <Route path="/Ourblogs" element={<Ourblogs></Ourblogs>}></Route>
        <Route path="/OurblogsDetails" element={<OurblogsDetails></OurblogsDetails>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Blogs-QA" element={<BlogsQA></BlogsQA>}></Route>
        <Route path="/My-Items" element={<MyItems></MyItems>}></Route>
        <Route path="/Registration" element={<Registration></Registration>}></Route>
        <Route path="CheckOut" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>}>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;