import React from 'react';
import './App.css';

import ViewPosts from './components/ViewPosts';
import EditPost from './components/EditPost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Profile from './pages/Profile';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/viewposts" element={<ViewPosts />} />
         <Route path="/editpost/:id" element={<EditPost />} />
          {/* Homepage */}
          <Route path="/home" element={<Home />} />
          
          {/* Login page */}
          <Route path="/login" element={<Login/>} />
          
          {/* Registration page */}
          <Route path="/register" element={<Register  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
