import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => {
        setData(res.data.results);
      })
      .catch(err => console.log("API request App: ", err));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/home" render={() => <Home data={data} />} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
