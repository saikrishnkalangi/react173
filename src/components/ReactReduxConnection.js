import React, { Component } from 'react'

import { connect } from 'react-redux'

import { bindActionCreators} from 'redux'

import  EmpActions from './../Actions/index.js'





class ReactReduxConnection extends Component {
    constructor(props)
    {
        super(props);

        
    }

    componentDidMount(){
        this.props.EmpActions()
    }

  
}

const mapStateToProps=(state)=>{
   console.log(state)

   return ({ empdata:state.EmpReducer})

}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({ EmpActions}, dispatch);

}



export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxConnection)
