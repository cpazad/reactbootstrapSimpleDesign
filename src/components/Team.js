import React from 'react';
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap';
import photo1 from '../woman6.jpg';

// Added in Middlesection 

const Team = () => {
    return (
        <>
        <Container className='mb-3'>
            <h2 className='my-3'> Team Members </h2>
            <Row>
                <Col>
                    <Card>
                        <CardImg  src={photo1}/>
                        <Card.Body>
                        <Card.Title> Full Name Here </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> Job Title Here </Card.Subtitle>
                        <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis saepe quos ut exercitationem iusto sunt necessitatibus  </Card.Text>
                        <Button variant='success'> Button </Button>
                        </Card.Body>
                        <Card.Footer className="text-muted"> Social Links  </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardImg  src={photo1}/>
                        <Card.Body>
                        <Card.Title> Full Name Here </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> Job Title Here </Card.Subtitle>
                        <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis saepe quos ut exercitationem iusto sunt necessitatibus  </Card.Text>
                        <Button variant='success'> Button </Button>
                        </Card.Body>
                        <Card.Footer className="text-muted"> Social Links  </Card.Footer>
                    </Card>
                </Col>
                <Col> <Card>
                        <CardImg  src={photo1}/>
                        <Card.Body>
                        <Card.Title> Full Name Here </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> Job Title Here </Card.Subtitle>
                        <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis saepe quos ut exercitationem iusto sunt necessitatibus  </Card.Text>
                        <Button variant='success'> Button </Button>
                        </Card.Body>
                        <Card.Footer className="text-muted"> Social Links  </Card.Footer>
                    </Card>
                </Col>
                <Col> <Card>
                        <CardImg  src={photo1}/>
                        <Card.Body>
                        <Card.Title> Full Name Here </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> Job Title Here </Card.Subtitle>
                        <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis saepe quos ut exercitationem iusto sunt necessitatibus  </Card.Text>
                        <Button variant='success'> Button </Button>
                        </Card.Body>
                        <Card.Footer className="text-muted"> Social Links  </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
            
        </>
    )
}

export default Team;
