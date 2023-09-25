import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar--gradient">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={require("../images/logo.jpeg")} className="nav--logo" alt="Parian Tiles and Flooring Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Col xs="2" className="d-flex align-items-center">
            <div className="ms-5"> {/* Use ms-3 class for left margin */}
              <Nav className="me-auto">
                
              <LinkContainer to="/">
                <Nav.Link className="border border-dark rounded ms-2 bg-light">Home</Nav.Link>
              </LinkContainer>

                <LinkContainer to="/about">
                  <Nav.Link className="border border-dark rounded ms-2 bg-light">About</Nav.Link>
                </LinkContainer>
               
                <LinkContainer to="/services">
                  <Nav.Link className="border border-dark rounded ms-2 bg-light"> Services</Nav.Link>
                </LinkContainer>
                
                {/* <LinkContainer to="/contact">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer> */}
                
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </div>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;