import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Olá! Como posso ajudar? 👋',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickResponses = [
    'Quero um orçamento',
    'Ver serviços',
    'Falar no WhatsApp',
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Open WhatsApp with the message
    const phoneNumber = '351960101116';
    const message = encodeURIComponent(inputValue);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    // Add user message to chat
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Bot response confirming WhatsApp redirect
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: 'Abrindo WhatsApp para continuar a conversa... 📱',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleQuickResponse = (response: string) => {
    setInputValue(response);
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-content">
                <div className="chatbot-avatar">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3>Inpulse Assistant</h3>
                  <p>Online agora</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`message ${message.sender}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="message-content">
                    <p>{message.text}</p>
                    <span className="message-time">
                      {message.timestamp.toLocaleTimeString('pt-PT', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Responses */}
            {messages.length <= 2 && (
              <div className="chatbot-quick-responses">
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickResponse(response)}
                    className="quick-response-btn"
                  >
                    {response}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Escreva a sua mensagem..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend} className="send-btn">
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
