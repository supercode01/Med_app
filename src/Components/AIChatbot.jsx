// src/Components/AIChatbot.jsx
import React, { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "doctor", text: "Hello! How can I help you today?", time: "10:00 AM" },
    { sender: "patient", text: "Doctor, I have a headache since morning.", time: "10:01 AM" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add patient message
    setMessages((prev) => [
      ...prev,
      {
        sender: "patient",
        text: input,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setInput("");

    // Fake doctor typing
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "doctor",
          text: "I understand. Can you tell me if you also feel nausea or dizziness?",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="p-4 border-b bg-white flex items-center justify-between shadow-sm">
        <div>
          <h2 className="text-lg font-semibold">AI Chatbot</h2>
          <p className="text-sm text-gray-500">Conversation between patient and doctor</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "patient" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`w-full md:w-3/4 lg:w-2/3 px-4 py-3 rounded-lg text-sm shadow-sm ${
                msg.sender === "patient"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 border"
              }`}
            >
              <p>{msg.text}</p>
              <span className="block text-[11px] mt-1 opacity-70">{msg.time}</span>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="px-4 py-3 bg-white border rounded-lg text-sm shadow-sm flex space-x-2 items-center">
              <span className="text-gray-500">Doctor is typing</span>
              <span className="flex space-x-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-white">
        <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-transparent text-sm focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;
