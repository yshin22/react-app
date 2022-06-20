import React from "react";
import "../assets/main.css";
import { Routes, Route, NavLink as Link } from "react-router-dom"
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';
import About from '../pages/about';

export default function NavBar() {
    return (
      <header className="bg-gray-800 md:sticky top-0 z-10">ReactJS with TailwindCSS
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="activate">Home</Link>
          </li>
          <li>
            <Link to="dashboard" activeClassName="activate">Dashboard</Link>
          </li>
          <li>
            <Link to="about" activeClassName="activate">About</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
      </header>
    );
}