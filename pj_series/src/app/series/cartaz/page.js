'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Pagina from '@/app/components/Pagina'
import apiSerie from '@/app/apis/apiSerie'
import apiSerie from '@/app/apis/apiSerie'


export default function page() {

    const [series, setSerie] = useState([])

    // Fazer algo quando iniciar o componente

    useEffect(() => {

        // Buscar os filmes
        buscarSeries()

    }, [])


    async function buscarSerie() {
        const resultado = await apiSerie.get("/movie/now_playing?language=pt-BR")
        const seriesRecebidos = resultado.data.results
        console.log(seriesRecebidos)
        setSerie(seriesRecebidos)
    }


    return (

        <Pagina titulo="Filmes em Cartaz">

            <Row md={4}>

                {filmes.map(filme => {
                    return (
                        <Col className='py-2'>
                            <Card style={{ height: '100%' }}>
                                <Card.Img src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path} />
                                <Card.Body>
                                    <Card.Title>{filme.original_title}</Card.Title>
                                    <p><b>Nota:</b> {filme.vote_average} ⭐</p>
                                </Card.Body>
                                <Card.Footer className='text-end'>
                                    <Button href={'/filmes/' + filme.id} >Detalhes</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                })}


            </Row>

        </Pagina>


    )
}