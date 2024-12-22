import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HeaderBasket } from "../../eCommerce";


import styles from "./styles.module.css";
import { Badge } from "react-bootstrap";
const { headerContainer, headerLogo } = styles;
function Header() {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>our</span> <Badge bg="info">Ecom</Badge>
        </h1>
        <HeaderBasket />
      </div>

      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#cat">Categories</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
            </Nav>
            <Nav className="">
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
