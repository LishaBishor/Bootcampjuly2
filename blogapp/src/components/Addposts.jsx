import React, { useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Addposts = (props) => {
  const navigate=useNavigate();
  const [userToken,setUsertoken]=useState(sessionStorage.getItem("usertoken"))
  const [userID,setUserid]=useState(sessionStorage.getItem("userId"))

  const[posts,setPosts]=useState(props.data);
  const inputHandler=(e)=>{
    const{name,value}=e.target;
    setPosts({
      ...posts,[name]:value
    })
    console.log(posts)
  }
  const addPost=()=>{
    let data={
      UserId:userID,
      token:userToken,
      title:posts.title,
      description:posts.description,
      urlToImage:posts.urlToImage

    }
    console.log("Add clicked")
    if(props.method==="post"){
       

    axios.post("http://localhost:5000/api/addblogs",data)
    .then((response)=>{
      console.log(response);
      if(response.data.message==="Added blog data successfully"){
        alert(response.data.message)
        navigate("/viewposts");
      }
      else{
        alert(response.data.message)
      }
     // if(response.data.message==="Added blog data successfully"){
       // alert(response.data.message)
      //  navigate("/viewposts")
     // }else{
     //   alert(response.data.message)
    //  }
    })
    .catch(err=>console.log(err))
  }
   if(props.method==="put"){
    console.log("posts",posts)
    axios.put("http://localhost:5000/api/updateblogs/"+posts._id,posts)
    .then((response)=>{
      console.log(response.data.message)
      if(response.data.message==="Updated sucessfully"){
        alert(response.data.message)
        window.location.reload(false)
      }else{
        alert("not updated")
      }
    }).catch(err=>console.log(err))
   }
}
  return (
    <div>
     
      <br/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12">
             <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12">
                  <textarea name="title" value={posts.title} onChange={inputHandler} id="" cols="30" rows="6" className='form-control' placeholder='Title of the post'></textarea>  
                </div>
                <div className="col col-12 col-sm-12 col-md-12">
                  <textarea name="description" value={posts.description} onChange={inputHandler} id="" cols="30" rows="6" className='form-control' placeholder='Type a post'></textarea>  
                </div>
                <div className="col col-12 col-sm-12 col-md-12">
                  <input type='url' name="urlToImage" value={posts.urlToImage} onChange={inputHandler}></input> 
                </div>
                <div className="col col-12 col-sm-12 col-md-12">
                  <button className="btn btn-success" onClick={addPost}>Submit</button>

                </div>
             </div>



            </div>
        </div>
      </div>
    </div>
  )
}

export default Addposts