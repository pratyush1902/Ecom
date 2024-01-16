import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartShopping } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';

function NavbarPage() {
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Yolo.com</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
              <a href="#"><FaCartShopping /><Badge bg="danger">0 </Badge></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default NavbarPage
