import React, { useState, useContext } from 'react';
import api from '../services/api'
import { Alert, Container, Button, Form, FormGroup, Input } from 'reactstrap';



export default function Login({ history }) {
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("false")

   

    const handleSubmit = async evt => {
        evt.preventDefault();

        if (email !== "" && password !== "") {
            const response = await api.post('/login', {email, password})
            
            const user_id = response.data.user_id || false;

            
            if (user_id) {
                localStorage.setItem('user_id', user_id)
                localStorage.setItem('user_name', response.data.user_name)
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
            <h2 className="npmdisplay-3">Welcome back to Instautomated! </h2>

            <Form onSubmit={handleSubmit}>
                <div className="input-group" id="login">
                    <FormGroup className="form-group-"></FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="email" name="email" id="email" placeholder="Your email" onChange={evt => setEmail(evt.target.value)} />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="password" name="password" id="password" placeholder="Your password" onChange={evt => setPassword(evt.target.value)} />
                    </FormGroup>
                    
                    <Button outline color="danger" className="submit-btn">Login</Button>
                
                    </div>
                
                
                <FormGroup className="basicContainer">
                    <Button outline color="secondary" className="secondary-btn" onClick={() => history.push("/register")}>Don´t have an Account? Register</Button>
                </FormGroup>
                
            </Form>
            {error ? (
                <Alert className="event-validation" color="danger"> {errorMessage}</Alert>
            ) : ""}
        </Container>
    );
}