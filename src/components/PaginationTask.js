
import axios from 'axios';
import React , { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Pager from './Pager'


const url="https://jsonplaceholder.typicode.com/posts";
const PaginationTask=(props)=> 
{


const [Posts ,setPosts]=useState([]);

const [postsperAction ,setPostsperAction]=useState(10);



const [currentpage ,setcurrentpage]=useState(1);


const indexOfLastPost=currentpage*postsperAction

const indexOfFirstPost=indexOfLastPost-postsperAction

const currentPosts=Posts.slice(indexOfFirstPost,indexOfLastPost)

useEffect(()=>{

    axios
    .get(url)
    .then( (apiresult)=> setPosts(apiresult.data) )  
    
},[])


const paginate=(no)=>
{
    setcurrentpage(no);
}


return(<>
  <div className="container py-5">


  <Pager postsperAction={postsperAction} totalPosts={Posts.length} 
  
  
  paginate={ paginate}/>

      <h2 className="text-center py-3">Pagination Task</h2>
    

      <div className="row">

          {
              currentPosts.map( (res,index)=>
              
              {
                return(
                  <div className="col-lg-4" key={index}>

                          <div className="card my-2">
                             
                              {/*<img src={res.thumbnailUrl} className="card-img-top" />*/}
                             
                              <div className="card-body">
                                  <h6 className="card-text">
                                          {res.id}.{res.title}
                                  </h6>

                                  <p classname="text-justify">
                                      {res.body}
                                  </p>
                          
                              </div>
                          </div>
                  </div>
                  )
              })

          } 
                
              
          

      </div>


      
  </div>
</>)
    
}


export default  PaginationTask