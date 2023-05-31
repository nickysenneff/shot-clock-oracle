import React from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import './App.css';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App bg-blue-800 w-[100vw] h-full  md:h-[100vh] antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
      <Navbar/>
      <Introduction/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
