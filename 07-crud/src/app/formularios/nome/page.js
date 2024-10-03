import React from 'react'
import Pagina from '@/components/Pagina'


export default function page() {

    function HandNomes

  return (
    <Pagina titulo="Formulário Nome">

        <div>
            <h2>Seu nome</h2>
            <h2>Seu e-mail</h2>
        </div>
        

        {/*Form do React Bootstrap*/}
        <Form>
        <Form.Group>
               {/*Form do Nome*/}
            <Form.Label>Nome</Form.Label>
            <Form.Control 
            type="text" 
            name="nome"
            anchanges= {}
            />
            <Form.Text>Informe seu nome</Form.Text>
        </Form.Group>

         {/*Form de email*/}
         <Form.Group>
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="text" name="nome" />
            <Form.Text>Informe seu e-mail</Form.Text>
        </Form.Group>

        <Button>Enviar</Button>




        </Form>
        


    </Pagina>
  )
}
