// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Nav from './Nav';
import Home from './pages/Home'; 
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import Calculator from './pages/Calculator';



const NavBarLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
    )
  }

function App() {
  return (
    <Router>
      <Routes>      
        <Route element = {<NavBarLayout />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
