'use client'


import Pagina from '@/components/Pagina'
import { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa'

export default function MunicaoPage() {

  const [municao, setMunicao] = useState([])

  // Faz alguma coisa quando o usuário acessa a tela
  useEffect(() => {
    // Busca a lista do localStorage, se não existir, inicia uma vazia
    const municaoLocalStorage = JSON.parse(localStorage.getItem("munição")) || []
    // guarda a lista no estado faculdades
    setMunicao(municaoLocalStorage)
    console.log(municaoLocalStorage)
  }, [])

  // Função para exclusão do item
  function excluir(municao) {
    // Confirma com o usuário a exclusão
    if (window.confirm(`Deseja realmente excluir a municao ${municao.nome}?`)) {
      // filtra a lista antiga removando a faculdade recebida
      const novaLista = municao.filter(item => item.id !== municao.id)
      // grava no localStorage a nova lista
      localStorage.setItem('municao', JSON.stringify(novaLista))
      // grava a nova lista no estado para renderizar na tela
      setArmamento(novaLista)
      alert("Munição excluída com sucesso!")
    }
  }


  return (
    <Pagina titulo={"Lista de Munições"}>
      <div className='text-end mb-2'>
        <Button href='/municao/form'><FaPlusCircle /> Novo</Button>
      </div>

      {/* Tabela com as Munições */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cor</th>
            <th>Classificação quanto ao porte</th>
            <th>Classificação quanto à legalidade</th>
            <th>Alma do cano</th>
            <th>Mira</th>
            <th>Gatilho</th>
            <th>Carregador</th>
          </tr>
        </thead>
        <tbody>
          {municao.map(municao => {
            return (
              <tr>
                <td>{municao.nome}</td>
                <td>{municao.endereco}</td>
                <td>{municao.pais}</td>
                <td>{municao.estado}</td>
                <td>{municao.cidade}</td>
                <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/municao/form?id=${municao.id}`}><FaPen /></Button>
                  <Button variant='danger' onClick={() => excluir(municao)}><FaTrash /></Button>

                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>



    </Pagina>
  )
}