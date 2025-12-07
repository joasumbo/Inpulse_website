import React, { useState, useEffect } from 'react';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="loader-content">
        <div className="pulse-rings">
          <div className="pulse-ring"></div>
          <div className="pulse-ring"></div>
          <div className="pulse-ring"></div>
        </div>
        <div className="loader-text">Inpulse</div>
      </div>
    </div>
  );
};

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      );
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateCursor);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isPointer ? 'scale(1.5)' : 'scale(1)',
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de entrar em contacto.%0A%0ANome: ${formData.name}%0AMorada: ${formData.address}%0AEmail: ${formData.email}%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/351960101116?text=${message}`, '_blank');
    setFormData({ name: '', address: '', email: '', message: '' });
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Fale Connosco</h3>
            <button onClick={() => setIsOpen(false)} className="chatbot-close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="chatbot-body">
            <p>Entre agora mesmo em contacto! Preencha os dados abaixo:</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Morada"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Mensagem"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="chatbot-submit">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
      <button 
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        )}
      </button>
    </div>
  );
};

// Magnetic Button (shared)
const MagneticButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}> = ({ children, className = '', onClick, variant = 'primary' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = React.useRef<HTMLButtonElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.18, y: y * 0.18 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const variants: Record<string, string> = {
    primary: 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg',
    secondary: 'bg-white text-gray-800 shadow-lg border border-gray-100',
    outline: 'border-2 border-red-500 text-red-600 bg-transparent',
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition-transform duration-200 ${variants[variant]} ${className}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      data-hover
    >
      {children}
    </button>
  );
};

// Simple scroll reveal wrapper
const useScrollAnimation = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
};

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const { ref, visible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `all 0.7s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const AnimatedCounter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done) {
        setDone(true);
        let start = 0;
        const duration = 1500;
        const step = Math.max(1, Math.floor(target / (duration / 16)));
        const t = setInterval(() => {
          start += step;
          if (start >= target) {
            setCount(target);
            clearInterval(t);
          } else setCount(start);
        }, 16);
      }
    }, { threshold: 0.6 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, done]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export { Loader, CustomCursor, Chatbot, MagneticButton, AnimatedSection, AnimatedCounter };
