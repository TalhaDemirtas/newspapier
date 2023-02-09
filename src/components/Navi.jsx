import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navi = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">Talha Demirtaş</Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#">About Me</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><i className='fa fa-search'></i></Button>
          </Form>
    </Navbar>
    </>
  );
};

export default Navi;
