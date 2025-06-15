import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 
const Login = () => {
  const { login, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const success = isLogin ? login(email, password) : signup(email, password);
    if (success) {
      alert('Success!');
      navigate('/');
    } else {
      alert('Error: Invalid credentials or user exists');
    }
  };

  return (
    <div className="login-container" style={{ padding: 20 }}>
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleSubmit}>{isLogin ? 'Login' : 'Signup'}</button>
      <p onClick={() => setIsLogin(!isLogin)} style={{ color: 'blue', cursor: 'pointer' }}>
        {isLogin ? 'New user? Signup' : 'Already a user? Login'}
      </p>
    </div>
  );
};

export default Login;
