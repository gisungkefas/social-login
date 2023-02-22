import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <BrowserRouter>
    <>
    <div className="App">
      <Navbar />
        <Routes />
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/post/:id" element={<Post />}/>
    </div>
    </>
    </BrowserRouter>
  );
}

export default App;
