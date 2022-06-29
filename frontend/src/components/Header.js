import React from "react"
import { Container, Navbar } from "react-bootstrap"
const Header = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Admin</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header