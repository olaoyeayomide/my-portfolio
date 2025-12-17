import React, { useState, useRef, useEffect } from 'react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage, Tab } from '../types';
import { Send, Smile, Cpu } from './Icons';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hi there! I'm Alex's AI assistant. Curious about his work with React, Cloud Architecture, or his favorite coffee? Ask me anything!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateChatResponse(input);
    
    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="border border-github-border rounded-md bg-github-bg h-[500px] flex flex-col shadow-xl">
      <div className="p-4 border-b border-github-border flex items-center gap-3 bg-github-card rounded-t-md">
        <div className="p-2 bg-purple-900/30 rounded-full border border-purple-500/50">
           <Cpu size={20} className="text-purple-400" />
        </div>
        <div>
          <h3 className="font-semibold text-github-text">Ask Alex's AI Avatar</h3>
          <p className="text-xs text-github-muted">Powered by Gemini 2.5 Flash</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                msg.role === 'user' 
                  ? 'bg-github-accent text-white rounded-br-none' 
                  : 'bg-github-card border border-github-border text-github-text rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-github-card border border-github-border p-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
              <span className="w-2 h-2 bg-github-muted rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-github-muted rounded-full animate-bounce delay-100"></span>
              <span className="w-2 h-2 bg-github-muted rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="p-3 border-t border-github-border bg-github-card rounded-b-md">
        <div className="relative flex items-center">
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my projects..."
            className="w-full bg-github-bg border border-github-border text-github-text rounded-full py-2.5 pl-4 pr-12 text-sm focus:outline-none focus:border-github-accent transition-colors"
            />
            <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-1.5 text-github-muted hover:text-github-accent disabled:opacity-50 transition-colors"
            >
                <Send size={18} />
            </button>
        </div>
        <div className="text-center mt-2 text-[10px] text-github-muted">
            AI can make mistakes. Please check important info.
        </div>
      </form>
    </div>
  );
};

export default AIChat;