import React from 'react';
import './App.css';

// Greeting Component
const Greeting = ({ name }) => {
  return (
    <h1>Hello, {name}!</h1>
  );
};

// Box Design Component
const BoxDesign = () => {
  return (
    <div className="container">
  <div class="parent-box">
    <div class="child-box top-left"></div>
    <div class="child-box top-right"></div>
    <div class="child-box bottom-left"></div>
    <div class="child-box bottom-right"></div>
  </div>
    </div>
  );
};

// App Component (Main Entry)
function App() {
  return (
    <div className="App">
      <Greeting name="Farheen" />
      <BoxDesign />
    </div>
  );
}

export default App