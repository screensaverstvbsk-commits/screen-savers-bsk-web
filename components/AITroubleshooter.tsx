
import React, { useState } from 'react';
import { troubleshootTV } from '../services/gemini';

const AITroubleshooter: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTroubleshoot = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);
    const result = await troubleshootTV(input);
    setResponse(result || "Could not generate diagnosis.");
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
          🤖
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 font-righteous">AI Tech Assistant</h3>
          <p className="text-slate-500 text-sm">Describe your TV issue for an instant diagnosis</p>
        </div>
      </div>

      <form onSubmit={handleTroubleshoot} className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., My Samsung TV has sound but the screen is black..."
          className="w-full h-32 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all resize-none text-slate-700"
        />
        <button
          type="submit"
          disabled={loading || !input}
          className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-md"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Analyzing Issue...
            </>
          ) : (
            'Get AI Diagnosis'
          )}
        </button>
      </form>

      {response && (
        <div className="mt-8 p-6 bg-red-50 rounded-2xl border border-red-100 text-slate-800 animate-fade-in prose prose-slate">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">Diagnosis Report</span>
            <button onClick={() => setResponse(null)} className="text-slate-400 hover:text-slate-600">✕</button>
          </div>
          <div className="whitespace-pre-wrap leading-relaxed text-sm">
            {response}
          </div>
          <div className="mt-6 pt-4 border-t border-red-200 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/919606960679?text=Hi, my TV has this issue: ${encodeURIComponent(input)}`}
              className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
            >
              WhatsApp Tech
            </a>
            <a
              href="tel:+919606960679"
              className="flex-1 bg-slate-900 text-white text-center py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors"
            >
              Call Specialist
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AITroubleshooter;
