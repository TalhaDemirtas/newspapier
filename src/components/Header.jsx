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
            <Nav.Link href="/general">General</Nav.Link>
            <Nav.Link href="/business">Bussiness</Nav.Link>
            <Nav.Link href="/health">Health</Nav.Link>
            <Nav.Link href="/science">Science</Nav.Link>
            <Nav.Link href="/entertainment">Entertainment</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
            <Nav.Link href="/technology">Tech</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
