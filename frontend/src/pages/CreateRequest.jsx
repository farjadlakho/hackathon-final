import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Send } from 'lucide-react';

const CreateRequest = () => {
  const [formData, setFormData] = useState({ title: '', description: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Backend URL (Make sure your backend is running)
      await axios.post('http://localhost:5000/api/requests', {
        ...formData,
        user: "Batch16_User"
      });
      navigate('/dashboard');
    } catch (err) {
      console.error("Error creating request", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-20 px-6">
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
        <div className="flex items-center gap-2 mb-8 text-indigo-600">
          <Sparkles size={24} />
          <h2 className="text-2xl font-black text-slate-900">New Help Request</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            type="text" 
            placeholder="What do you need help with?"
            className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
          <textarea 
            placeholder="Describe your problem in detail..."
            className="w-full p-4 bg-slate-50 border-none rounded-2xl h-40 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
          />
          <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition flex items-center justify-center gap-2">
            Post to Feed <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRequest;
