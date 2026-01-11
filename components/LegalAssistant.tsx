
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface LegalAssistantProps {
  onClose: () => void;
}

const LegalAssistant: React.FC<LegalAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Welcome to Advk. I am your AI concierge. How can I assist you with your legal inquiries today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...messages.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: "You are the official AI assistant for Advk, a prestigious, high-end law firm. Your tone is professional, sophisticated, empathetic, and knowledgeable. You provide general legal information, clarify legal terms, and explain common legal processes. You must ALWAYS clarify that you are an AI and not a licensed attorney, and your advice is for informational purposes only.",
          maxOutputTokens: 800,
        }
      });

      const assistantReply = response.text || "I apologize, I'm having trouble processing that request at the moment.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantReply }]);
    } catch (error) {
      console.error('Error calling Gemini:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I encountered an error. Please try again or contact our firm directly for urgent matters." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-background-dark w-full max-w-2xl h-[80vh] rounded-[40px] overflow-hidden shadow-2xl flex flex-col border border-white/10">
        <div className="p-8 border-b border-white/5 flex items-center justify-between bg-card-dark">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-background-dark">
              <span className="material-symbols-outlined text-2xl">smart_toy</span>
            </div>
            <div>
              <h2 className="text-xl font-display font-semibold tracking-tight">Advk Assistant</h2>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Strategic AI Counsel</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-6 bg-black/40">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-6 rounded-3xl leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-primary text-background-dark rounded-tr-none' 
                  : 'bg-card-dark border border-white/5 text-slate-200 rounded-tl-none'
              }`}>
                <p className="text-sm md:text-base whitespace-pre-wrap">{m.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-card-dark p-5 rounded-3xl rounded-tl-none border border-white/5 flex space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-8 border-t border-white/5 bg-card-dark">
          <div className="relative flex items-center">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about our expertise or legal processes..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 pr-16 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm text-white"
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-4 bg-primary text-background-dark rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
          <p className="text-[9px] text-center mt-6 text-slate-500 uppercase tracking-[0.3em] font-bold">
            Encrypted • Secure • Advk Strategic AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalAssistant;
