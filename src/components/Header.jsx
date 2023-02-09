import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navi from './navi';

const Header = () => {
  return (
    <div>
      <Navi />
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand
              className="font-weight-bold"
              style={{ fontSize: '30px', color: 'aquamarine' }}
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
