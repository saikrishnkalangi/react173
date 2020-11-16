import axios from 'axios';
import React , { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const HooksApiView = (props) =>
{


    const [users,setUsers]=useState({
id:'',
name:'',
email:'',

phone:'',
city:'',
course:'',
 });

 let { idname}=useParams();

 
   
 

    


    useEffect(()=>{
     axios
    .get(`http://localhost:3000/react173/${idname}`)
      .then((apiresult)=> setUsers(apiresult.data))
    },[idname])



     return (<>
    
                    <div className="container py-5">
                      
    
                       <table className="table table-dark mx-auto my-2">
                          <tr>
                          <th>ID</th>
                          <td>{users.id}</td>
                          </tr>
                          <tr>
                          <th>NAME</th>
                          <td>{users.name}</td>
                          </tr>

                          <tr>
                          <th>EMAIL</th>
                          <td>{users.email}</td>
                          </tr>

                          <tr>
                          <th>PHONE</th>
                          <td>{users.phone}</td>
                          </tr>

                          <tr>
                          <th>CITY</th>
                          <td>{users.city}</td>
                          </tr>
                          <tr>
                          <th>COURSE</th>
                          <td>{users.course}</td>
                          </tr>

                          <tr>
                          <th> 
                          <Link className="btn btn-primary" to="/hooksapi">GOTO</Link>
                          </th>


                          <td> 
                          <button onClick={ ()=>window.print()} className="btn btn-success">PRINT</button>
                          </td>
                          </tr>

                       
                       </table>
                        
                    
                    </div>
    
            </>)
         }


export default HooksApiView