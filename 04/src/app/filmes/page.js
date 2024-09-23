'use client'

import React, { useEffect, useState } from 'react'
import apiFilmes from '../../../apiFilmes'
import Pagina from '../components/Pagina'

export default function page() {
  
    const[Filmes, setFilmes] = useState({})

// Fazer algo quando iniciar o componente
useEffect (() => {

    //Buscar os filmes
    buscarFilmes()
}, {}) 


    async function buscarFilmes() {
     const resultados = apiFilmes.gst("/movie/popular?language=pt-BR")
     console.log(resultados.data.results)
     const filmesRecebidos = resultados.data.results
     setFilmes(filmesRecebidos)
  }
  
    return (
   
    <Pagina titulo="Filmes">
        <row>

            {Filmes.map(films => {
                return (
                    <col>
                    <p>(films.original.title)</p>
                    </col>
                )
                    
                
            }

        </row>

    </Pagina>

  )
}
