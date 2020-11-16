import React from 'react'

 const Service=()=> {

    var myservices=["web Application" ,"Mobile Application" ,"Content Writting","React Application"]

 return (
        <>
        <h1>SERVICES COMPONENT</h1>
        <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </p>

       <ul type="none">
            {
                myservices.map( (result,index)=>   <li> {index+1}.{ result } </li> )    
            }
       </ul>

        </>
    )
}

export default Service
