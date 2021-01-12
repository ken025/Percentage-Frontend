import React, { Component} from 'react'
import Resources from '../components/Resources'
import { GrResources } from 'react-icons/gr'

class ResourceContainer extends Component {

    render() {
        return(      
            <div >
                <section>
                    <div>
                    <h1 id="form-title" style={{ color: 'black'}}> Resources <GrResources/> </h1>       
                    </div>
                </section>
                <Resources/>
            </div>
        )
    }
}   

export default ResourceContainer