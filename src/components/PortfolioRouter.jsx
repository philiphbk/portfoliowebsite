import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Profile from "./Profile";
import Skills from "./Skills";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Projects from "./Projects";
import { FaBookReader, FaEnvelope } from 'react-icons/fa'
import './portfolio.css';

const PortfolioRouter = () => {
  return (
    <Router>
      <div className="container">
        <nav className="sidebar">
          <ul>
            <li>
              <Link to='/'>Profile</Link>
            </li>
            <li>
              <Link to='/skills'>Skills</Link>
            </li>
            <li>
              <Link to='/projects'> Projects</Link>
            </li>
            <li>
              <Link to='/blogs'><FaBookReader /> Blogs</Link>
            </li>
            <li><FaEnvelope />
              <Link to='/contact'> Contact </Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Profile />} />
               <Route exact path="/skills" element={<Skills />} />
                <Route exact path="/projects" element={<Projects />} />
                 <Route exact path="/blogs" element={<Blogs />} />
                  <Route exact path="/contact" element={ <Contact />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}


export default PortfolioRouter;