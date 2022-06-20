import React from 'react';
import NavBar from './components/NavBar';
// import "./assets/main.css";
// import { Routes, Route, NavLink as Link } from "react-router-dom"
// import Dashboard from './pages/dashboard';
// import Home from './pages/home';
// import About from './pages/about';


function App() {
  return (
    // <div className="App">
    //   <header className="grid h-screen place-items-center">ReactJS with TailwindCSS</header>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/" activeClassName="activate">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="dashboard" activeClassName="activate">Dashboard</Link>
    //       </li>
    //       <li>
    //         <Link to="about" activeClassName="activate">About</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <div className="main">
    //     <Routes>
    //       <Route path="/" element={<Home />}></Route>
    //       <Route path="about" element={<About />}></Route>
    //       <Route path="dashboard" element={<Dashboard />}></Route>
    //     </Routes>
    //   </div>
    // </div>
    <main>
      < NavBar/>
    </main>
  )
}

export default App
