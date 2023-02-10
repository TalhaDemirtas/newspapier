import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand
              className="font-weight-bold"
            >
              Topics
            </Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/" className='nav-link'>Home</Link>
              <Link to="/general" className='nav-link'>General</Link>
              <Link to="/business" className='nav-link'>Bussiness</Link>
              <Link to="/health" className='nav-link'>Health</Link>
              <Link to="/science" className='nav-link'>Science</Link>
              <Link to="/entertainment" className='nav-link'>Entertainment</Link>
              <Link to="/sports" className='nav-link'>Sports</Link>
              <Link to="/technology" className='nav-link'>Tech</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
