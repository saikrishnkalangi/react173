import axios from 'axios';
import React, { useState} from 'react'
import { useHistory } from 'react-router-dom';

const HooksApiSignup=()=>
{

    const [Users, setUsers]=useState({
      name:'',
      email:'',
      phone:'',
     city:'',
     course:''


    })
const history =useHistory();



    const{ name,email,phone,city,course }=Users


     const HandleFromControlData=(e)=>
     {
        setUsers({ ...Users, [e.target.name]: e.target.value});
    }




const HandleSubmitForm=async (e)=>
{
    e.preventDefault();

await axios
    .post("http://localhost:3000/react173", Users)
    .then( ()=>history.push('/hooksApi') )
}


    
        return (<>
            <div className="container p-5">

                    <h2 className="text-center py-2">EDIT USER PROFILE DATA...</h2>
                        
            
                    <form onSubmit={ HandleSubmitForm.bind(this) }>
        
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                type="text" 
                                name="name"
                                className="form-control" 
                                value={name}
                                onChange={HandleFromControlData.bind(this)}
                               />
                            </div>
        
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                type="email" 
                                name="email"
                                className="form-control" 
                                value={email}
                                onChange={HandleFromControlData.bind(this)}
                                />
                            </div>
        
                           
        
                            <div className="form-group">
                                <label>Phone</label>
                                <input 
                                type="phone" 
                                name="phone"
                                className="form-control" 
                                value={phone}
                                onChange={HandleFromControlData.bind(this)}
                                />
                            </div>

                            <div className="form-group">
                            <label>City</label>
                            <input 
                            type="city" 
                            name="city"
                            className="form-control" 
                            value={city}
                            onChange={HandleFromControlData.bind(this)}
                              />
                        </div>
        
        
                            <div className="form-group">
                                <label>course</label>
                                <input 
                                type="text" 
                                name="course"
                                className="form-control" 
                                value={course}
                                onChange={HandleFromControlData.bind(this)}
                                />
                            </div>
                    
                         
                            <button 
                            type="submit" 
                            className="btn btn-primary">Submit</button>
                                


                          
                         
        
                    </form>
        
            </div>
           </>)     
    

        }

export default HooksApiSignup