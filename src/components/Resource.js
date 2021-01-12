import React from 'react'
import { Card, Accordion, Button} from 'react-bootstrap'

const Resource = (props) => {
    console.log(props)

    const {id, title, source, link} = props
    console.log(title)
    return(
        <>
          <Accordion>
            <Card id="res-card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {title}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Link href={link} target="_blank"> Link to Source: {source}</Card.Link>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </>
    )
}

export default Resource