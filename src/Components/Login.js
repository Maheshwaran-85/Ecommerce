import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup"
import { ErrorMessage, Formik } from 'formik'

function Login() {
  let nav=useNavigate()
  let [login, setlogin] = useState({
    username: "",
    pwd: ""
  });

  let user = localStorage.getItem("username");
  let userpwd = localStorage.getItem("pwd");

  let handleinput = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const schema=yup.object().shape({
    username:yup.string().max(15).required("Its Mandatory For Logining"),
    pwd: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "wrong passsword").max(15, "Enter only up to 10 characters").required("This field is required"),

  })

  let handleSubmit = () => {
  
    if (login.username === user && login.pwd === userpwd) {
      alert("Logged in successfully");
      nav('/Dashboard')
    } else {
      alert("Invalid username or password");
    }
    setlogin({
      username: "",
      pwd: ""
    });
  
  };

  return (
    <div className="login-div">
      <div className="signup-container">
        <div className="signup-card">
          <h1 className="signup-title">Login</h1>

          <Formik 
          initialValues={login}
          validationSchema={schema}                            
          onSubmit={handleSubmit}>
            {({handleSubmit,handleChange})=>(
            
          <form onSubmit={handleSubmit}>
            <input
              type="text"onChange={(e)=>{handleinput(e);handleChange(e)}} name="username"value={login.username} placeholder="Enter Username" required  />
            <ErrorMessage name="username"  />
            <input type="text"onChange={(e)=>{handleinput(e);handleChange(e)}}name="pwd"value={login.pwd} placeholder="Enter Password"
              
            />
             <ErrorMessage name="pwd"  />
            <button type="submit">Login</button>
            <p className='login-text'>If You Are an New  User? <a onClick={()=>nav("/Signup")} >Create Account</a></p>

         

          </form>
          )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;

