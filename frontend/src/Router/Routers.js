import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home";
import Tours from "../Pages/Tours"
import TourDetails from "../Pages/TourDetails"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import SearchResultList from "../Pages/SearchResultList"



const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tour" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tour/search" element={<SearchResultList />} />
            <Route path="/home" />



        </Routes>
    )
}

export default Routers;