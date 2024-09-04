import React from 'react'
import { Row } from 'react-bootstrap'
import Pagina from '../componentes/Pagina'

export default function page() {
  
  const carros = ("HB20", "Civic", "Argo", "Onix")
  
    return (
   <Pagina titulo = "listas">
        <Row>
            <col>
                {carros.map(carros => {
            return <p>(carro)</p>
        })} 
            </col>
            <col>
                <ul>
                {carros.map(carro => {
            return <li>(carro)</li>
        })}
                </ul>
            </col>

        
  
        </Row>
   </Pagina>
  )
}
