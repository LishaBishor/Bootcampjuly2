import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Addposts from './Addposts';


function Viewposts() {
    const[data,setData]=useState([]);
    const[update,setUpdate]=useState(false);
    const[singlevalue,setSinglevalue]=useState([])
    const [userToken,setUsertoken]=useState(sessionStorage.getItem("usertoken"))
    const [userID,setUserid]=useState(sessionStorage.getItem("userId"))


    const fetchData=()=>{
       axios.get("http://localhost:5000/api/viewblogs/"+userToken)
        .then((response)=>{
          setData(response.data)  
        })
    }
    const deleteBlog=(id)=>{
        axios.delete("http://localhost:5000/api/deleteblog/"+id)
        .then((response)=>{
            console.log(response);
            if(response.data.message==="deleted blog successfully"){
      
                alert(response.data.message);
                window.location.reload(false)
          }
        })
    .catch(err=>console.log(err))
}
const updateBlog=(val)=>{
    console.log("update.clicked",val)
    setUpdate(true);
    setSinglevalue(val)
}
    useEffect(()=>{
        fetchData();
    },[])
    let finalJsx= <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12">
            <div className="row g-3">
             {data.map((value,index)=>{
             return  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 d-flex align-items-stretch">
             <div class="card mb-3">
                 <div class="row g-0">
                     <div class="col-md-4">
                         <img src={value.urlToImage} class="img-fluid rounded-start" alt="..." />
                     </div>
                     <div class="col-md-8">
                         <div class="card-body">
                             <h5 class="card-title">{value.title}</h5>
                             <p class="card-text">{value.description}</p>
                             <p class="card-text"><small class="text-body-secondary">Last updated at{value.publishedAt}</small></p>
                             <p class="card-text"><small class="text-body-secondary"><button className='btn btn-danger' onClick={()=> deleteBlog(value._id)}>Delete</button></small> &nbsp;
                              <small class="text-body-secondary"><button className='btn btn-primary' onClick={()=>updateBlog(value)}>Update</button></small></p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
             })} 
               
            </div>
        </div>
    </div>
</div>
if(update) finalJsx=<Addposts method='put' data={singlevalue}/>
    return (
       finalJsx
    )
}

export default Viewposts