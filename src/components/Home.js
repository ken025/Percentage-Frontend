import React, { Component } from 'react';
import { connect } from 'react-redux'
import Demo from './DoughnutChart';

import {Carousel} from 'react-bootstrap'

class Home extends Component { 

// const Home = () => {
    render() {
        return (
        //     this.props.user.id 
        //     ?
           <div>
               <h1>HOME PAGE BOI</h1>
<Carousel  className="d-block w-100">
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="https://kissflow.com/wp-content/uploads/2018/11/Purchase-Order-Tracking_Blog.png"
      alt="Plan for the Future"
    />
    <Carousel.Caption>
      <h1>Plan for the Future</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <Demo/>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.moneyunder30.com/wp-content/uploads/2018/12/Money-Market-Vs.-Savings-648x364-c-default.jpg"
      alt="Save for Yourself"
    />
    <Carousel.Caption>
      <h3>Save for Yourself</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
               <Demo/>
        </div>
        //     :
        //     <>
        //     </>
        );
    }
}

const mapStateToProps = (state) => (
    {user: state.user}
  )

export default connect(mapStateToProps)(Home);