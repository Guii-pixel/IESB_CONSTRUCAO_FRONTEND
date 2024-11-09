'use client'


import Pagina from '@/components/Pagina'
import { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa'

export default function ArmamentoPage() {

  const [armamento, setArmamento] = useState([])

  // Faz alguma coisa quando o usuário acessa a tela
  useEffect(() => {
    // Busca a lista do localStorage, se não existir, inicia uma vazia
    const armamentoLocalStorage = JSON.parse(localStorage.getItem("armamento")) || []
    // guarda a lista no estado faculdades
    setArmamento(armamentoLocalStorage)
    console.log(armamentoLocalStorage)
  }, [])

  // Função para exclusão do item
  function excluir(armamento) {
    // Confirma com o usuário a exclusão
    if (window.confirm(`Deseja realmente excluir a armamento ${armamento.nome}?`)) {
      // filtra a lista antiga removando a faculdade recebida
      const novaLista = armamento.filter(item => item.id !== armamento.id)
      // grava no localStorage a nova lista
      localStorage.setItem('armamento', JSON.stringify(novaLista))
      // grava a nova lista no estado para renderizar na tela
      setArmamento(novaLista)
      alert("Armamento excluído com sucesso!")
    }
  }


  return (
    <Pagina titulo={"Lista de Armamentos"}>
      <div className='text-end mb-2'>
        <Button href='/armamento/form'><FaPlusCircle /> Novo</Button>
      </div>

      {/* Tabela com os armamentos */}
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
          {armamento.map(armamento => {
            return (
              <tr>
                <td>{armamento.nome}</td>
                <td>{armamento.endereco}</td>
                <td>{armamento.pais}</td>
                <td>{armamento.estado}</td>
                <td>{armamento.cidade}</td>
                <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/armamento/form?id=${armamento.id}`}><FaPen /></Button>
                  <Button variant='danger' onClick={() => excluir(armamento)}><FaTrash /></Button>

                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>



    </Pagina>
  )
}