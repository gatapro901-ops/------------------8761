import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './GlobalStyles.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // تسجيل الدخول
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='container'
    >
      <h1>تسجيل الدخول</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label>البريد الإلكتروني</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input-field'
          />
        </div>
        <div className='input-group'>
          <label>كلمة المرور</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input-field'
          />
        </div>
        <div className='input-group'>
          <label>تأكيد كلمة المرور</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='input-field'
          />
        </div>
        <button type='submit' className='submit-btn'>تسجيل الدخول</button>
      </form>
    </motion.div>
  );
}

export default App;