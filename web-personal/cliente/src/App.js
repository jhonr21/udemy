import React from 'react';

import './App.scss';
import Admin from './pages/Admin';
import SignIn from './pages/Admin/SignIn';
import Home from './pages/Home';
import Contact from './pages/Admin/Contact'
function App() {
  
  
  return (
      
    <div className="app">
     <h1>estamos en App</h1>
     <Admin/>
     <SignIn/>
     <Home/>
     <Contact/>
    </div>
    
    
  );

}

export default App;