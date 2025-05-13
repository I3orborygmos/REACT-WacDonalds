import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, Col, Button } from 'react-bootstrap'
import data from './wacdata'

export default function Home() {
    return (
        <div>
            <Col className="mx-auto">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="responsive-container" 
                    >
                        {/* Image */}
                        <img
                            className="card-image"
                            alt=""
                            src={item.image}
                        />

                        {/* Card */}
                        <Card className="responsive-card">
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.text}</Card.Text>
                                <Button className='button' >Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Col>
        </div>
    )
}