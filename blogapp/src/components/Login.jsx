import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();
  const[user,setUser]=useState({});
  const inputHandler=(e)=>{
    setUser({
      ...user,[e.target.name]:e.target.value
    })
    console.log(user)
  }
  const addHandler=()=>{
    
    console.log("button clicked")
    axios.post("http://localhost:5000/api/login",user)
    .then((response)=>{
      if(response.data.message==="Login Successfully!!!"){
        const token=response.data.token;
        const userid=response.data.data._id;
        console.log(token)
        console.log(userid)
        sessionStorage.setItem("usertoken",token);
        sessionStorage.setItem("userId",userid);
       alert(response.data.message) 
       navigate('/viewposts')
      }
    })
  }
  return (
    <div>
        <h1>BlogApp-Login</h1>
     <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-ig-12">
                      <label htmlFor=''className='form-label'>UserName</label>  
                      <input type='text' className='form-control' name='username' onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-ig-12">
                    <label htmlFor=''className='form-label'>Password</label>  
                      <input type='password' className='form-control'name='password' onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-ig-12">
                        <button className='bttn btn-success' onClick={addHandler} >LOGIN</button>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-ig-12">
                        <a href='/register'>New Users Click Here</a>
                    </div>
                </div>
            </div>
        </div>
     </div>



    </div>
  )
}

export default Login