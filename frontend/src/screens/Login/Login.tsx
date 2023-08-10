// src/components/Auth/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { CustomButton } from '../../component/index.tsx';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Perform user login
      // Add your logic here
      const response = await axios.post('/api/login', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={style.container} >
      <h2 style={style.heading}>Login</h2>
      <form onSubmit={handleLogin}>
        <input style={style.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input style={style.input} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <CustomButton text={"Login"} onClick={handleLogin} btnStyle={style.btnStyle}/>
      </form>
    </div>
  );
};

export default Login;


const style={
  container:{
    // display:'flex',
    // justifyContent:'center',
    // alignItem:'center',
   backgroundColor:'red'
  },
  heading:{
    color:'white',
  },
  input:{
    width: "90%",
    height: "50px",
    paddingLeft: "20px",
    justifyContent: "center",
    border: "none",
    borderRadius: '20px',
    marginTop:'20px'
},
  btnStyle:{
    marginTop:'20px',
    padding: "20px 0px",
    width: "95%",
  }
}