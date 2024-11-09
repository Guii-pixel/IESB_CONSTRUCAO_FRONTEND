'use client'


import Pagina from '@/components/Pagina'
import { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa'

export default function FornecedorPage() {

  const [fornecedor, setFornecedores] = useState([])

  // Faz alguma coisa quando o usuário acessa a tela
  useEffect(() => {
    // Busca a lista do localStorage, se não existir, inicia uma vazia
    const fornecedorLocalStorage = JSON.parse(localStorage.getItem("fornecedores")) || []
    // guarda a lista no estado
    setFornecedores(fornecedorLocalStorage)
    console.log(fornecedorLocalStorage)
  }, [])

  // Função para exclusão do item
  function excluir(fornecedor) {
    // Confirma com o usuário a exclusão
    if (window.confirm(`Deseja realmente excluir o fornecedor ${fornecedor.nome}?`)) {
      // filtra a lista antiga removando o professor recebido
      const novaLista = fornecedor.filter(item => item.id !== fornecedor.id)
      // grava no localStorage a nova lista
      localStorage.setItem('fornecedor', JSON.stringify(novaLista))
      // grava a nova lista no estado para renderizar na tela
      setFornecedores(novaLista)
      alert("Fornecedor excluído com sucesso!")
    }
  }


  return (
    <Pagina titulo={"Lista de Fornecedores"}>
      <div className='text-end mb-2'>
        <Button href='/fornecedor/form'><FaPlusCircle /> Novo</Button>
      </div>

      {/* Tabela com os Fornecedores */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>CPF</th>
            <th>Número</th>
            <th>Email</th>
            <th>Sexo</th>
            <th>Endereço</th>
            <th>Status</th>  
          </tr>
        </thead>
        <tbody>
          {fornecedor.map(fornecedor => {
            return (
              <tr>
                <td>{fornecedor.nome}</td>
                <td>{fornecedor.sobrenome}</td>
                <td>{fornecedor.cpf}</td>
                <td>{fornecedor.numero}</td>
                <td>{fornecedor.email}</td>
                <td>{fornecedor.sexo}</td>
                <td>{fornecedor.endereco}</td>
                <td>{fornecedor.status}</td>
                <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/fornecedor/form?id=${fornecedor.id}`}><FaPen /></Button>
                  <Button variant='danger' onClick={() => excluir(fornecedor)}><FaTrash /></Button>

                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>



    </Pagina>
  )
}