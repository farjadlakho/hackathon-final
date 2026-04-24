import React from 'react';
import { Trophy, Star, Medal } from 'lucide-react';

const Leaderboard = () => {
  const helpers = [
    { name: "Farjad Lakho", points: 1500, badge: "Expert", color: "bg-amber-100 text-amber-700" },
    { name: "Ali Ahmed", points: 1200, badge: "Top Helper", color: "bg-blue-100 text-blue-700" },
    { name: "Sara Khan", points: 900, badge: "Rising Star", color: "bg-purple-100 text-purple-700" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <div className="flex items-center gap-4 mb-12">
        <div className="bg-amber-400 p-4 rounded-3xl text-white shadow-xl shadow-amber-100">
          <Trophy size={32} />
        </div>
        <div>
          <h2 className="text-3xl font-black text-slate-900">Community Leaderboard</h2>
          <p className="text-slate-500 font-medium">Top contributors of Batch 16</p>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden">
        {helpers.map((helper, index) => (
          <div key={index} className="flex items-center justify-between p-8 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition">
            <div className="flex items-center gap-6">
              <span className="text-3xl font-black text-slate-200">0{index + 1}</span>
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-indigo-100">
                {helper.name[0]}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{helper.name}</h4>
                <span className={`text-[10px] uppercase tracking-[0.2em] font-black px-3 py-1 rounded-lg ${helper.color}`}>
                  {helper.badge}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-indigo-600 font-black text-2xl">
              <Star size={20} fill="currentColor" /> {helper.points}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
