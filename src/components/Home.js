import React, { Component } from 'react';
import { connect } from 'react-redux';
import {GiPayMoney, GiCommercialAirplane } from 'react-icons/gi'
import { AiOutlineFileSearch} from 'react-icons/ai'
import { HiOutlineClipboard } from 'react-icons/hi'
import { MdAddBox } from 'react-icons/md'
import {Carousel, Card, CardGroup} from 'react-bootstrap'

class Home extends Component { 

    render() {
        return (
    
           <div>
              <Carousel>
                <Carousel.Item>
                <img 
                    id="carousel-item"
                    src="https://atlantachallenge.com/wp-content/uploads/2015/06/business-planning-background-1600x900.png"
                    alt="Plan for the Future"
                  />
                  <Carousel.Caption id="car-text">
                    <h2>Plan for the Future </h2>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img 
                   id="carousel-item"
                    // src="https://image.freepik.com/free-vector/people-carrying-jigsaw-pieces-donut-chart_53876-64616.jpg"
                    src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2020/09/GettyImages-502521786.jpg-savings-accounts-basics-1440x864.jpg"
                    alt="Save for Yourself"
                  />
                  <Carousel.Caption id="car-text">
                    <h3>Seperate your Expenses by Category <GiPayMoney/> </h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img 
                  id="carousel-item"
                    src="https://papers.co/wallpaper/papers.co-od09-nature-travel-kit-27-wallpaper.jpg"
                    alt="Save for Yourself"
                  />
                  <Carousel.Caption id="car-text-1">
                    <h3>Save for Yourself <GiCommercialAirplane/></h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel><br />

              <CardGroup>
                <Card id='home-card'>
                  <h1> <MdAddBox/> </h1>
                  <h5> Add Accounts to Track your Savings Progress</h5>
                </Card>
                <Card id='home-card'>
                  <h1><HiOutlineClipboard/></h1>
                  <h5>Write Down your Ongoing Expenses to Keep Better Track</h5>
                </Card>
                <Card id="home-card">
                  <h1> <AiOutlineFileSearch/> </h1>
                  <h5>Browse Through Resources to Help you Save More</h5>
                </Card>
              </CardGroup>
        </div>
        );
    }
}

const mapStateToProps = (state) => (
    {user: state.user}
  )

export default connect(mapStateToProps)(Home);