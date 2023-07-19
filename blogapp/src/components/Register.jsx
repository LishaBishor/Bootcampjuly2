import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"


const Register = () => {
  const[inputs,setInputs]=useState({});
  const navigate=useNavigate()

  const inputHandler=(e)=>{
    console.log("onchange")
    setInputs({
      ...inputs,[e.target.name]:e.target.value
    })
   console.log(inputs) 
  }
  const submitHandler=()=>{
    console.log("clicked",inputs);
    
    axios.post("http://localhost:5000/api/signup",inputs)
    .then((response)=>{
     console.log(response);
     if(response.data.message==="Registered Successfully"){
      
      alert(response.data.message);

      navigate('/')
     }
    })
    .catch(err=>console.log(err))
  }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sn-12 col-md-12 col-lg-12">
                <div className="row g-3">
                    <div className=" col-12 col-sm-6 col-md-6 col-lg-6">
                      <label htmlFor=''className='form-label'>Name</label>  
                      <input type='text' className='form-control' name='name'onChange={inputHandler}/>
                    </div>
                    <div className=" col-12 col-sm-6 col-md-6 col-ig-6">
                      <label htmlFor=''className='form-label'>Email Id</label>  
                      <input type='text' className='form-control' name='emailid'onChange={inputHandler}/>
                    </div>
                    <div className=" col-12 col-sm-12 col-md-12 col-ig-12">
                      <label htmlFor=''className='form-label'>Address</label>  
                      <textarea  name='address'onChange={inputHandler} id="" cols="30" rows="15" className='form-control'></textarea>
                    </div>
                    <div className=" col-12 col-sm-6 col-md-6 col-ig-6">
                      <label htmlFor=''className='form-label'>Phone</label>  
                      <input type='text' className='form-control'name='phoneno'onChange={inputHandler}/>
                    </div>
                    <div className=" col-12 col-sm-6 col-md-6 col-ig-6">
                      <label htmlFor=''className='form-label'>UserName</label>  
                      <input type='text' className='form-control'name='username'onChange={inputHandler}/>
                    </div>
                    <div className=" col-12 col-sm-6 col-md-6 col-ig-6">
                      <label htmlFor=''className='form-label'>Password</label>  
                      <input type='password' className='form-control'name='password'onChange={inputHandler}/>
                    </div>
                    <div className=" col-12 col-sm-12 col-md-12 col-ig-12">
                     <button className="btn btn-danger" onClick={submitHandler}>Register</button>
                    </div>
                    <div className=" col-12 col-sm-12 col-md-12 col-ig-12">
                     <a href='/'>Back to Login</a>

                    </div>

                  




                  
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register