import React, { useState } from 'react';
import api from '../services/api'

import { Button, Form, FormGroup, Container, Input, Alert } from 'reactstrap';


export default function Register({ history }) {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [instagram, setinstagram] = useState("")
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")


    const handleSubmit = async evt => {
        evt.preventDefault();

        if (email !== "" && password !== "" && firstName !== "" && instagram !== "") {
            const response = await api.post('/user/register', { email, password, firstName, instagram })
            
            const user_id = response.data.user_id || false;
            

            if (user_id) {
                localStorage.setItem('user_id', user_id)
                localStorage.setItem('user_name', response.data.firstName)
                history.push('/welcome')
            } else {
                const { message } = response.data
                setError(true)
                setErrorMessage(message)
                setTimeout(() => {
                    setError(false)
                    setErrorMessage("")
                }, 2000)
            }
        } else {
            setError(true)
            setErrorMessage("You need to fill all the Inputs")
            setTimeout(() => {
                setError(false)
                setErrorMessage("")
            }, 2000)

        }
       

    }

    return (
        <Container className="basicContainer">
            <h2 className="npmdisplay-3">Registration.</h2>
            <p> In order to gain access to the tools you must Register FREE.</p>
            <Form onSubmit={handleSubmit}>
                <div className="input-group" id="register">
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="text" name="firstName" id="firstName" placeholder="Your name" onChange={evt => setFirstName(evt.target.value)} />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="text" name="instagram" id="instagram" placeholder="Your Instagram Account" onChange={evt => setinstagram(evt.target.value)} />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="email" name="email" id="email" placeholder="Your email" onChange={evt => setEmail(evt.target.value)} />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="password" name="password" id="password" placeholder="Your password" onChange={evt => setPassword(evt.target.value)} />
                    </FormGroup>
                    <Button outline color="danger" className="submit-btn">Register</Button>
                </div>
                <FormGroup>
                    
                </FormGroup>
                <FormGroup>
                    <Button outline color="secondary" className="secondary-btn" onClick={() => history.push("/login")}>Already have an Account? Login</Button>
                </FormGroup>
            </Form>
            {error ? (
                <Alert className="event-validation" color="danger">{errorMessage}</Alert>
            ) : ""}
        </Container>
    );
}