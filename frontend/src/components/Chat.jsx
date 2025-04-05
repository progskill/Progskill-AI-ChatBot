import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    inputRef.current?.focus();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isAi: false }]);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { text: data.message, isAi: true }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { text: 'Sorry, there was an error processing your request.', isAi: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" flex flex-col h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-pink-600">Progskill AI</span> Chat Assistant
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 ">
        {messages.length === 0 ? (
          <div className="flex flex-col  items-center justify-center h-full text-center text-gray-500">
            <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-xl font-medium">Start a conversation</p>
            <p className="mt-2">Ask me anything!</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <ChatMessage key={index} message={message.text} isAi={message.isAi} />
          ))
        )}
        {isLoading && (
          <div className="flex items-center justify-center space-x-2 p-4">
            <div className="animate-bounce h-2 w-2 bg-pink-500 rounded-full"></div>
            <div className="animate-bounce h-2 w-2 bg-pink-500 rounded-full delay-100"></div>
            <div className="animate-bounce h-2 w-2 bg-pink-500 rounded-full delay-200"></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex-none p-6 bg-white border-t border-gray-200 shadow-lg">
        <form onSubmit={handleSubmit} className="max-w-7xl  mx-auto w-full">
          <div className="flex flex-col space-y-3">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 min-h-[60px] w-full rounded-2xl border-2 border-gray-300 px-6 py-4 text-base focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-all duration-200 pr-16"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 inline-flex items-center justify-center w-12 h-12 rounded-xl text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <PaperAirplaneIcon className="h-6 w-6 rotate-90" />
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center">
              Press Enter to send your message
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat; 