'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import { v4 } from 'uuid'
import * as Yup from 'yup'
import MaskedInput from 'react-text-mask'

export default function ClienteFormPage(props) {

  const router = useRouter()

  const cliente = JSON.parse(localStorage.getItem('cliente')) || []

  const id = props.searchParams.id
  const clienteEditado = cliente.find(item => item.id == id)

 

  // função para salvar os dados do form
  function salvar(dados) {
    // Se professorEditado existe, mudar os dados e gravar no localStorage
    if (clienteEditado) {
      Object.assign(clienteEditado, dados)
      // Substitui a lista antiga pela nova no localStorage
      localStorage.setItem('cliente', JSON.stringify(cliente))
    } else {
      // se clienteEditado não existe, é criação de uma nova
      // gerar um ID (Identificador unico)
      dados.id = v4()
      // Adiciona a nova faculdade na lista de faculdades
      cliente.push(dados)
      // Substitui a lista antiga pela nova no localStorage
      localStorage.setItem('cliente', JSON.stringify(cliente))
    }

    alert("Cliente criado com sucesso!")
    router.push("/cliente")
  }

  const initialValues = {
    nomeCompleto: '',
    cpf: '',
    endereco: '',
    telefone: '',
    email: '',
    dataNascimento: '',
    status: '',
    observacoes: ''
  }

  const validationSchema = Yup.object().shape({
    nomeCompleto: Yup.string().required("Campo obrigatório"),
    cpf: Yup.string().required("Campo obrigatório"),
    endereco: Yup.string().required("Campo obrigatório"),
    telefone: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    dataNascimento: Yup.date().required("Campo obrigatório"),
    status: Yup.string().required("Campo obrigatório"),
    observacoes: Yup.string().required("Campo obrigatório")
  })

  return (
    <Pagina titulo={"Cadastro de Cliente"}>

      <Formik
        initialValues={clienteEditado || initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Nome Completo:</Form.Label>
                  <Form.Control
                    name='nomeCompleto'
                    type='text'
                    value={values.nomeCompleto}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.nomeCompleto && !errors.nomeCompleto}
                    isInvalid={touched.nomeCompleto && errors.nomeCompleto}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.nomeCompleto}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">CPF:</Form.Label>
                  <MaskedInput
                    mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                    name='cpf'
                    type='text'
                    value={values.cpf}
                    onChange={handleChange}
                    className='form-control'
                    onBlur={handleBlur}
                    isValid={touched.cpf && !errors.cpf}
                    isInvalid={touched.cpf && errors.cpf}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.cpf}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Endereço:</Form.Label>
                  <Form.Control
                    name='endereco'
                    type='text'
                    value={values.endereco}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.endereco && !errors.endereco}
                    isInvalid={touched.endereco && errors.endereco}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.endereco}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Telefone:</Form.Label>
                  <Form.Control
                    name='telefone'
                    type='text'
                    value={values.telefone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.telefone && !errors.telefone}
                    isInvalid={touched.telefone && errors.telefone}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.telefone}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Email:</Form.Label>
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
                  <Form.Label className="form-label-alma-do-cano">Data de Nascimento:</Form.Label>
                  <Form.Control
                    name='dataNascimento'
                    type='date'
                    value={values.dataNascimento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.dataNascimento && !errors.dataNascimento}
                    isInvalid={touched.dataNascimento && errors.dataNascimento}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.dataNascimento}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Status:</Form.Label>
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

                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Observações:</Form.Label>
                  <Form.Control
                    name='observacoes'
                    type='text'
                    value={values.observacoes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.observacoes && !errors.observacoes}
                    isInvalid={touched.observacoes && errors.observacoes}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.observacoes}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group className='text-end'>
                <Button className='me-2' href='/cliente'><FaArrowLeft /> Voltar</Button>
                <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
              </Form.Group>
            </Form>
          )
        }}
      </Formik>
    </Pagina>
  )
}
