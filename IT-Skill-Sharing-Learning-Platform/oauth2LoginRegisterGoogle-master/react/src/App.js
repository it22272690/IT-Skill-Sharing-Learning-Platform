import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import CreateResource from './components/CreateResource';
import ViewResources from './components/ViewResources';
import UpdateResource from './components/UpdateResource';
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          
          {/* Homepage */}
          <Route path="/home" element={<Home />} />
          
          {/* Login page */}
          <Route path="/login" element={<Login/>} />
          
          {/* Registration page */}
          <Route path="/register" element={<Register  />} />
          <Route path="/create-resource" element={<CreateResource />} />
          <Route path="/resources/:id" element={<ViewResources />} />
          <Route path="/resources/update/:resourceId" element={<UpdateResource />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
