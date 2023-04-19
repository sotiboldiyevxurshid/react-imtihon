import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateData from "./companents/CreateData/CreateData";
import Home from "./companents/Home/Home";
import NavbarRouter from "./companents/Navbar/NavbarRouter";
import EditPage from "./EditPage/EditPage";
import TableList from "./TableList/TableList";

const App = () => {

  return (
   <>
   
   <Router>
  <NavbarRouter/>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/create" element={<CreateData/>} />
      <Route path="/table" element={<TableList/>} />
      <Route path="/table/edit/:id" element={<EditPage/>} />

    </Routes>
  </Router>




 
   </>
  );
};

export default App;
