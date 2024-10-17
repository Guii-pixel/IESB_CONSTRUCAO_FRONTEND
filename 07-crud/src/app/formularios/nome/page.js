'use client'

import Pagina from '@/components/Pagina'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
<<<<<<< HEAD
=======
import { FaCheck, FaTrashAlt } from "react-icons/fa";
>>>>>>> 402162f4f692e2540c0e742229a839df7b0c5489

export default function FormulariosNomePage() {

<<<<<<< HEAD
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

=======
export default function FormulariosNomePage() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

>>>>>>> 402162f4f692e2540c0e742229a839df7b0c5489
  function handleNome(evento) {
    setNome(evento.target.value)
  }

  function handleEmail(evento) {
    setEmail(evento.target.value)
  }

  function reset(){
    console.log("CHAMOU O RESET")
    setNome('')
    setEmail('')
  }

  function submit(evento) {
    evento.preventDefault()
    console.log(nome, email)
  }

  return (
    <Pagina titulo="Formulário Nome">

      <div>
        <h2>Seu nome é: {nome}</h2>
        <h2>Seu email é: {email}</h2>
      </div>

      {/* Form do React Boostrap */}
      <Form onSubmit={submit}>
        {/* Input Nome */}
        <Form.Group className='mb-2'>
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type='text'
            name='nome'
            value={nome}
            onChange={handleNome}
            placeholder='Informe o seu nome'
          />
          <Form.Text>Informe o seu nome</Form.Text>
        </Form.Group>

        {/* Input email */}
        <Form.Group className='mb-2'>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type='email'
            name='email'
            value={email}
            onChange={handleEmail}
          />
          <Form.Text>Informe o seu e-mail</Form.Text>
        </Form.Group>

<<<<<<< HEAD
        <Button type='submit'>Enviar</Button>
        <Button onClick={reset}>Limpar</Button>
=======
        <Button type='submit' className='me-2'><FaCheck /> Enviar</Button>
        <Button onClick={reset}><FaTrashAlt /> Limpar</Button>
>>>>>>> 402162f4f692e2540c0e742229a839df7b0c5489

      </Form>


    </Pagina>
  )
}