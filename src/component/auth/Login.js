import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Col, Container, Row } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <div className='loginpage'>
                <Container>
                    <Card>
                        <Card.Body className='card-bodyLogin'>
                            <Row className='justify-content-center m-auto'>
                                <Col className='p-5'>
                                    <p className='h2 loginh2'>Login</p>
                                    <p className='mb-2'>Sign In to your account</p>
                                    <Form>
                                        <InputGroup>
                                            <InputGroup.Text><FaUser /></InputGroup.Text>
                                            <FormControl id="inlineFormInputGroupUsername" placeholder="Username" />
                                        </InputGroup>
                                        <InputGroup className='pt-3' >
                                            <InputGroup.Text><RiLockPasswordLine /></InputGroup.Text>
                                            <FormControl type="password" controlId="formBasicPassword" placeholder="Password" />
                                        </InputGroup>
                                        <div className='pt-4'>
                                            <Button variant="primary" type="submit" className='btn-grad'>
                                                Login
                                            </Button>
                                        </div>
                                    </Form>
                                </Col>
                                <Col className='SignupSection'>
                                    <div className='pt-5'>
                                        <p className='h2 loginh2 text-center text-white'>Signup</p>
                                        <p className=' text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <Link to='/signup'>
                                            <Button variant="link" className='btn-gradL justify-content-center m-auto'>Register</Button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <div className='pt-5'>
                        <Link to='/dashboard'>
                            <Button variant="link" className='btn-gradL justify-content-center m-auto'>Dashboard</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </div>
    )
}
