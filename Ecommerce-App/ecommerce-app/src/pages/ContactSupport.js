import React, { useState } from 'react';

const ContactSupport = () => {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const messages = JSON.parse(localStorage.getItem('supportMessages')) || [];
    messages.push(query);
    localStorage.setItem('supportMessages', JSON.stringify(messages));
    setSubmitted(true);
    setQuery('');
  };

  return (
    <div className="contact-support-container" style={{ padding: 20 }}>
      <h2>Contact Support</h2>
      <textarea value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Describe your issue" rows={4} /><br />
      <button onClick={handleSubmit}>Send</button>
      {submitted && <p style={{ color: 'green' }}>Your message has been sent!</p>}
    </div>
  );
};

export default ContactSupport;
