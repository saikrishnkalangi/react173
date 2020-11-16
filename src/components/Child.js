import React from 'react'

const  Child=(props)=> {


    const {id,name,email }=props
   
    return (<>

        <div className="container py-5">
        <h1>CHILD COMPONENT</h1>  
    { id } - { name } -{ email}
        </div>
  </>)
}


export default  Child