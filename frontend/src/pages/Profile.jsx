import { ShieldCheck, Award, Zap, Settings } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        {/* Header/Cover */}
        <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        
        <div className="px-10 pb-10">
          <div className="relative flex justify-between items-end -mt-12 mb-8">
            <div className="w-24 h-24 bg-white p-2 rounded-3xl shadow-lg">
              <div className="w-full h-full bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 text-3xl font-black">
                A
              </div>
            </div>
            <button className="bg-gray-100 p-3 rounded-xl text-gray-600 hover:bg-gray-200 transition">
              <Settings size={20} />
            </button>
          </div>

          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-black text-gray-900">Ali Ahmed</h2>
              <p className="text-gray-500 font-medium">MERN Stack Enthusiast | Batch 16</p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1 text-sm font-bold bg-green-50 text-green-600 px-3 py-1 rounded-lg">
                  <ShieldCheck size={16} /> Trust Score: 98
                </div>
                <div className="flex items-center gap-1 text-sm font-bold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg">
                  <Award size={16} /> Elite Helper
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-indigo-600">24</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Contributions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
