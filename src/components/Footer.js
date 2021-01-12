import React, { Component } from 'react';

import { GoRepoClone } from 'react-icons/go'
import { AiOutlineGithub} from 'react-icons/ai'
import {  HiOutlineMail } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import {Card, CardGroup} from 'react-bootstrap'


class Footer extends Component { 

    render() {
        return (
            <div>
            <Card class="fixed-bottom">
                <CardGroup>
                    <Card id="about-card">
                        <Card.Body>
                        <Card.Title>Contact Me</Card.Title>
                        <Card.Text>
                        <a href="https://www.linkedin.com/in/kenneth-m-colon/" target="_blank"><FaLinkedin size={50} color='black'/></a> &ensp; 
                        <a href="mailto:kennethmanuel250@gmail.com" target="_blank"><HiOutlineMail size={50} color='black'/></a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card id="about-card">
                        <Card.Body>
                        <Card.Title>Explore My other Projects</Card.Title>
                        <Card.Text>
                        <a href="https://github.com/ken025" target="_blank"><AiOutlineGithub size={50} color='black'/></a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card id="about-card">
                        <Card.Body>
                        <Card.Title>Clone the Repo to this Code</Card.Title>
                        <Card.Text>
                        <a href="https://github.com/ken025/Percentage-React-Redux-Project" target="_blank"><GoRepoClone size={50} color='black'/></a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Card>
            </div>
        )
    }
}

export default Footer;