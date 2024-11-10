'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import { v4 } from 'uuid'
import * as Yup from 'yup'

export default function MunicaoFormPage(props) {

  const router = useRouter()

  const municao = JSON.parse(localStorage.getItem('municao')) || []

  const id = props.searchParams.id
  const municaoEditado = municao.find(item => item.id == id)

  // função para salvar os dados do form
  function salvar(dados) {
    // Se professorEditado existe, mudar os dados e gravar no localStorage
    if (municaoEditado) {
      Object.assign(municaoEditado, dados)
      // Substitui a lista antiga pela nova no localStorage
      localStorage.setItem('municao', JSON.stringify(municao))
    } else {
      // se clienteEditado não existe, é criação de uma nova
      // gerar um ID (Identificador unico)
      dados.id = v4()
      // Adiciona a nova faculdade na lista de faculdades
      municao.push(dados)
      // Substitui a lista antiga pela nova no localStorage
      localStorage.setItem('municao', JSON.stringify(municao))
    }

    alert("Munição criada com sucesso!")
    router.push("/municao")
  }

  const initialValues = {
    calibre: '',
    projetil: '',
    bala: '',
    estojo: '',
    propelente: '',
    espoleta: '',
    polvora: '',
    detonador: ''
  }

  const validationSchema = Yup.object().shape({
    calibre: Yup.string().required("Campo obrigatório"),
    projetil: Yup.string().required("Campo obrigatório"),
    bala: Yup.string().required("Campo obrigatório"),
    estojo: Yup.string().required("Campo obrigatório"),
    propelente: Yup.string().required("Campo obrigatório"),
    espoleta: Yup.string().required("Campo obrigatório"),
    polvora: Yup.string().required("Campo obrigatório"),
    detonador: Yup.string().required("Campo obrigatório")
  })

  return (
    <Pagina titulo={"Cadastro de Munições"}>

      <Formik
        initialValues={municaoEditado || initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>Calibre:</Form.Label>
                  <Form.Control
                    name='calibre'
                    type='text'
                    value={values.calibre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.calibre && !errors.calibre}
                    isInvalid={touched.calibre && errors.calibre}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.calibre}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Projétil:</Form.Label>
                  <Form.Control
                    name='projetil'
                    type='text'
                    value={values.projetil}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.projetil && !errors.projetil}
                    isInvalid={touched.projetil && errors.projetil}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.projetil}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>Bala:</Form.Label>
                  <Form.Control
                    name='bala'
                    type='text'
                    value={values.bala}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.bala && !errors.bala}
                    isInvalid={touched.bala && errors.bala}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.bala}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Estojo:</Form.Label>
                  <Form.Control
                    name='estojo'
                    type='text'
                    value={values.estojo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.estojo && !errors.estojo}
                    isInvalid={touched.estojo && errors.estojo}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.estojo}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>Propelente:</Form.Label>
                  <Form.Control
                    name='propelente'
                    type='text'
                    value={values.propelente}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.propelente && !errors.propelente}
                    isInvalid={touched.propelente && errors.propelente}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.propelente}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Espoleta:</Form.Label>
                  <Form.Control
                    name='espoleta'
                    type='text'
                    value={values.espoleta}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.espoleta && !errors.espoleta}
                    isInvalid={touched.espoleta && errors.espoleta}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.espoleta}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>Pólvora:</Form.Label>
                  <Form.Control
                    name='polvora'
                    type='text'
                    value={values.polvora}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.polvora && !errors.polvora}
                    isInvalid={touched.polvora && errors.polvora}
                  >
                  </Form.Control>
                  <Form.Control.Feedback type='invalid'>{errors.polvora}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Detonador:</Form.Label>
                  <Form.Control
                    name='detonador'
                    type='text'
                    value={values.detonador}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.detonador && !errors.detonador}
                    isInvalid={touched.detonador && errors.detonador}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.detonador}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group className='text-end'>
                <Button className='me-2' href='/municao'><FaArrowLeft /> Voltar</Button>
                <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
              </Form.Group>
            </Form>
          )
        }}
      </Formik>
    </Pagina>
  )
}
