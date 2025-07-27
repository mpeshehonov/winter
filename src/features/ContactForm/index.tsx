import { useState } from 'react';
import styled from '@emotion/styled';

type Props = {
  onSubmit: () => void;
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function ContactForm({ onSubmit }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Интеграция с Supabase для отправки
    console.log('Form submitted:', { name, email, message });
    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <textarea placeholder="Сообщение" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">Отправить</button>
    </Form>
  );
}

export default ContactForm; 