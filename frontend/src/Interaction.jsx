import { useState } from 'react';
import { Send, User } from 'lucide-react';

const Interaction = () => {
  const [msg, setMsg] = useState('');
  const [chat, setChat] = useState([
    { role: 'helper', text: 'Hey! I saw your request about MongoDB. I can help you fix the connection string.' },
    { role: 'user', text: 'That would be great! I am getting a timeout error.' }
  ]);

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm h-[500px] flex flex-col">
        <div className="p-6 border-b border-gray-50 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">S</div>
          <div>
            <h3 className="font-bold text-gray-800">Chat with Sara (Helper)</h3>
            <p className="text-xs text-green-500 font-medium">Online</p>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {chat.map((c, i) => (
            <div key={i} className={`flex ${c.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                c.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-gray-100 text-gray-800 rounded-tl-none'
              }`}>
                {c.text}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-50 flex gap-2">
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="flex-1 bg-gray-50 border-none rounded-xl px-4 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interaction;
