import { useState, useContext } from 'react';
import { SearchContext } from '../context';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navi = () => {
  const [searchState, setSearchState] = useState('');
  const { setSearchTerm } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchState);
  };

  const onChange = (e) => {
    e.preventDefault();
    setSearchState(e.target.value);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/aboutme">Talha Demirtaş</Navbar.Brand>
          <Nav
            className="me-auto m-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>
          <form onSubmit={handleSubmit} className="d-flex">
            <input
              type="search"
              placeholder="Search"
              className="me-2 form-control"
              aria-label="Search"
              onChange={onChange}
            />
            <button
              type="submit"
              className="btn btn-outline-success"
              onClick={handleSubmit}
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
        </Container>
      </Navbar>
    </>
  );
};

export default Navi;
