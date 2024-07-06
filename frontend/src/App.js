


import React from "react";
import Sidebar from "./components/Sidebar";
import Newsfeed from "./pages/Newsfeed";
import Home from './pages/Home';
import Addride from './pages/Addride';
import Currentride from './pages/Currentride';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Readmore from './pages/Readmore'; // Import Readmore component
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
//import cards from "./Carddata";
import { RideProvider } from './RideContext';

const MainLayout = ({ children }) => (
  <div className="dashboard">
    <Sidebar />
    <div className="content">
      {children}
    </div>
  </div>
);

function App() {
  const userRole = 'driver';
  return (
    <RideProvider>
    <BrowserRouter>
      <Routes>
        
      
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newsfeed" element={<MainLayout><Newsfeed /></MainLayout>} />
        <Route path="/addride" element={<MainLayout><Addride /></MainLayout>} />
        <Route path="/currentride" element={<MainLayout><Currentride userRole={userRole} /></MainLayout>} />
        <Route path="/readmore/:id" element={<MainLayout><Readmore userRole={userRole} /></MainLayout>} /> {/* Pass cards to Readmore */}

        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
      </Routes>
    </BrowserRouter>
    </RideProvider>
  );
}

export default App;
