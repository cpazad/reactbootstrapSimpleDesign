import React, { Fragment } from 'react';
import { Alert, Col, Container, Row, Tab, Tabs} from 'react-bootstrap';
import Sonnet from './Sonnet';
import Team from './Team';



const Middlesection = () => {
    return (
        <Fragment>
            
            <Container>
               
                <Row>
                    
                    <Col>
                    
                        
                        <Alert variant="success">
                            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                            <p>
                                Aww yeah, you successfully read this important alert message. This example
                                text is going to run a bit longer so that you can see how spacing within an
                                alert works with this kind of content.
                            </p>
                            <hr />
                            <p className="mb-0">
                                Whenever you need to, be sure to use margin utilities to keep things nice
                                and tidy.
                            </p>
                        </Alert>
                        <Team></Team>

                        {/* Tabs */}

                        

                        
                    
                    
                    </Col>
                </Row>

                <Row className='bg-dark p-3 text-white'>
                    <h3> Tab content </h3>
                    <Tabs defaultActiveKey="profile" id='newtabs' className='mb-3'>
                        <Tab eventKey="home" title="Home">
                          <Sonnet/>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ullam saepe voluptatibus cum! Laboriosam dolor quia sed nemo saepe accusantium ex eveniet quidem ab suscipit cum maxime, officia eaque corrupti..</p>
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                        <Sonnet/>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Middlesection;
