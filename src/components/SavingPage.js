import React, { Component } from 'react'
import { connect } from 'react-redux'

class SavingPage extends Component{

    render(){
        return(
            <h1> Saving Page Here </h1>
        )
    }
}

export default connect()(SavingPage)