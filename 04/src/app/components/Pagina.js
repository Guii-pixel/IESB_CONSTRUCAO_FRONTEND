import { Container } from "react-bootstrap";
import BarraNavegacao from "../BarraNavegacao";


export default function Pagina({Título, children}) {
  return (
    <>

        <BarraNavegacao />

        <div className="bg-secondary text-white text-center py-2"> 
            <h1>{Título}</h1>
        </div>

        <Container className="mt-2">
            {children}
        </Container>
    
    </>
  )
}
