import React, { Component } from 'react'

import axois from 'axios'

import  {Link} from 'react-router-dom'

  

 class AxoisHttpCalls extends Component {


    constructor(){
        super();
        this.state={
            users:[]
        }
        console.log("*****constructor*******")
    }

    
    render() {
        return (
         
            <>

            <div className="container py-5">
            
            <h1 className="py-3">AXIOS RESTAPI CALLLS</h1>    

            {

                <table className="table table-dark  mx-auto my-2">
                <thead className="thead-light">
                <tr>
                <th>ID</th>
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

                   this.state.users.map(( res,index) =>{

                        return(<tr key={index}>
                            
                            <td>{index+1}</td>
                            <td>{res.name}</td>
                            <td>{res.email}</td>
                            <td>{res.city}</td>
                            <td>{res.course}</td>
                            <td>{res.phone}</td>
                           
                            <td><Link className="btn btn-primary text-white">View</Link></td>
                            <td><Link className="btn btn-warning text-white">Edit</Link></td>
                            <td><Link className="btn btn-danger text-white">Delete</Link></td>
                            </tr>

                        )
                    })
                }
                </tbody>
                </table>

            }

            <button onClick={this.handleApiData}>Click</button>
            </div>
          
            </>
        )
    }


    componentDidMount(){
        console.log("*****coponentdidmount****")
        axois.get('http://localhost:3000/react173')
        .then( (apiresult)=> this.setState({ users:apiresult.data}))
    }
}


export default AxoisHttpCalls
