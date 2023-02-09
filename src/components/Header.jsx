import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navi from "./navi"

const Header = () => {
  return (
    <div>
    <Navi />
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar.Brand className='font-weight-bold' style={{fontSize:"30px", color:"aquamarine"}}>Topics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/general">General</Nav.Link>
            <Nav.Link to="/bussiness">Bussiness</Nav.Link>
            <Nav.Link to="/health">Health</Nav.Link>
            <Nav.Link to="/science">Science</Nav.Link>
            <Nav.Link to="/entertainment">Entertainment</Nav.Link>
            <Nav.Link to="/sports">Sports</Nav.Link>
            <Nav.Link to="/tech">Tech</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
