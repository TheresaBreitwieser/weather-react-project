import React from "react";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vienna"/>
        <footer className="footer">Coded by Theresa Breitwieser, open-sourced on <a href="https://github.com/TheresaBreitwieser/weather-react-project" target="_blank" rel="noreferrer">Github</a></footer>
      </div>
    </div>
  );
}

export default App;
