import React, { useState, useContext } from 'react';
import { auth } from '../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import phone from '../assets/img/img_4.png';
import './styles/Login.scss';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext.jsx';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully');
      console.log('User logged in successfully:', userCredential.user);
      setUser(userCredential.user); 
      setEmail('');
      setPassword('');
      navigate('/account');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        toast.error('User not found');
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <img className="login-image" src={phone} alt="" />
      <div className="login-form-container">
        <h2 className="login-title">Login in to Exclusive</h2>
        <h3 className="login-subtitle">Enter your details below</h3>
        <div className="login-form">
          <main className="login-input-group">
            <div className="login-input-field">
              <input
                placeholder="Email or Phone Number"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-input-field">
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </main>
          <div className="login-buttons">
            <button className="login-button" onClick={handleLogin}>Log in</button>
            <h4>Forgot password?</h4>
          </div>
        </div>
      </div>
    </div>
  );
}