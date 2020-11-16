import React from 'react'

 function Home() {

    var users=[{
        id:1,
        name:'kumar1',
        email:'kumar1@gmail.com',
        phno:7896541231
    },{
        id:2,
        name:'kumar2',
        email:'kumar2@gmail.com',
        phno:7896541232
    },{
        id:3,
        name:'kumar3',
        email:'kumar3@gmail.com',
        phno:7896541233
    },{
        id:4,
        name:'kumar4',
        email:'kumar4@gmail.com',
        phno:7896541234
    },{
        id:5,
        name:'kumar5',
        email:'kumar5@gmail.com',
        phno:7896541235
    }]


const finalresult=users.map( (result,index)=>{        
     return(<ul key={index}>
                <li> {result.id} </li>
                <li> {result.name} </li>
                <li> {result.email} </li>
                <li> {result.phno} </li>
            </ul>)
})

    return(<>
                <h1>HOME COMPONENT</h1>
                <p>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>

                { finalresult }

        </>);
   
    
}


export default Home
