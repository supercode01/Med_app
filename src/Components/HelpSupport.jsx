// src/Components/HelpSupport.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Mail, MessageCircle } from "lucide-react";

const HelpSupport = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I use the AI Chatbot?",
      answer:
        "Go to the sidebar, select 'AI Chatbot', and start typing your questions. The chatbot will respond in real-time.",
    },
    {
      question: "Can I update my patient information?",
      answer:
        "Yes. Navigate to the 'Settings' section in the sidebar and update your personal or medical information.",
    },
    {
      question: "What if I face technical issues?",
      answer:
        "You can contact our support team via email or chat using the options below.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="p-4 border-b bg-white shadow-sm">
        <h2 className="text-lg font-semibold">Help & Support</h2>
        <p className="text-sm text-gray-500">
          Find answers to common questions or contact our support team
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <h3 className="text-md font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-sm font-medium hover:bg-gray-50"
                >
                  {faq.question}
                  {openIndex === index ? (
                    <ChevronUp size={18} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-3 text-sm text-gray-600 bg-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <h3 className="text-md font-semibold mb-4">Need More Help?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Our support team is here to help you with any issues.
          </p>
          <div className="flex space-x-3">
            <a
              href="mailto:support@scansehati.com"
              className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
            >
              <Mail size={18} className="mr-2" />
              Email Support
            </a>
            <button className="flex items-center px-4 py-2 border text-sm rounded-md hover:bg-gray-100">
              <MessageCircle size={18} className="mr-2" />
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
