import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'

function NavBar() {
    return (
        <div>
              <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/courses">Courses</Nav.Link>
                    <Nav.Link href="/student">User Enquiries</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
