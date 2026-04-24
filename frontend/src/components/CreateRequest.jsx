import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Send } from 'lucide-react';

const CreateRequest = () => {
  const [formData, setFormData] = useState({ title: '', description: '', category: 'General' });
  const [aiLoading, setAiLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Backend API call (MERN)
      await axios.post('http://localhost:5000/api/requests', {
        ...formData,
        user: "Student_Batch16" // Temporary user identity
      });
      navigate('/dashboard');
    } catch (err) {
      console.error("Error creating request", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100/50">
        <div className="flex items-center gap-2 mb-6 text-indigo-600">
          <Sparkles size={20} />
          <h2 className="text-2xl font-bold text-slate-900">Create Help Request</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Request Title</label>
            <input 
              type="text" 
              className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="e.g., Need help with Redux Toolkit"
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Detailed Description</label>
            <textarea 
              className="w-full p-4 bg-slate-50 border-none rounded-2xl h-40 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Explain what you are struggling with..."
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
            />
          </div>

          <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100">
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">AI Assistant</p>
            <p className="text-sm text-slate-600 italic">"I will automatically detect your urgency level and categorize your request."</p>
          </div>

          <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2">
            Post Request <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRequest;
