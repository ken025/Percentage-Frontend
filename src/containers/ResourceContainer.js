import React, { Component} from 'react'
import Resources from '../components/Resources'

// import {connect} from 'react-redux'

// import { fetchResources } from '../actions/resourceAction'

class ResourceContainer extends Component {
  
    // componentDidMount(){
    //     this.props.fetchResources()
    //   }

    render() {
        return(      
            <div >
                <section id="home-heading" className="p-5">
                    <div className="dark-overlay">
                        <h1 id="heading-title">Resources</h1>       
                    </div>
                </section>
                <Resources/>
            </div>
        )
    }
}   

// const mapStateToProps = (state) => ({
//     resources: state.resources
// })

// export default connect(mapStateToProps, {fetchResources})(ResourceContainer);

export default ResourceContainer