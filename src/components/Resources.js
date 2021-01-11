import React from 'react'
import { connect } from 'react-redux'
import Resource from './Resource'

import {CardColumns} from 'react-bootstrap'


const Resources = (props) => {

    console.log("Resources", props)
    return(
        <CardColumns id="res-cards">
        {props.resources.map(resource => <Resource key = {resource.id}  {...resource}/>)}
        </CardColumns>
    )
}

const mapStateToProps = (state) => ({
    resources: state.resources
})

export default connect(mapStateToProps)(Resources);