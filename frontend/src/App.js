import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LayoutGrid, Bot, Bell } from 'lucide-react';

// Pages Import - Make sure these files exist in src/pages/
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import AiCenter from './pages/AiCenter';
import Auth from './pages/Auth';
import CreateRequest from './pages/CreateRequest.jsx'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F9FAFB]">
<nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-8 flex justify-between items-center sticky top-0 z-50">
  <div className="flex items-center gap-2">
    <Link to="/" className="flex items-center gap-2">
      <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg">
        <LayoutGrid size={20} />
      </div>
      <span className="font-bold text-xl text-gray-900 tracking-tight">Helplytics AI</span>
    </Link>
  </div>

  <div className="flex items-center gap-8 text-gray-500 font-semibold text-sm">
    <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
    <Link to="/dashboard" className="hover:text-indigo-600 transition">Explore</Link>
    <Link to="/leaderboard" className="hover:text-indigo-600 transition">Leaderboard</Link>
    
    <Link to="/ai-center" className="flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl hover:bg-indigo-100 transition">
      <Bot size={18} />
      <span>AI Center</span>
    </Link>

    <Link to="/auth" className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-slate-800 transition">
      Get Started
    </Link>
  </div>
</nav>


        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/ai-center" element={<AiCenter />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create" element={<CreateRequest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
