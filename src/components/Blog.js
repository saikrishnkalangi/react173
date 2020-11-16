import React, { Component } from 'react'

//connection of react-redux
import { connect } from 'react-redux'

//Binding Actions & Reducers
import { bindActionCreators } from 'redux'

//actions
import EmpActions from './../Actions/index.js'


class Blog extends Component
{

    constructor(props)
    {
        super();
        console.log('constructor')
    }

    componentDidMount()
    {
       console.log()
       this.props.getPosts()
    }


    render()
    {

      
        return (<>

            <div className="container py-5">

             <h2 className="py-2">BLOG COMPONENT</h2>

                

             {
                        this.props.empdata.map((res,index)=>{
                            return(<ul key={index}>
                                <li>{res.id}</li>
                                <li>{res.name}</li>
                                <li>{res.email}</li>
                            </ul>)
                        })
            } 



             

            </div>

         </>)

    }
    
}


const mapStateToProps = (state)=>
{    
    

    return{
        posts: state.posts
    }
   
}

const mapDispatchToProps= dispatch =>({

    
     
})


export default connect(mapStateToProps,mapDispatchToProps)(Blog)