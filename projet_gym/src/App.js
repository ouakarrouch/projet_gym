import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'
import Home from './pages/Home'
import ExirciseDetail from './pages/ExirciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchExercises from './components/SearchExercises'

const App = () => {
  return (
    <Box width="400"  sx={ {width : { xl : '1488px'}}} m="auto">
    <Navbar /> 
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercice/:id" element={<ExirciseDetail />} />
    </Routes>
    <Footer />
    </Box>
  )
}

export default App
