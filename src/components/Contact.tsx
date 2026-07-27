import React, { useState } from 'react';
import { AnimatedSection, MagneticButton } from './SharedComponents';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', subject: '' });
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setMessage('');

    try {
      const { error } = await supabase.from('contacts').insert([{
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      }]);

      if (error) throw error;

      setMessage('✓ Obrigado! Recebemos a sua mensagem e responderemos em breve.');
      setForm({ name: '', email: '', phone: '', message: '', subject: '' });
    } catch (error) {
      setMessage('✗ Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setSending(false);
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-orange-50/20 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Vamos Conversar</h2>
          <p className="text-gray-600">Pronto para criar algo extraordinário? Entre em contacto.</p>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="max-w-4xl mx-auto">
          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`mb-6 p-4 rounded-xl flex items-center gap-3 shadow-lg ${
                  message.includes('✓') 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border border-green-200' 
                    : 'bg-gradient-to-r from-red-50 to-rose-50 text-red-800 border border-red-200'
                }`}
              >
                {message.includes('✓') ? (
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-green-600" />
                ) : (
                  <XCircle className="w-6 h-6 flex-shrink-0 text-red-600" />
                )}
                <p className="font-medium flex-1">
                  {message.replace('✓ ', '').replace('✗ ', '')}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <form onSubmit={submit} className="bg-white rounded-2xl p-6 shadow">
            <div className="grid md:grid-cols-2 gap-4">
              <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Nome" className="p-3 border rounded" disabled={sending} />
              <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="p-3 border rounded" disabled={sending} />
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Telefone (opcional)" className="p-3 border rounded" disabled={sending} />
              <input value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} placeholder="Assunto (opcional)" className="p-3 border rounded" disabled={sending} />
            </div>
            <div className="mt-4">
              <textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Mensagem" className="w-full p-3 border rounded" rows={5} disabled={sending} />
            </div>
            <div className="mt-4 text-right">
              <MagneticButton className="w-full md:w-auto" disabled={sending}>
                {sending ? 'A enviar...' : 'Enviar Mensagem'}
              </MagneticButton>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
