import { useState,useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { SearchContext } from '../context';

const Navi = () => {
  const [searchState, setSearchState] = useState('');
  const { setSearchTerm } = useContext(SearchContext);

  /**
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchTerm(searchState);
  };

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const onChange = (e) => {
    e.preventDefault();

    setSearchState(e.target.value);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">Talha Demirtaş</Navbar.Brand>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#">About Me</Nav.Link>
        </Nav>
        <form onSubmit={handleSubmit} className="d-flex">
          <input
            type="search"
            placeholder="Search"
            className="me-2 form-control"
            aria-label="Search"
            onChange={onChange}
          />
          <button type="submit" className='btn btn-outline-success' onClick={handleSubmit}>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </Navbar>
    </>
  );
};

export default Navi;
