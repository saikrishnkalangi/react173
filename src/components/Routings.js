import React from 'react';
import { BrowserRouter, Route }  from 'react-router-dom';


//import Information/view Components...
import Header from './Header.js'
import Footer from './Footer.js'

import Home from './Home.js'
import About from './About.js'
import Services from './Services.js'
import Contact from './Contact.js'
import Lifecycle from './Lifecycle.js'
import AxoisHttpCalls from './AxoisHttpCalls.js'
import Blog from './Blog'
import Signup from './Signup'
import Propsreact from './Propsreact'


import Hooks from './Hooks'
import HooksApi from './HooksApi'
import HooksApiView from './HooksApiView'
import HooksApiSignup from './HooksApiSignup'
import HooksApiEdit from './HooksApiEdit'



import ReactReduxConnection from './ReactReduxConnection.js'
import PaginationTask from './PaginationTask';




const Routings=()=> 
{
    return (<>

<BrowserRouter>

               {/* navbar Component */ }
               
                <Header />   
               
               {/* navbar Component */ }
              
                
               <Route exact path="/" component={About} />
                <Route path="/home"  component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route  path="/contact" component={Contact} />
                <Route  path="/reactredux" component={ReactReduxConnection} />
                 <Route  path="/signup" component={Signup} />
                <Route path="/blog" component={Blog} />
                <Route path="/props" component={Propsreact} />
             


                <Route  path="/hook" component={Hooks} />
                <Route  exact path="/hooksApi" component={HooksApi} />
                <Route   path="/hooksApi/view/:idname" component={HooksApiView}/>
                <Route   path="/hooksApi/create" component={HooksApiSignup}/>
                <Route   path="/hooksApi/edit/:idname" component={HooksApiEdit}/>

                 <Route path="/pagination" component={PaginationTask}/>


                <Route  path="/restapi" component={AxoisHttpCalls} />
                <Route  path="/lifecycle" component={Lifecycle} />
                

             



                  {/* Footer Component */ }
               
                  <Footer /> 
               
                  {/* Footer Component */ }

                
</BrowserRouter>

    </>)
}


export default Routings
