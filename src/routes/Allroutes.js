import { Route, Routes } from "react-router-dom";
import { Cart,List } from "../pages";

import React from 'react'

export const AllRoutes = () => {


  return (
    <div className="dark:bg-darkbg">
        <Routes>
            <Route path="/" element={<List/>}/>
            <Route path="/home" element={<List/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}
