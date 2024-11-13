'use client'


import Pagina from '@/components/Pagina'
import { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa'

//import WhatsAppQRCode from '../qrcode/page';

export default function ClientePage() {

  const [cliente, setClientes] = useState([])

  // Faz alguma coisa quando o usuário acessa a tela
  useEffect(() => {
    // Busca a lista do localStorage, se não existir, inicia uma vazia
    const clienteLocalStorage = JSON.parse(localStorage.getItem("cliente")) || []
    // guarda a lista no estado
    setClientes(clienteLocalStorage)
    console.log(clienteLocalStorage)
  }, [])

  // Função para exclusão do item
  function excluir(clienteParaExcluir) {
    // Confirma com o usuário a exclusão
    if (window.confirm(`Deseja realmente excluir o cliente ${clienteParaExcluir.nome}?`)) {
      // filtra a lista antiga removando o professor recebido
      const novaLista = cliente.filter(item => item.id !== clienteParaExcluir.id)
      // grava no localStorage a nova lista
      localStorage.setItem('cliente', JSON.stringify(novaLista));
      // grava a nova lista no estado para renderizar na tela
      setClientes(novaLista)
      alert("Cliente excluído com sucesso!")
    }
  }


  return (
    <Pagina titulo={"Lista de Clientes"}>
      <div className='text-end mb-2'>
        <Button href='/cliente/form'><FaPlusCircle /> Novo</Button>
      </div>

      {/* Tabela com os Professores */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>Endereço</th>
            <th>Email</th>
            <th>Status</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Data de Nascimento</th>
            <th>Observações</th>  
          </tr>
        </thead>
        <tbody>
          {cliente.map(cliente => {
            return (
              <tr>
                <td>{cliente.nomeCompleto}</td>
                <td>{cliente.endereco}</td>
                <td>{cliente.email}</td>
                <td>{cliente.status}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.dataNascimento}</td>
                <td>{cliente.observacoes}</td>
                <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/cliente/form?id=${cliente.id}`}><FaPen /></Button>
                  <Button variant='danger' onClick={() => excluir(cliente)}><FaTrash /></Button>

                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>



    </Pagina>
  )
}