import React from 'react'
import {Card} from 'react-bootstrap'

const Resource = (props) => {
    console.log(props)

    const {id, title, source, link} = props
    console.log(title)
    return(
        <>
        <Card>
            <Card.Title id="card-title">{title}</Card.Title>
            <Card.Body>{source} - {link} </Card.Body>
            <br/>
        </Card>
        </>
    )
}

export default Resource