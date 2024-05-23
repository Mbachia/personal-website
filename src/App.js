import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome to My Data Science Portfolio</h1>
      </header>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
