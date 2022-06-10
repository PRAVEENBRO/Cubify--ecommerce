import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'



const Login = (props) => {

    const openRegistrationForm = () => {
        props.histroy.push('/NavigationBar/Registration')
    }

    const login = () => {
        localStorage.setItem("token", "login token");
        // props.histroy.push('/NavigationBar/Homepage') s      
    }

    return (
        <>
            <div className='' style={{ marginTop: "5rem" }}>
                <Container >
                    <h3 className='App'>Sign in to your account</h3>
                    <Card style={{ maxWidth: '30rem', minWidth: '15rem', margin: "30px auto", marginBottom: "30px" }} className='fromBody p-4'>
                        <Form>

                            <Form.Label htmlFor="emailaddress">Email Address </Form.Label>
                            <Form.Control type="text" name='userName' placeholder='Enter your userName...' />
                            <Form.Text className="text-muted">{ }</Form.Text>
                            <br />
                            <br />
                            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                            <Form.Control type="text" name='password' placeholder='Enter a password...' />
                            <Form.Text className="text-muted">{ }</Form.Text>
                            <br />
                            <br />
                            <div className="d-grid gap-2 ">
                                <Button variant="warning" className='button' size="lg" onClick={login} >Sign in </Button>
                            </div>
                            <br />
                        </Form>
                    </Card>

                    <Card style={{ maxWidth: '30rem', minWidth: '15rem', margin: "30px auto", marginBottom: "30px" }} className='App d' >
                        {/* New User ?<span> <Link to='/NavigationBar/Registration'> Create an account </Link></span> */}
                        New User ?<h6 onClick={openRegistrationForm}>  Create an account</h6>
                    </Card>

                </Container>
            </div>
        </>
    )
}

export default Login
