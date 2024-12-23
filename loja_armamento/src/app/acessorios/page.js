'use client'


import Pagina from '@/components/Pagina'
import { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa'

export default function AcessorioPage() {

  const [acessorio, setAcessorios] = useState([])

  // Faz alguma coisa quando o usuário acessa a tela
  useEffect(() => {
    // Busca a lista do localStorage, se não existir, inicia uma vazia
    const acessorioLocalStorage = JSON.parse(localStorage.getItem("acessorio")) || []
    // guarda a lista no estado
    setAcessorios(acessorioLocalStorage)
    console.log(acessorioLocalStorage)
  }, [])

  // Função para exclusão do item
  function excluir(acessorioParaExcluir) {
    // Confirma com o usuário a exclusão
    if (window.confirm(`Deseja realmente excluir o acessorio ${acessorioParaExcluir.nome}?`)) {
      // filtra a lista antiga removando o acessório recebido
      const novaLista = acessorio.filter(item => item.id !== acessorioParaExcluir.id)
      // grava no localStorage a nova lista
      localStorage.setItem('acessorio', JSON.stringify(novaLista))
      // grava a nova lista no estado para renderizar na tela
      setAcessorios(novaLista)
      alert("Acessório excluído com sucesso!")
    }
  }


  return (
    <Pagina titulo={"Lista de Acessórios"}>
      <div className='text-end mb-2'>
        <Button href='/acessorios/form'><FaPlusCircle /> Novo</Button>
      </div>

      {/* Tabela com os Acessórios */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Silenciadores</th>
            <th>Coletes</th>
            <th>Cartuchos</th>
            <th>Coldres</th>
            <th>Miras</th>
            <th>Luvas</th>
            <th>Equipamentos de Proteção</th>
            <th>Deseja sugerir outro acessório?</th>  
          </tr>
        </thead>
        <tbody>
          {acessorio.map(acessorio => {
            return (
              <tr>
                <td>{acessorio.silenciadores}</td>
                <td>{acessorio.coletes}</td>
                <td>{acessorio.cartuchos}</td>
                <td>{acessorio.coldres}</td>
                <td>{acessorio.miras}</td>
                <td>{acessorio.luvas}</td>
                <td>{acessorio.equipamentosDeProtecao}</td>
                <td>{acessorio.desejaSugerirOutroAcessorio}</td>
                <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/acessorios/form?id=${acessorio.id}`}><FaPen /></Button>
                  <Button variant='danger' onClick={() => excluir(acessorio)}><FaTrash /></Button>

                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>



    </Pagina>
  )
}