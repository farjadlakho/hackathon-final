import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-200">
            <LayoutGrid size={22} className="text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">Helplytics AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition">Home</Link>
          <Link to="/dashboard" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition">Explore</Link>
          <Link to="/leaderboard" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition">Leaderboard</Link>
          <Link to="/auth" className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-slate-800 transition shadow-md">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
