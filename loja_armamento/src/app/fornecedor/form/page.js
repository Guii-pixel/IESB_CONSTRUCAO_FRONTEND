'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import { v4 } from 'uuid'
import * as Yup from 'yup'

export default function FornecedorFormPage(props) {

  const router = useRouter()

  const fornecedor = JSON.parse(localStorage.getItem('fornecedor')) || []

  const id = props.searchParams.id
  const fornecedorEditado = fornecedor.find(item => item.id == id)

  function salvar(dados) {
    if (fornecedorEditado) {
      Object.assign(fornecedorEditado, dados)
      localStorage.setItem('fornecedor', JSON.stringify(fornecedor))
    } else {
      dados.id = v4()
      fornecedor.push(dados)
      localStorage.setItem('fornecedor', JSON.stringify(fornecedor))
    }

    alert("Fornecedor salvo com sucesso!")
    router.push("/fornecedor")
  }

  const initialValues = {
    nome: '',
    sobrenome: '',
    cpf: '',
    numero: '',
    email: '',
    sexo: '',
    endereco: '',
    status: ''
  }

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    sobrenome: Yup.string().required("Campo obrigatório"),
    cpf: Yup.string().required("Campo obrigatório"),
    numero: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    sexo: Yup.string().required("Campo obrigatório"),
    endereco: Yup.string().required("Campo obrigatório"),
    status: Yup.string().required("Campo obrigatório")
  })

  return (
    <Pagina titulo={"Cadastro de Fornecedores"}>

      <Formik
        initialValues={fornecedorEditado || initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>Nome:</Form.Label>
                  <Form.Control
                    name='nome'
                    type='text'
                    value={values.nome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.nome && !errors.nome}
                    isInvalid={touched.nome && errors.nome}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.nome}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Sobrenome:</Form.Label>
                  <Form.Control
                    name='sobrenome'
                    type='text'
                    value={values.sobrenome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.sobrenome && !errors.sobrenome}
                    isInvalid={touched.sobrenome && errors.sobrenome}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.sobrenome}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>CPF:</Form.Label>
                  <Form.Control
                    name='cpf'
                    type='text'
                    value={values.cpf}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.cpf && !errors.cpf}
                    isInvalid={touched.cpf && errors.cpf}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.cpf}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Número:</Form.Label>
                  <Form.Control
                    name='numero'
                    type='text'
                    value={values.numero}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.numero && !errors.numero}
                    isInvalid={touched.numero && errors.numero}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.numero}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    name='email'
                    type='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.email && !errors.email}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Sexo:</Form.Label>
                  <Form.Select
                    name='sexo'
                    value={values.sexo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.sexo && !errors.sexo}
                    isInvalid={touched.sexo && errors.sexo}
                  >
                  <option value=''>Selecione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                  </Form.Select>
                  <Form.Control.Feedback type='invalid'>{errors.sexo}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>Endereço:</Form.Label>
                  <Form.Control
                    name='endereco'
                    type='string'
                    value={values.endereco}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.endereco && !errors.endereco}
                    isInvalid={touched.endereco && errors.endereco}
                  >
                  </Form.Control>
                  <Form.Control.Feedback type='invalid'>{errors.endereco}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Status:</Form.Label>
                  <Form.Select
                   name='status'
                   value={values.status}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   isValid={touched.status && !errors.status}
                   isInvalid={touched.status && errors.status}
                 >
                   <option value=''>Selecione</option>
                   <option value="Ativo">Ativo</option>
                   <option value="Inativo">Inativo</option>
                 </Form.Select>
                  <Form.Control.Feedback type='invalid'>{errors.status}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group className='text-end'>
                <Button className='me-2' href='/fornecedor'><FaArrowLeft /> Voltar</Button>
                <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
              </Form.Group>
            </Form>
          )
        }}
      </Formik>
    </Pagina>
  )
}
