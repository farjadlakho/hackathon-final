import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Activity, Clock, Plus, Filter } from 'lucide-react';

const Dashboard = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const res = await axios.get('http://localhost:5000/api/requests');
      setRequests(res.data);
    };
    fetchRequests();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <Activity className="text-indigo-600 mb-4" />
          <h3 className="text-slate-500 text-sm font-bold uppercase tracking-tight">Active Requests</h3>
          <p className="text-3xl font-black text-slate-900">{requests.length}</p>
        </div>
        {/* Do aur cards aise hi dummy stats ke sath */}
      </div>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Explore Feed</h2>
        <Link to="/create" className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2">
          <Plus size={18} /> New Request
        </Link>
      </div>

      {/* Requests List */}
      <div className="grid gap-4">
        {requests.map((req) => (
          <div key={req._id} className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-indigo-200 transition group shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${req.urgency === 'High' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>
                  {req.urgency} Urgency
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 group-hover:text-indigo-600 transition">{req.title}</h3>
                <p className="text-slate-500 mt-2 line-clamp-2">{req.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
