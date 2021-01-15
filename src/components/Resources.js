import React from 'react'
import { connect } from 'react-redux'
import Resource from './Resource'

import { Card } from 'react-bootstrap'


const Resources = (props) => {

    console.log("Resources", props)
    return(
        <Card>
        {props.resources.map(resource => <Resource key = {resource.id}  {...resource}/>)}
        </Card>
    )
}

const mapStateToProps = (state) => ({
    resources: state.resources
})

export default connect(mapStateToProps)(Resources);