import style from './fundamentos.module.css'

export default function cabeçalho(props) {

    const { titulo, descricao } = props

    return (
        <>
            <h1 style={{}} className={style.titulo}>{titulo}</h1>
            <p className={style.titulo}>{descricao}</p>
            <hr />
        </>
    )
}