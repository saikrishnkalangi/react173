import React, { Component } from 'react'

 class Lifecycle extends Component {

    constructor(props){
        super();
        this.state={
          
            email :" "
        }
       
    }



    componentWillMount(){

        console.log("****** componentwillMount********")
    }

    HandleChanges=()=>{



      this.setState({ count:this.state.count+1})
    }



    render() {
        console.log("*******render method*******");
        return (<>
            <div>
                <h1>This is Lifecycle method</h1>
                {this.state.email} <br/>

                

                <button onClick={this.HandleChanges}> Click me</button>
            </div>
            </>)
    }



    componentDidMount()
    
    {
        console.log("*********ComponentDidmethod*******");
    }
}

export default Lifecycle