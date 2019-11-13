import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'


const NavBar = () => (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Navbar.Brand>Scoreboard</Navbar.Brand>
        <Nav className="mr-auto">
            <LinkContainer to="/groups"><Nav.Link>Ploegen</Nav.Link></LinkContainer>
            <LinkContainer to="/rounds"><Nav.Link>Reeksen</Nav.Link></LinkContainer>
            <LinkContainer to="/intermediatescore"><Nav.Link>Tussenstand</Nav.Link></LinkContainer>
            <LinkContainer to="/finalscore"><Nav.Link>Eindstand</Nav.Link></LinkContainer>
        </Nav>
    </Navbar>
)

export default NavBar
