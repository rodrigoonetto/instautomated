import React from 'react'

import {Col, Row, Container, Button} from 'reactstrap'

import YouTubeIcon from '@material-ui/icons/YouTube';
import HttpsIcon from '@material-ui/icons/Https';
import FaceIcon from '@material-ui/icons/Face';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';





export default function Welcome({history}) {

    return(
        <div>
        <Container className="homebanner">
        <h1 className="npmdisplay-3">Welcome to Instautomated!</h1>
        <p className="lead">Hi <strong>{localStorage.getItem('user_name')}</strong></p>
        <hr className="my-2" color="white"/>
        <p>You can start by adjusting your settings: </p> <Button color="secondary" onClick={()=>{history.push('/settings')}}><SettingsIcon  /> Settings</Button>{'  '}
        <hr className="my-2" color="gray"/>
        <p>Or go directly to the script generator tool: </p> <Button color="secondary" onClick={()=>{history.push('/tools')}}><AccountBoxIcon  /> Script generator</Button>{'  '}
        <hr className="my-2" color="gray"/>
        <p>If you need assistance you can watch the short tutorial video: </p>  <Button color="danger" ><YouTubeIcon  /> Demo</Button>{'  '}
        
        </Container> 
 
        </div>

    )







}