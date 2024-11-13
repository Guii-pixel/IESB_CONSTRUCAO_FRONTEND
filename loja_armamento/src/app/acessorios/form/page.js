'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import { v4 } from 'uuid'
import * as Yup from 'yup'
import MaskedInput from 'react-text-mask'

export default function AcessorioFormPage(props) {

  const router = useRouter()

  const acessorio = JSON.parse(localStorage.getItem('acessorio')) || []

  const id = props.searchParams.id
  const acessorioEditado = acessorio.find(item => item.id == id)

  function salvar(dados) {
    if (acessorioEditado) {
      Object.assign(acessorioEditado, dados)
      localStorage.setItem('acessorio', JSON.stringify(acessorio))
    } else {
      dados.id = v4()
      acessorio.push(dados)
      localStorage.setItem('acessorio', JSON.stringify(acessorio))
    }

    alert("Acessório salvo com sucesso!")
    router.push("/acessorios")
  }

  const initialValues = {
    silenciadores: '',
    coletes: '',
    cartuchos: '',
    coldres: '',
    miras: '',
    luvas: '',
    equipamentosDeProtecao: '',
    desejaSugerirOutroAcessorio: ''
  }

  const validationSchema = Yup.object().shape({
    silenciadores: Yup.string().required("Campo obrigatório"),
    coletes: Yup.string().required("Campo obrigatório"),
    cartuchos: Yup.string().required("Campo obrigatório"),
    coldres: Yup.string().required("Campo obrigatório"),
    miras: Yup.string().required("Campo obrigatório"),
    luvas: Yup.string().required("Campo obrigatório"),
    equipamentosDeProtecao: Yup.string().required("Campo obrigatório"),
    desejaSugerirOutroAcessorio: Yup.string()
  })

  return (
    <Pagina titulo={"Cadastro de Acessórios"}>

      <Formik
        initialValues={acessorioEditado || initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Silenciadores:</Form.Label>
                  <Form.Control
                    name='silenciadores'
                    type='text'
                    value={values.silenciadores}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.silenciadores && !errors.silenciadores}
                    isInvalid={touched.silenciadores && errors.silenciadores}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.silenciadores}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Coletes:</Form.Label>
                  <Form.Control
                    name='coletes'
                    type='text'
                    value={values.coletes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.coletes && !errors.coletes}
                    isInvalid={touched.coletes && errors.coletes}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.coletes}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Cartuchos:</Form.Label>
                  <Form.Control
                    name='cartuchos'
                    type='text'
                    value={values.cartuchos}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.cartuchos && !errors.cartuchos}
                    isInvalid={touched.cartuchos && errors.cartuchos}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.cartuchos}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Coldres:</Form.Label>
                  <MaskedInput
                    mask={[/[A-Z]/, /[A-Z]/, /[A-Z]/]}
                    name='coldres'
                    type='text'
                    value={values.coldres}
                    onChange={handleChange}
                    className='form-control'
                    onBlur={handleBlur}
                    isValid={touched.coldres && !errors.coldres}
                    isInvalid={touched.coldres && errors.coldres}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.coldres}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Miras:</Form.Label>
                  <Form.Control
                    name='miras'
                    type='text'
                    value={values.miras}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.miras && !errors.miras}
                    isInvalid={touched.miras && errors.miras}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.miras}</Form.Control.Feedback>
                </Form.Group>
                
                
                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Luvas:</Form.Label>
                  <Form.Control
                    name='luvas'
                    value={values.luvas}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.luvas && !errors.luvas}
                    isInvalid={touched.luvas && errors.luvas}
                  >
                  </Form.Control>
                  <Form.Control.Feedback type='invalid'>{errors.luvas}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Equipamentos de Proteção:</Form.Label>
                  <Form.Control
                    name='equipamentosDeProtecao'
                    value={values.equipamentosDeProtecao}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.equipamentosDeProtecao && !errors.equipamentosDeProtecao}
                    isInvalid={touched.equipamentosDeProtecao && errors.equipamentosDeProtecao}
                  >
                  </Form.Control>
                  <Form.Control.Feedback type='invalid'>{errors.equipamentosDeProtecao}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Deseja sugerir outro acessório?</Form.Label>
                  <Form.Control
                   name='desejaSugerirOutroAcessorio'
                   type='string'
                   value={values.desejaSugerirOutroAcessorio}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   isValid={touched.desejaSugerirOutroAcessorio && !errors.desejaSugerirOutroAcessorio}
                   isInvalid={touched.desejaSugerirOutroAcessorio && errors.desejaSugerirOutroAcessorio}
                 >
          
                 </Form.Control>
                  <Form.Control.Feedback type='invalid'>{errors.desejaSugerirOutroAcessorio}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group className='text-end'>
                <Button className='me-2' href='/acessorios'><FaArrowLeft /> Voltar</Button>
                <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
              </Form.Group>
            </Form>
          )
        }}
      </Formik>
    </Pagina>
  )
}
