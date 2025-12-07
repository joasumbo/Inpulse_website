import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-red-50/30 py-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <img src="/inpulse_logo.png" alt="Inpulse" className="h-10 mx-auto mb-4" />
        <nav className="flex justify-center gap-6 mb-4">
          {['Início','Sobre','Serviços','Contacto'].map((i)=> (
            <a key={i} href={`#${i.toLowerCase()}`} className="text-gray-600 hover:text-red-600">{i}</a>
          ))}
        </nav>
        <p className="text-gray-500 text-sm">© 2024 Inpulse. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

