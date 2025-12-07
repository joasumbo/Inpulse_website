import React, { useState } from 'react';
import { AnimatedSection, MagneticButton } from './SharedComponents';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 800));
    alert('Obrigado! Recebemos a sua mensagem.');
    setForm({ name: '', email: '', phone: '', message: '' });
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-orange-50/20 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Vamos Conversar</h2>
          <p className="text-gray-600">Pronto para criar algo extraordinário? Entre em contacto.</p>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="max-w-4xl mx-auto">
          <form onSubmit={submit} className="bg-white rounded-2xl p-6 shadow">
            <div className="grid md:grid-cols-2 gap-4">
              <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Nome" className="p-3 border rounded" />
              <input required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="p-3 border rounded" />
            </div>
            <div className="mt-4">
              <input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Telefone" className="w-full p-3 border rounded" />
            </div>
            <div className="mt-4">
              <textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Mensagem" className="w-full p-3 border rounded" rows={5} />
            </div>
            <div className="mt-4 text-right">
              <MagneticButton className="w-full md:w-auto" type={undefined} onClick={undefined}>
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
