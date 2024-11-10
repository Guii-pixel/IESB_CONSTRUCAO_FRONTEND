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
    const municaoLocalStorage = JSON.parse(localStorage.getItem("municao")) || []
    // guarda a lista no estado faculdades
    setMunicao(municaoLocalStorage)
    console.log(municaoLocalStorage)
  }, [])

  // Função para exclusão do item
  function excluir(municaoParaExcluir) {
    // Confirma com o usuário a exclusão
    if (window.confirm(`Deseja realmente excluir a municao ${municaoParaExcluir.nome}?`)) {
      // filtra a lista antiga removando a faculdade recebida
      const novaLista = municao.filter(item => item.id !== municaoParaExcluir.id)
      // grava no localStorage a nova lista
      localStorage.setItem('municao', JSON.stringify(novaLista))
      // grava a nova lista no estado para renderizar na tela
      setMunicao(novaLista)
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
            <th>Calibre</th>
            <th>Projétil</th>
            <th>Bala</th>
            <th>Estojo</th>
            <th>Propelente</th>
            <th>Espoleta</th>
            <th>Pólvora</th>
            <th>Detonador</th>
          </tr>
        </thead>
        <tbody>
          {municao.map(municao => {
            return (
              <tr>
                <td>{municao.calibre}</td>
                <td>{municao.projetil}</td>
                <td>{municao.bala}</td>
                <td>{municao.estojo}</td>
                <td>{municao.propelente}</td>
                <td>{municao.espoleta}</td>
                <td>{municao.polvora}</td>
                <td>{municao.detonador}</td>
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