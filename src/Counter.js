import React, { Component} from 'react'

import { connect} from 'react-redux'

 class Counter extends Component {

    constructor(props)
    {
        super(props);
      
    }

    increment=()=>{
       this.props.dispatch({ type:'increment'})
    }


    decrement=()=>{
        this.props.dispatch({ type:'decrement'}) 
    }

    render(){

        return(
            <div className="text-center">
            <h4 className="py-5">counter Example</h4>

            <button onClick={ this.increment}> + </button>

          <span>{ this.props.count}</span> &nbsp; &nbsp;

            <button onClick={ this.decrement}> - </button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>
{

    return({
      count:state.rc
    })
}


export default connect(mapStateToProps) (Counter)

