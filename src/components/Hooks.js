import React ,{ useState} from 'react'

const Hooks=()=> {

   const [name, setName]=useState("saikrishna")


   const handlingState=()=>{
setName("kalangisaikrishna")
   }



    return (
        <div className="container py-5">
        <h3 className="py-2">REACT HOOK</h3>

     
       {name}

      <button onClick={handlingState}>State_Changes</button> 
    </div>
    )
}

export default Hooks
