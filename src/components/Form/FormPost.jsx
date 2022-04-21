import React, { useState } from 'react';

export default function FormPost() {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');

  return (
    <form>
      <label htmlFor="name">
        <input
          name="name"
          data-testid="input-name"
          placeholder="Your name"
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </label>
      <br />
      <label htmlFor="email">
        <input
          name="email"
          data-testid="input-email"
          placeholder="Your email"
          type="email"
          value={email}
          onChange={({ target }) => setMail(target.value)}
        />
      </label>
    </form>
  );
}
