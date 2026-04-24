import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('Need Help');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();

    // ✅ FIXED BASE URL
    const baseUrl = "http://127.0.0.1:8000";

    // ✅ FIXED ENDPOINT (IMPORTANT CHANGE)
    const endpoint = isLogin 
      ? '/api/auth/login' 
      : '/api/auth/signup';

    const payload = isLogin 
      ? { email, password } 
      : { email, password, role };

    try {
      const res = await axios.post(`${baseUrl}${endpoint}`, payload);

      alert(res.data.message || "Success!");

      navigate('/dashboard');

    } catch (err) {
      console.error("Auth Error:", err);

      const msg =
        err.response?.data?.message ||
        "❌ Connection Failed! Backend check karo";

      alert(msg);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 pt-20">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-gray-100">
        
        <h2 className="text-3xl font-black text-center text-gray-900 mb-2">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        <p className="text-center text-gray-500 mb-8 font-medium">
          MERN Auth System
        </p>

        <form onSubmit={handleAuth} className="space-y-5">

          {/* Role Selection */}
          {!isLogin && (
            <div className="flex gap-2 mb-4">
              {['Need Help', 'Can Help'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                    role === r
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          )}

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition shadow-lg"
          >
            {isLogin ? 'Sign In' : 'Join Now'}
          </button>
        </form>

        {/* Toggle */}
        <div className="text-center mt-8 text-gray-600">
          <span>
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}
          </span>

          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 font-bold ml-2 hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;