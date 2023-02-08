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
        <Navbar.Brand className='font-weight-bold'>Topics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#general">General</Nav.Link>
            <Nav.Link href="#Bussiness">Bussiness</Nav.Link>
            <Nav.Link href="#Health">Health</Nav.Link>
            <Nav.Link href="#Science">Science</Nav.Link>
            <Nav.Link href="#Entertainment">Entertainment</Nav.Link>
            <Nav.Link href="#Sports">Sports</Nav.Link>
            <Nav.Link href="#Tech">Tech</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
