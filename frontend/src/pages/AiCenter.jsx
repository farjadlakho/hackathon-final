import React from 'react';
import { Bot, TrendingUp, Lightbulb } from 'lucide-react';

const AiCenter = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
        <Bot className="text-indigo-600" /> AI Insights Center
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-8 rounded-[2.5rem] text-white shadow-2xl">
          <TrendingUp className="mb-4 opacity-80" />
          <h3 className="text-xl font-bold mb-2">Help Trends</h3>
          <p className="text-indigo-100 leading-relaxed">Most requests this week are related to **React Context API** and **Deployment**. We suggest hosting a workshop.</p>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/50">
          <Lightbulb className="text-amber-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Suggestions</h3>
          <p className="text-slate-500">Based on your skills, you should check out the latest MongoDB requests in the feed.</p>
        </div>
      </div>
    </div>
  );
};

export default AiCenter;
