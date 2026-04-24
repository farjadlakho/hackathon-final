import { useParams } from 'react-router-dom';
import { Bot, MessageSquare, CheckCircle, User, Calendar } from 'lucide-react';

const RequestDetail = () => {
  const { id } = useParams(); // URL se ID nikalne ke liye

  // Dummy data (Real app mein aap useEffect se backend se fetch karenge)
  const request = {
    title: "MongoDB Connection Error in Node.js",
    description: "I am trying to connect my local node server to MongoDB Atlas but it keeps giving me a timeout error. I have checked my IP whitelist and the URI string seems correct. Can anyone help me debug this? It's for my Batch 16 assignment.",
    urgency: "High",
    user: "Ali_Dev16",
    date: "Oct 24, 2023"
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 flex gap-8">
      {/* Left Column: Details */}
      <div className="flex-1">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              {request.urgency} Urgency
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Calendar size={14} /> {request.date}
            </span>
          </div>

          <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            {request.title}
          </h1>

          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-50">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">A</div>
            <div>
              <p className="text-sm font-bold text-gray-800">{request.user}</p>
              <p className="text-xs text-gray-500">MERN Stack Student</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg mb-10">
            {request.description}
          </p>

          <div className="flex gap-4">
            <button className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">
              <MessageSquare size={20} /> I Can Help
            </button>
            <button className="flex-1 bg-white text-green-600 border-2 border-green-100 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-50 transition">
              <CheckCircle size={20} /> Mark as Solved
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: AI Sidebar */}
      <div className="w-80">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-6 rounded-3xl text-white shadow-xl sticky top-24">
          <div className="flex items-center gap-2 mb-4">
            <Bot size={24} />
            <h3 className="font-bold text-lg">AI Insights</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2 text-indigo-200">AI Summary</p>
              <p className="text-sm leading-relaxed">
                User is facing a **Network Timeout** with MongoDB Atlas. Likely an **IP Whitelist** or **Firewall** issue.
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2 text-indigo-200">Recommended Skills</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] bg-white/20 px-2 py-1 rounded">MongoDB</span>
                <span className="text-[10px] bg-white/20 px-2 py-1 rounded">Backend</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetail;
