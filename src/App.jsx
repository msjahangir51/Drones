import React from 'react';

import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;