import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import Items from './Pages/Home/Items/Items';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import BlogsQA from './Pages/Login/BlogsQA/BlogsQA';
import MyItems from './Pages/Login/MyItems/MyItems';
import Registration from './Pages/Login/Registration/Registration';
import NotFound from './Pages/Login/NotFound/NotFound';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/HOME" element={<Home></Home>}></Route>
        <Route path="/ITEMS" element={<Items></Items>}></Route>
        <Route path="/SERVICES" element={<Services></Services>}></Route>
        <Route path="/LOGIN" element={<Login></Login>}></Route>
        <Route path="/BLOGS-QA" element={<BlogsQA></BlogsQA>}></Route>
        <Route path="/MY-ITEMS" element={<MyItems></MyItems>}></Route>
        <Route path="/REGISTRATION" element={<Registration></Registration>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
};

export default App;