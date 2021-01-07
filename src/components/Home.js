import React, { Component } from 'react';
import { connect } from 'react-redux'


class HomePage extends Component { 

// const Home = () => {
    render() {
        return (
            // this.props.user.id 
            // ?
           <div>
               HOME PAGE BOI
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

export default connect(mapStateToProps)(HomePage);