import React from 'react'


import { Link }  from 'react-router-dom';

const Header=()=> {

    const styles={
        backgroundColor:' Green',
        borderBottom:'0.5px white solid', 
        borderTop:'0.5px white solid'
    }

    return (<>

        <nav className="navbar navbar-expand-lg" style={styles}>
  

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

            <ul className="navbar-nav">
            
            <li className="nav-item active">
                    <Link className="nav-link text-white" to="/home">Home</Link>
            </li>

            <li className="nav-item">
                   <Link className="nav-link text-white" to="/about">About</Link>
            </li>
            <li className="nav-item">
                    <Link className="nav-link text-white" to="/services">Services</Link>
            </li>
           
            <li className="nav-item">
                    <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>


            <li className="nav-item">
            <Link className="nav-link text-white" to="/blog">Blog</Link>
    </li>

   


    <li className="nav-item">
    <Link className="nav-link text-white" to="/props">Propsreact</Link>
</li>

            <li className="nav-item">
            <Link className="nav-link text-white" to="/reactredux">Reactreduxconnection</Link>
    </li>

            <li className="nav-item">
                   <Link className="nav-link text-white" to="/lifecycle">Lifecycle</Link>
    </li>

    <li className="nav-item">
    <Link className="nav-link text-white" to="/signup">Signup</Link>
</li>

    <li className="nav-item">
    <Link className="nav-link text-white" to="/searchbox">Searchbox</Link>
</li>

    <li className="nav-item">
    <Link className="nav-link text-white" to="/restapi">Restapi</Link>
</li>
<li className="nav-item">
<Link className="nav-link text-white" to="/hooks">Hooks</Link>
</li>

<li className="nav-item">
<Link className="nav-link text-white" to="/hooksapi">HooksApi</Link>
</li>      

<li className="nav-item">
<Link className="nav-link text-white" to="/hooksapi/create">HooksSignup</Link>
</li>    

<li className="nav-item">
<Link className="nav-link text-white" to="/pagination">Pagination</Link>
</li>    

            </ul>
        </div>
        </nav>


            </>)
}


export default Header