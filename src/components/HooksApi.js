import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const HooksApi=(props)=>
{
    //State management
    const [users,setUsers]=useState([]);


const HandleReadApidata=async ()=>
{
    await axios
    .get('http://localhost:3000/react173')
    .then( (apiresult)=> setUsers(apiresult.data) )  
}


//delete The data...
const HandlingDeleteData=async (id)=>
{
    //alert(id)
    
    if(window.confirm(` Do You want delete ${id} Record data?` ) )
    {
        await axios.delete(`http://localhost:3000/react173/${id}`)
        
       HandleReadApidata();
    }
   
}


//RESTAPI_CALLS
useEffect(()=>{
            HandleReadApidata()
},[])

        return (<>

                <div className="container py-5">
                   

                   <table className="table table-dark mx-auto my-2">
                       <thead className="thead-light">
                           <tr>
                               <th>SNO</th>
                               <th>NAME</th>
                               <th>EMAIL</th>
                               <th>CITY</th>
                               <th>COURSE</th>
                                <th>PHONE</th>
                              
                               <th colSpan="3">ACTION</th>
                           </tr>
                       </thead>

                      <tbody>   
                            {
                                users.map( (res,index)=>{
                                    return(<tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{res.name}</td>
                                                    <td>{res.email}</td>
                                                    <th>{res.city}</th>
                                                    <th>{res.course}</th>
                                                  <td>{res.phone}</td>   
                                               
                                                    <td> <Link to={`${props.match.path}/view/${res.id}`} className="btn btn-primary text-white">View</Link></td>
                                                    <td> <Link to={`${props.match.path}/edit/${res.id}`} className="btn btn-info text-white">Edit</Link></td>
                                                    <td> <button onClick={ ()=>HandlingDeleteData(res.id) } className="btn btn-danger text-white">Delete</button></td>
                                            </tr>)
                                })
                            }
                    </tbody>
                   </table>
                    
                
                </div>

        </>)
    }


export default HooksApi