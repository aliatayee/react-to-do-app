import React from 'react';
import ReactDOM from 'react-dom';
// component file
import TodoContainer from './FunctionBased/components/TodoContainer';
import About from './FunctionBased/pages/About';
import NotMatch from './FunctionBased/pages/NotMatchs';
import Navbar from './FunctionBased/components/Navbar';
import "./FunctionBased/App.css"
// router
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<TodoContainer/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/*" element={<NotMatch/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)