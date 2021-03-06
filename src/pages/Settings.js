import React, { useState, useEffect } from 'react';
import api from '../services/api'
import moment from 'moment'

import { Label, Form, FormGroup, Container, Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Table, InputGroup, Input, InputGroupAddon } from 'reactstrap';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function Settings({ history }) {


    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [instagram, setinstagram] = useState("")
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [successData, setSuccessData] = useState(false);
    const [message, setMessage] = useState("")
    const [usersLimit, setUsersLimit] = useState('')
    const [delayInSeconds, setDelayInSeconds] = useState('')
    const [startingFrom, setStartingFrom] = useState('')
    const [userModified, setUserModified] = useState(false)
    const [parameterModified, setParameterModified] = useState(false)
    const [modal, setModal] = useState(false);
    const [passwordEditEnabled, setPasswordEditEnabled] = useState(false)
    const [userExceptions, setUserExceptions] = useState([])
    const [usertoAddInput,setUsertoAddInput] = useState('')
    
    const toggle = () => setModal(!modal);

    useEffect(() => {
        getUserData()

    }, []);

    const getUserData = async () => {
        try {
            const userResponse = await api.get(`/user/${localStorage.getItem('user_id')}`)
            console.log(userResponse)
            setFirstName(userResponse.data.firstName)
            setinstagram(userResponse.data.instagram)
            setUsersLimit(userResponse.data.usersLimit)
            setDelayInSeconds(userResponse.data.delay)
            setStartingFrom(userResponse.data.startingFrom)
            setUserExceptions(userResponse.data.unfollowExceptions)
            
        } catch (error) {
            console.log(error)
        }
    }

    const modifyUserData = async (origin) => {
        try {
            const userResponse = await api.post(`/user/modify/${localStorage.getItem('user_id')}`, { firstName, instagram, password, usersLimit, delayInSeconds, startingFrom })
            if (origin === 'user') {
                setUserModified(false)
                setSuccess(true)
                setMessage('Modified successfully!')
                setTimeout(() => {
                    setSuccess(false)
                }, 2000)
            } else {
                setParameterModified(false)
                setSuccessData(true)
                setMessage('Modified successfully!')
                setTimeout(() => {
                    setSuccessData(false)
                }, 2000)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const exceptionDeleteHandler = async (usertoDelete) => {
        try {
            await api.post(`/user/deleteexception/${localStorage.getItem('user_id')}`, { usertoDelete })
                console.log(usertoDelete)
                console.log("USUARIO ELIMINADO CON EXITO")
                getUserData()

            } 

         catch (error) {
            console.log(error)
        }

    }

    const exceptionAddHandler = async (usertoAdd) => {
        try {
            await api.post(`/user/addexception/${localStorage.getItem('user_id')}`, { usertoAdd })
                console.log(usertoAdd)
                console.log("USUARIO AGREGADO CON EXITO")
                getUserData()

            } 

         catch (error) {
            console.log(error)
        }

    }
        
    



    return (
        <Container className="basicContainer">
            <h2 className="npmdisplay-3">Settings:</h2>
            <p>You can modify your user data, script preferences or exceptions list.</p>
            <Form >
                <div className="input-group" id="personal">

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="firstName" className="mr-sm-2">Name: </Label>
                        <div id="input-button">
                            <Input type="text" name="firstName" id="firstName" value={firstName} placeholder="Your first name" onChange={evt => { setFirstName(evt.target.value); setUserModified(true) }} />

                        </div>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="instagram" className="mr-sm-2">Instagram Account: </Label>
                        <div id="input-button">
                            <Input type="text" name="instagram" id="instagram" value={instagram} placeholder="Your instagram" onChange={evt => { setinstagram(evt.target.value); setUserModified(true) }} />

                        </div>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="password" className="mr-sm-2">Password: </Label>
                        <div id="input-button">
                            <Input hidden={!passwordEditEnabled} type="text" name="password" id="password" placeholder="New Password" onChange={evt => { setPassword(evt.target.value); setUserModified(true) }} />
                            <Button outline color="danger" className="secondary-btn" onClick={() => setPasswordEditEnabled(true)}>Change</Button>
                            {(userModified) ? (<Button id="confirm-button" color="danger" className="secondary-btn" onClick={() => { modifyUserData("user") }}>Confirm</Button>) : ""}
                        </div>
                    </FormGroup>


                    {error ? (<Alert color="danger">{message}</Alert>) : ""}
                    {success ? (<Alert color="success">{message}</Alert>) : ""}




                </div>


                <div className="input-group" id="script">
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="userslimit" className="mr-sm-2">Users to process limit: </Label>
                        <div id="input-button">
                            <Input valid={usersLimit <= 300 && usersLimit >= 1} invalid={usersLimit > 300 || usersLimit < 1} min="1" max="300" value={usersLimit} onChange={evt => { setUsersLimit(evt.target.value); setParameterModified(true) }} type="number" name="userslimit" id="userslimit" placeholder="1-300 users" />

                        </div>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="delayInSeconds" className="mr-sm-2">Time between actions: </Label>
                        <div id="input-button">
                            <Input valid={delayInSeconds <= 120 && delayInSeconds >= 40} invalid={delayInSeconds > 120 || delayInSeconds < 40} min="40" max="120" value={delayInSeconds} onChange={evt => { setDelayInSeconds(evt.target.value); setParameterModified(true) }} type="number" name="delayInSeconds" id="delayInSeconds" placeholder="40-120 seconds" />

                        </div>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label min="0" max="1000" for="startingFrom" className="mr-sm-2">Starting from user number: </Label>
                        <div id="input-button">
                            <Input valid={startingFrom <= 1000 && startingFrom >= 0} invalid={startingFrom > 1000 || startingFrom < 1} value={startingFrom} onChange={evt => { setStartingFrom(evt.target.value); setParameterModified(true) }} type="number" name="startingFrom" id="startingFrom" placeholder="1-1000)" />

                            {(parameterModified) ? (<Button id="confirm-button" color="danger" className="secondary-btn" onClick={() => { modifyUserData("param") }}>Confirm</Button>) : ""}
                        </div>


                    </FormGroup>

                    {error ? (<Alert color="danger">{message}</Alert>) : ""}
                    {successData ? (<Alert color="success">{message}</Alert>) : ""}



                </div>
                <div className="input-group" id="whitelist">
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Button outline color="danger" className="secondary-btn" onClick={toggle}>View / Modify list</Button>
                    </FormGroup>



                </div>

            </Form>



            <div>

                <Modal isOpen={modal} toggle={toggle} className="modaloverride" scrollable>
                    <ModalHeader toggle={toggle}>UnFollow accounts exceptions</ModalHeader>
                    <ModalBody>

                        <div className="col-centered">
                            <Table dark id="scrollable-table" >
                                <thead>
                                    <tr>
                                        <th>Instagram Account</th>
                                        <th>Date added</th>
                                        <th>Delete?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userExceptions.map(userException => (
                                        
                                        <tr key={userException.user}>
                                            <td>{userException.user}</td>
                                            <td>{moment(userException.date).format('L')}</td>
                                            <td><Button size="sm" outline color="danger" className="secondary-btn" onClick={()=>exceptionDeleteHandler(userException.user)}>Delete</Button></td>
                                        </tr>
                                    ))}  
                                </tbody>
                            </Table>
                        </div>






                        <FormGroup className="input-group" id="exceptionsinput">
                        <Input onChange={evt => setUsertoAddInput(evt.target.value)}/>
                        <Button color="dark" onClick={() => exceptionAddHandler(usertoAddInput)}><PersonAddIcon fontSize="small"/>  Add</Button>
                        </FormGroup>
                            
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Done</Button>{' '}
                        <Button color="danger" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </Container>


    );
}