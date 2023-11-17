import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import styles from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <div className={styles.navWrapper}>
            <Navbar expand="lg" className={`navbar navbar-expand-lg navbar-dark bg-primary ${styles.navbar}`} data-bs-theme="dark" >
                <Container fluid>
                    <Navbar.Brand as={Link} to="#">Easy Recipes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
                            <Nav.Link as={Link} to="/tips">Cooking Tips</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 bg-black text-white border-0"
                                aria-label="Search"
                                style={{ '::placeholder': { color: 'white !important' } }}
                            />
                            <Button className="btn btn-outline-light" >Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MainNavigation;
