import React from 'react'
import Card from 'react-bootstrap/Card';
import './Services.css'
function Services() {
    return (
        <div className='services'>
            <div className='section-title'>
                <h2>Services</h2>
                <p>Check out the great services we offer</p>
            </div>
            <div className='icon-box'>
                <div className='icon-box-content'>
                    <Card style={{ width: '15rem', border: 'none' }}>
                        <Card.Body>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>
                                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='icon-box-content'>
                    <Card style={{ width: '15rem',border: 'none'}}>
                        <Card.Body>
                            <Card.Title>Sed ut perspiciatis</Card.Title>
                            <Card.Text>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='icon-box-content'>
                    <Card style={{ width: '15rem',border: 'none' }}>
                        <Card.Body>
                            <Card.Title>Magni Dolores</Card.Title>
                            <Card.Text>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='icon-box-content'>
                    <Card style={{ width: '15rem',border: 'none'}}>
                        <Card.Body>
                            <Card.Title>Nemo Enim</Card.Title>
                            <Card.Text>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Services
