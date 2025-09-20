// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home'; 
import Login from './pages/Login';
import About from './pages/AboutUs';
import Eternals from './pages/Eternals';
import Error from './pages/Error';

// Eternals user data WITH unique passwords
const eternalsUsers = {
  sersi: {
    name: 'Sersi',
    theme: 'sersi-theme',
    role: 'eternal',
    powers: 'Matter Manipulation',
    status: 'alive',
    password: 'eternal'
  },
  thena: {
    name: 'Thena',
    theme: 'thena-theme', 
    role: 'eternal',
    powers: 'Weapon Manifestation',
    status: 'alive',
    password: 'eternal'
  },
  gilgamesh: {
    name: 'Gilgamesh',
    theme: 'gilgamesh-theme',
    role: 'eternal', 
    powers: 'Super Strength',
    status: 'deceased',
    password: 'eternal'
  },
  kingo: {
    name: 'Kingo',
    theme: 'kingo-theme',
    role: 'eternal',
    powers: 'Energy Projection', 
    status: 'alive',
    password: 'eternal'
  },
  arishem: {
    name: 'Arishem',
    theme: 'arishem-theme',
    role: 'admin',
    powers: 'Celestial Judge',
    status: 'alive',
    password: 'celestial'  
  }
};

const NavBarLayout = ({ currentUser, onLogout }) => {
  return (
    <>
      <Nav currentUser={currentUser} onLogout={onLogout} />
      <Outlet context={{ currentUser, onLogout }} />
    </>
  );
};

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username, password) => {
    const user = eternalsUsers[username.toLowerCase()];
    if (user && password === user.password) {
      setCurrentUser(user);
      document.body.className = user.theme;
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    document.body.className = '';
  };

  const ProtectedRoute = ({ children, adminOnly = false }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    
    if (adminOnly && currentUser.role !== 'admin') {
      return <Navigate to="/home" />;
    }
    
    return children;
  };

  return (
    <Router>
      <div className={`app-container ${currentUser?.theme || ''}`}>
        <Routes>      
          <Route path="/" element={<Navigate to="/home" />} />
          <Route element={<NavBarLayout currentUser={currentUser} onLogout={handleLogout} />}>
            <Route path="/login" element={
              <Login onLogin={handleLogin} currentUser={currentUser} />
            } />
            <Route path="/home" element={
              <ProtectedRoute>
                <Home currentUser={currentUser} />
              </ProtectedRoute>
            } />
            <Route path="/about" element={
              <ProtectedRoute>
                <About currentUser={currentUser} />
              </ProtectedRoute>
            } />
            <Route path="/eternals" element={
              <ProtectedRoute adminOnly={true}>
                <Eternals currentUser={currentUser} eternalsUsers={eternalsUsers} />
              </ProtectedRoute>
            } />
            {/* Catch-all route for 404 errors - MUST be last */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;