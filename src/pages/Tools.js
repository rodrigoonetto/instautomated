import React, { useState, useRef } from 'react';

import {  Badge,  Alert,  Container,   Button,   Form,   FormGroup,   Label,   Input,  Row,  Col } from 'reactstrap';



export default function Tools() {


  const [generated, setGenerated] = useState(false)
  const unFollowCodeArea = useRef(null);
  const [usersLimit, setUsersLimit] = useState('')
  const [delayInSecondsUnFollow, setDelayInSecondsUnFollow] = useState('')
  const [startingFrom, setStartingFrom] = useState('')


  const unFollowGenerateHandler = ()=>{

    unFollowCodeArea.current.innerText="let delayInSecondsUnFollow=" +delayInSecondsUnFollow+",startingFrom="+startingFrom+",unfollowlimit="+usersLimit+",unfollowStop=startingFrom+unfollowlimit,scrollIndex=0,index=startingFrom,scroll=0,unFollowedList=[],user='',whiteList=[];console.clear();let firstScrollingProcess=setInterval(firstScroll,1e3);function firstScroll(){if(startingFrom>scrollIndex)scrollIndex=document.getElementsByClassName('sqdOP  L3NKy    _8A5w5    ').length,(scroll=document.getElementsByClassName('isgrP')[0]).scrollTop=scroll.scrollHeight,console.clear(),console.log(`1° Proceso: Localizando usuario numero ${startingFrom}. ${(scrollIndex/startingFrom*100).toFixed(0)}% completado`),console.log(`Abriendo ${scrollIndex} usuarios de ${startingFrom} antes de comenzar siguiente proceso`);else{console.clear(),clearInterval(firstScrollingProcess),console.log('Finalizada la localizacion del primer usuario a unfollowear, comienza proceso');setInterval(unfollowea,1e3*delayInSecondsUnFollow),setInterval(scrollea,5*delayInSecondsUnFollow*1e3)}}function unfollowea(){index<unfollowStop?(document.getElementsByClassName('sqdOP  L3NKy    _8A5w5    ')[startingFrom].click(),document.getElementsByClassName('aOOlW -Cab_   ')[0].click(),user=document.getElementsByClassName('FPmhX notranslate  _0imsa ')[index-1].title,console.clear(),console.log(`2° Proceso: Unfolloweando ${index-startingFrom+1} usuarios. ${((index-startingFrom)/unfollowlimit*100).toFixed(0)}% completado`),console.log(`Unfolloweando usuario ${user}`),unFollowedList.push(user),index++):(clearInterval(unFollowProcess),clearInterval(scrollingProcess),console.log(`Proceso terminado. Se han unfolloweado ${index-startingFrom} usuarios`),console.log(unFollowedList))}function scrollea(){var o=document.getElementsByClassName('isgrP')[0];o.scrollTop=o.scrollHeight}" ;
    unFollowCodeArea.current.select()
    unFollowCodeArea.current.setSelectionRange(0, 99999)
    document.execCommand("copy");
    setGenerated(true)
    setTimeout(() => {
        setGenerated(false)
        }, 2000)


  }


  



  return (

  <Container>

      <h3>Script generator.</h3>
      <h6><Badge color="secondary">STEP 1: </Badge> Fill the parameters and hit Generate!</h6>

      
      
            <Row>
              <Col>
                <Form>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="userslimit" className="mr-sm-2">Follow users limit: </Label>
                    <Input value={usersLimit} onChange={(code) => setUsersLimit(code.target.value)}type="number" name="userslimit" id="userslimit" placeholder="0-300 users" />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="delayInSecondsUnFollow" className="mr-sm-2">Time between Follows: </Label>
                    <Input value={delayInSecondsUnFollow} onChange={(code) => setDelayInSecondsUnFollow(code.target.value)}type="number" name="delayInSecondsUnFollow" id="delayInSecondsUnFollow" placeholder="40-120 seconds" />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="startingFrom" className="mr-sm-2">Starting from: </Label>
                    <Input value={startingFrom} onChange={(code) => setStartingFrom(code.target.value)}type="number" name="startingFrom" id="startingFrom" placeholder="User number" />
                  </FormGroup>
                  <Button color="primary" onClick={unFollowGenerateHandler}>Generate</Button>
                  {generated ? (<Alert color="success">Script generated!</Alert>) : ""}
                </Form>
              </Col>
              <Col>
                <div>
                  
                  <textarea ref={unFollowCodeArea}>

                  </textarea>
              
                </div>
              </Col>
            </Row>
        <h6><Badge color="secondary">STEP 2: </Badge> Login into your Instagram account and go to your profile</h6>
        <h6><Badge color="secondary">STEP 3: </Badge> Open the following / followed list</h6> 
        <h6><Badge color="secondary">STEP 4: </Badge> Hit F12, paste the generated Script in the Console and hit Enter!</h6>
      




    
    </Container>
    


  )
}