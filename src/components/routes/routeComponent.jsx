import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from "../Contents/home"
import { Cart } from "../Contents/cart"
import Order from '../Contents/order'


const RouteComponent=(props)=>{
    

    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Cart' element={<Cart/>}></Route>
                <Route path='/Order' element={<Order/>}></Route>
                <Route path='*' element={<Navigate to={"/"}/>}></Route>
            </Routes>
        </>
    )
}

export default RouteComponent