import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">Oki Place</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#footer">About</Nav.Link>
                        <Nav.Link href="#action2">Join Our Member</Nav.Link>
                        <Nav.Link href="#" disabled>
                            Cafe & Resto
                        </Nav.Link>
                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                    <img width={40} className='logo' src="../src/assets/image/logo.png" alt="" />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;