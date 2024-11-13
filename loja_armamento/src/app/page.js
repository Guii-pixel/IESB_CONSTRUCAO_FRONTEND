'use client'

import Pagina from '../components/Pagina'
import { Button, Card, Col, Row } from 'react-bootstrap'


export default function HomePage() {

  const armamento = JSON.parse(localStorage.getItem("armamento")) || []
  const munição = JSON.parse(localStorage.getItem("munição")) || []
  const acessórios = JSON.parse(localStorage.getItem("acessório")) || []
  const cliente = JSON.parse(localStorage.getItem("cliente")) || []
  const fornecedor = JSON.parse(localStorage.getItem("fornecedor")) || []

  const lista = [
    {
      nome: "Armamento",
      imagem: "https://i.pinimg.com/564x/c3/9f/74/c39f74c7044d0d6287e8415040f5d0ff.jpg", quantidade: armamento.length,
      link: "/armamento"
    },
    {
      nome: "Munição",
      imagem: "https://i.pinimg.com/564x/a8/d4/31/a8d4315c9c9d7ea295d88e527ee5a4d1.jpg", quantidade: munição.length,
      link: "/municao"
    },
    {
      nome: "Acessório",
      imagem: "https://i.pinimg.com/564x/1b/43/11/1b43111b510d9cd97debd25a11c50fc6.jpg", quantidade: acessórios.length,
      link: "/acessorio"
    },
    {
      nome: "Clientes",
      imagem: "https://i.pinimg.com/564x/1c/a0/6e/1ca06e3f72c122a75003bb0151595546.jpg", quantidade: cliente.length,
      link: "/cliente"
    },
    {
      nome: "Fornecedor",
      imagem: "https://i.pinimg.com/564x/d2/74/4e/d2744e34b58a20d18fb11dcdf273d808.jpg", quantidade: fornecedor.length,
      link: "/fornecedor"
    },
  ]

  return (
    <Pagina titulo={"Loja Armamento"}>
      <Row md={5}>
        {lista.map(item => (
          <Col className='py-2' key={item.nome}>
            <Card style={{ height: '100%' }}>
              <Card.Img src={item.imagem} style={{ height: '100%' }} />
              <Card.Body>
                <Card.Title>{item.nome}</Card.Title>
                Cadastrados: {item.quantidade}
              </Card.Body>
              <Card.Footer className='text-end'>
                <Button href={item.link}>Ver Lista</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  )
}
