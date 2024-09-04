//
'use client'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Pagina(props) {

    function ColorSchemesExample() {
        return (
          <>
            <Navbar bg="dark" data-bs-theme="dark">
              <Container>
                <Navbar.Brand href="/">MeuApp</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/fundamentos">Fundamentos</Nav.Link>
                  <Nav.Link href="/listas">Listas</Nav.Link>
                  
                </Nav>
              </Container>
            </Navbar>
    
            <div className='bg-secundary text-white text-center'>
                <h1>(props.titulo)</h1>
            </div>
    
            <container>
                (props.children)
            </container>
    
    
            <Navbar bg="primary" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
    
    
    
          <Navbar bg="light" data-bs-theme="light">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
    }


}


