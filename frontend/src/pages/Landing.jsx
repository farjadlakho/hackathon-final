import React from 'react';
import { ArrowRight, Sparkles, Zap, Shield, Star } from 'lucide-react';

const Landing = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Blobs - Like the link */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[120px] opacity-50 z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] opacity-50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Sparkles size={16} className="text-indigo-600" />
            <span className="text-indigo-600 text-sm font-semibold tracking-wide">AI-Powered Community Support</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
            Empowering Communities <br /> 
            Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Smart Collaboration</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed">
            Helplytics AI connects students and mentors in real-time. Get the help you need, 
            contribute your skills, and earn recognition through our AI-driven trust system.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:scale-[1.02] transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2">
              Join the Community <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              Learn More
            </button>
          </div>

          {/* Stats Bar (Dummy like the link) */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100 pt-16">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">500+</h3>
              <p className="text-slate-500 font-medium">Daily Requests</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">98%</h3>
              <p className="text-slate-500 font-medium">Solved Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">4.9/5</h3>
              <p className="text-slate-500 font-medium">Trust Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
