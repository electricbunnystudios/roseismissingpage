import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Landing from "./pages/Landing/Landing"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Landing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
