import React, { Component } from 'react';
import { connect } from 'react-redux'
import Demo from './DoughnutChart';



class Home extends Component { 

// const Home = () => {
    render() {
        return (
            // this.props.user.id 
            // ?
           <div>
               <h1>HOME PAGE BOI</h1>
               <Demo/>
        </div>
            // :
            // <>
            // </>
        );
    }
}

const mapStateToProps = (state) => (
    {user: state.user}
  )

export default connect(mapStateToProps)(Home);