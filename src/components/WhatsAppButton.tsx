import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://bit.ly/ZapEncantoMensagem"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
    >
      <MessageSquare size={24} />
    </a>
  );
};

export default WhatsAppButton;