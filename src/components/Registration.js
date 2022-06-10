import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = () => {
    return <div>
        <div className='RegBG'>
            <Container>

                <h3 className='App'>Register your account</h3>
                <Card style={{ maxWidth: '30rem', minWidth: '10rem', margin: "30px auto", marginBottom: "30px" }} className='fromBody p-4'>

                    <Form>
                        <Form.Label htmlFor="fullname" >Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder='Enter Your Full name...' />
                        <br />
                        <Form.Label htmlFor="Username">Username</Form.Label>
                        <Form.Control type="text" name='userName' placeholder='Enter a username...' />
                        <br />
                        <Form.Label htmlFor="emailaddress">Email Address </Form.Label>
                        <Form.Control type="email" name='email' placeholder='Enter your Email...' />
                        <br />
                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder='Enter a password...' />
                        <br />
                        <Form.Label htmlFor="">Confirm Password</Form.Label>
                        <Form.Control type="password" name='confirmPassword' placeholder='Enter a password again...' />

                        <div className="d-grid gap-2 mt-5">
                            <Button variant="warning" className='button' size="lg" >Sign up </Button>
                        </div>
                        <br />
                        <div className='App'>Already have an account ?<span><Link to='/NavigationBar/Login'> Sign up</Link></span></div>
                    </Form>
                </Card>
            </Container>

        </div>
    </div>;
};

export default Registration;
