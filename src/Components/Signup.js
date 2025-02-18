import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css'; // Import the CSS file for custom styles
import { useNavigate } from 'react-router-dom';
import * as yup from "yup"
import { ErrorMessage,Formik } from 'formik';
import { matches } from 'yup';

function Signup() {
    let nav = useNavigate();
    const [signup, setsignup] = useState({   
        username: "",
        pwd: "",
        confirmpassword: "",
        email: "",
        phone: "",
        gender: "",
    });

    const handleinput = (e) => {
        setsignup({ ...signup, [e.target.name]: e.target.value });
    };
     const schema=yup.object().shape({
    username:yup.string().min(5,"minimum 5 char req").max(10,"char exeeded").required("Its Mandatory For Logining"),
    pwd: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "enter a strong password").max(15, "Enter only up to 10 characters").required("This field is required"),
    confirmpassword: yup.string().oneOf([yup.ref('pwd'), null], 'Passwords must match').required('Confirm Password is required'),
    email:yup.string().email("invalid email format").required(),
    phone: yup.string().matches(/^\d{10}$/, "Enter only 10 digits").required("This field is required")
        

     })

    const handleSubmit = (e) => {
       
        console.log(signup);
        alert(`Registration successfully done for ${signup.username}`);
        localStorage.setItem("username", signup.username);
        localStorage.setItem("pwd", signup.pwd);

        setsignup({
            username: "",
            pwd: "",
            confirmpassword: "",
            email: "",
            phone: "",
            gender: "",
        });
        nav('/')
    };

    return (
        <div className="signup-div">
            <div className="signup-container">
                <div className="signup-card">
                    <h1 className="signup-title">Signup</h1>
                    <Formik 
                    initialValues={signup}
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                    >
                          {({handleSubmit,handleChange})=>(

              
                    <form onSubmit={handleSubmit}>
                        <input type="text"onChange={(e)=>{handleinput(e);handleChange(e)}}name="username"value={signup.username}placeholder="Enter Username"required
                        />     <ErrorMessage name="username"  />
                        <input type="text"onChange={(e)=>{handleinput(e);handleChange(e)}}name="pwd"value={signup.pwd}placeholder="Enter Password"required
                        /><ErrorMessage name="pwd"/>
                        <input type="text" onChange={(e)=>{handleinput(e);handleChange(e)}} name="confirmpassword" value={signup.confirmpassword} placeholder="Confirm Password" required
                        /><ErrorMessage name="confirmpassword"  />
                        <input type="email" onChange={(e)=>{handleinput(e);handleChange(e)}} name="email" value={signup.email} placeholder="Enter Email" required
                        /><ErrorMessage name="email"  />
                        <input type="tel"onChange={(e)=>{handleinput(e);handleChange(e)}}name="phone"value={signup.phone}placeholder="Enter Phone"required
                        /><ErrorMessage name="phone"  />
                        <button type="submit">Signup</button>
                    </form>
                          )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Signup;
