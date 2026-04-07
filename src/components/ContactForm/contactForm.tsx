import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      'service_hciqa6d',       //  Service ID
      'template_er8qe7q',      //  Template ID
      form.current,            
      '0uwqu3LLplBiTwu4P'        //  Public Key из EmailJS
    )
    .then(() => {
      alert('Письмо успешно отправлено!');
      form.current?.reset();
    })
    .catch(err => {
      console.error('Ошибка при отправке:', err);
      alert('Ошибка при отправке письма, попробуйте ещё раз.');
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Contact Us</h2>
      <input type="text" name="name" placeholder="Имя" required style={{ width: '100%', marginBottom: '10px' }} />
      <input type="email" name="email" placeholder="Email" required style={{ width: '100%', marginBottom: '10px' }} />
      <input type="text" name="title" placeholder="Тема" style={{ width: '100%', marginBottom: '10px' }} />
      <textarea name="message" placeholder="Сообщение" required style={{ width: '100%', marginBottom: '10px' }} />
      <button type="submit" style={{ padding: '10px 20px' }}>Отправить</button>
    </form>
  );
};

export default ContactForm;