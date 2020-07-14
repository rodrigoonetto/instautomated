import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {Container, Badge, Row} from 'reactstrap';

const BottomFooter = () =>{
return(

    <footer>
    <Container>
    <Row><p ><strong>Instautomated!</strong> Automatic follow-unfollow tools for Instagram</p> </Row>
    <Row>   
    <Badge href="http://www.instagram.com/instautomated_" target="_blank" color="dark"><InstagramIcon fontSize="small"/> Visit us on Instagram</Badge>
    <Badge href="mailto: rodrigo.onetto@outlook.com" color="dark"><MailOutlineIcon fontSize="small"/> Send us an email</Badge>
    </Row>
    </Container>
    </footer>

)}

export default BottomFooter