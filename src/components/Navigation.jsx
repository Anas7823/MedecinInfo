import '../styles/Navigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark" className='navigation'>
            <Container>
            <Navbar.Brand href="#">MédecinInfo</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#">Mes patients</Nav.Link>
                <Nav.Link href="#">Nouveau patient</Nav.Link>
                <Nav.Link href="#">Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default Navigation
