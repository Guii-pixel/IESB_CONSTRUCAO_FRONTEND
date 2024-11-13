'use client'

import { Container, Nav, Navbar } from "react-bootstrap"



export default function Pagina({ titulo, children }) {

  return (
    <>
      {/* Barra de Navegação */}
      <Navbar bg="dark" data-bs-theme="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/armamento">Armamento</Nav.Link>
            <Nav.Link href="/municao">Munição</Nav.Link>
            <Nav.Link href="/acessorios">Acessórios</Nav.Link>
            <Nav.Link href="/cliente">Cliente</Nav.Link>
            <Nav.Link href="/fornecedor">Fornecedor</Nav.Link>
            <Nav.Link href="https://wa.me/5561991160014?text=Olá%2C%20gostaria%20de%20saber%20mais">WhatsApp</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Barra de Título com Background Temático */}
      <div className="bg-dark text-center text-white py-3" style={{ backgroundImage: 'url(/camuflado-pattern.png)', backgroundSize: 'cover' }}>
        <h1>{titulo}</h1>
      </div>

      {/* Conteudo da Página */}
      <Container className="mt-4 p-4" style={{ borderRadius: '8px', border: '2px solid #333', backgroundColor: '#2e2e2e' }}>
        {children}
      </Container>
    </>
  )
}