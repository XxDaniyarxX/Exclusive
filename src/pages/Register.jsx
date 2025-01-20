import './styles/Register.scss';
import phone from '../assets/img/img_4.png';
import google from '../assets/svg/google.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
 
    async function signUp() {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res);
        if (res) {
          toast.success('Email created successfully gg');
          setEmail('');
          setPassword('');
          navigate('/login');
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
   
  


  return (
    <div className="register-container">
      <img className="register-image" src={phone} alt="" />
      <div className="register-form-container">
        <h2 className="register-title">Create an account</h2>
        <h3 className="register-subtitle">Enter your details below</h3>
        <div className="register-form">
          <main className="register-input-group">
            <div className="register-input-field">
              <input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="register-input-field">
              <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="register-input-field">
              <input
                placeholder="Name"
                type="text"
              />
            </div>
        
          </main>
          <div className="register-buttons">
            <button
              className="register-create-account-btn"
              onClick={() => signUp()}
            >
              Create Account
            </button>
            <button className="register-google-btn">
              <h4>
                <img src={google} alt="" /> Sign up with Google
              </h4>
            </button>
            <h4 className="register-login-link">
              Already have account?{' '}
              <Link to="/login">Log in</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
