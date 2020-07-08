import React from 'react'

import {Col, Row, Container, Button} from 'reactstrap'

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import HttpsIcon from '@material-ui/icons/Https';
import FaceIcon from '@material-ui/icons/Face';
import GroupAddIcon from '@material-ui/icons/GroupAdd';





export default function Home({history}) {

    return(
        <div>
        <Container className="homebanner">
        <h1 className="npmdisplay-3">Instautomated!</h1>
        <p className="lead">Human-behaviour-simulating tools to help with repetitive tasks on Instagram.</p>
        <hr className="my-2" />
        <p>Helping with the most tedious must-do´s to aquire public to Instagram Pages.</p>
        <p className="lead">
          <Button color="secondary" ><YouTubeIcon  /> Demo</Button>
          <Button color="dark" onClick={()=>{history.push('/login')}}><ExitToAppIcon  /> Login</Button>
        </p>
        </Container> 
        <Container>
       
        <Row className="features">
            <Col xs="3" className="features-cards">
            <HttpsIcon fontSize="large"/>
            <h5>Secure</h5>
            <h6>No user-password or pemissions needed</h6>
            <p>We do not request your user credentials at all. All of the actions are done by yourself.</p>
      
            </Col>
            <Col xs="3" className="features-cards">

            <FaceIcon fontSize="large"/>
            <h5>Human behaviour</h5>
            <h6>It´s not a BOT!</h6>
            <p>The script, once configured does it´s best to replicate human interactions.</p>

            </Col>

            <Col xs="3" className="features-cards">
            <GroupAddIcon fontSize="large"/>
            <h5>Public growth effective</h5>
            <h6>Focus-publicity for your Profile</h6>
            <p>Just apply the script on your favorite Influencer.</p>
            </Col>


        </Row>
        </Container>
        </div>

    )







}