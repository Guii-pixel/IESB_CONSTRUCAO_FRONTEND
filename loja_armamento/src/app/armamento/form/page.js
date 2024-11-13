'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, Col, Form, FormLabel, Row } from 'react-bootstrap'
import { FaArrowLeft, FaCheck } from "react-icons/fa"
import { v4 } from 'uuid'
import * as Yup from 'yup'
import MaskedInput from 'react-text-mask'


export default function ArmamentoFormPage(props) {

  const router = useRouter()

  const armamento = JSON.parse(localStorage.getItem('armamento')) || []

  const id = props.searchParams.id
  const armamentoEditado = armamento.find(item => item.id == id)

  function salvar(dados) {
    if (armamentoEditado) {
      Object.assign(armamentoEditado, dados)
      localStorage.setItem('armamento', JSON.stringify(armamento))
    } else {
      dados.id = v4()
      armamento.push(dados)
      localStorage.setItem('armamento', JSON.stringify(armamento))
    }

    alert("Armamento salvo com sucesso!")
    router.push("/armamento")
  }

  const initialValues = {
    nome: '',
    cor: '',
    classificacaoQuantoAoPorte: '',
    classificacaoQuantoALegalidade: '',
    almaDoCano: '',
    mira: '',
    gatilho: '',
    carregador: ''
  }

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    cor: Yup.string().required("Campo obrigatório"),
    classificacaoQuantoAoPorte: Yup.string().required("Campo obrigatório"),
    classificacaoQuantoALegalidade: Yup.string().required("Campo obrigatório"),
    almaDoCano: Yup.string().required("Campo obrigatório"),
    mira: Yup.string().required("Campo obrigatório"),
    gatilho: Yup.string().required("Campo obrigatório"),
    carregador: Yup.string().required("Campo obrigatório")
  })

  return (
    <Pagina titulo={"Cadastro de Armas"}>

      <Formik
        initialValues={armamentoEditado || initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Nome:</Form.Label>
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
                  <Form.Label className="form-label-alma-do-cano">Cor:</Form.Label>
                  <Form.Control
                    name='cor'
                    type='text'
                    value={values.cor}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.cor && !errors.cor}
                    isInvalid={touched.cor && errors.cor}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.cor}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Classificação quanto ao porte:</Form.Label>
                  <Form.Control
                    name='classificacaoQuantoAoPorte'
                    type='text'
                    value={values.classificacaoQuantoAoPorte}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.classificacaoQuantoAoPorte && !errors.classificacaoQuantoAoPorte}
                    isInvalid={touched.classificacaoQuantoAoPorte && errors.classificacaoQuantoAoPorte}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.classificacaoQuantoAoPorte}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Classificação quanto à legalidade:</Form.Label>
                  <Form.Control
                    name='classificacaoQuantoALegalidade'
                    type='text'
                    value={values.classificacaoQuantoALegalidade}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.classificacaoQuantoALegalidade && !errors.classificacaoQuantoALegalidade}
                    isInvalid={touched.classificacaoQuantoALegalidade && errors.classificacaoQuantoALegalidade}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.classificacaoQuantoALegalidade}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Alma do cano:</Form.Label>
                  <Form.Control
                    name='almaDoCano'
                    type='text'
                    value={values.almaDoCano}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.almaDoCano && !errors.almaDoCano}
                    isInvalid={touched.almaDoCano && errors.almaDoCano}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.almaDoCano}</Form.Control.Feedback>
                </Form.Group>
                
                
                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Mira:</Form.Label>
                  <Form.Select
                    name='mira'
                    value={values.mira}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.mira && !errors.mira}
                    isInvalid={touched.mira && errors.mira}
                  >
                    <option value=''>Selecione</option>
                    <option value="SIM">SIM</option>
                    <option value="NÃO">NÃO</option>
                  </Form.Select>
                  <Form.Control.Feedback type='invalid'>{errors.mira}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Gatilho:</Form.Label>
                  <Form.Select
                    name='gatilho'
                    value={values.gatilho}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.gatilho && !errors.gatilho}
                    isInvalid={touched.gatilho && errors.gatilho}
                  >
                    <option value=''>Tipos de Gatilhos</option>
                    <option value="Um-estagio">Um-estágio</option>
                    <option value="Dois-estagios">Dois-estágios</option>
                  </Form.Select>
                  <Form.Control.Feedback type='invalid'>{errors.gatilho}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="form-label-alma-do-cano">Carregador:</Form.Label>
                  <MaskedInput         
                   mask={[/\d/, /\d/, '-', /[M]/, /[U]/, /[N]/, /[I]/, /[Ç]/, /[O]/, /[E]/, /[S]/ ]}
                   name='carregador'
                   type='string'
                   value={values.carregador}
                   onChange={handleChange}
                   className='form-control'
                   onBlur={handleBlur}
                   isValid={touched.carregador && !errors.carregador}
                   isInvalid={touched.carregador && errors.carregador}
                 />
                  <Form.Control.Feedback type='invalid'>{errors.carregador}</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group className='text-end' as={Col}> 
                <FormLabel>Ações</FormLabel>   
                <Button className='me-2' href='/armamento'><FaArrowLeft /> Voltar</Button>
                <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
              </Form.Group>
            </Form>
          )
        }}
      </Formik>
    </Pagina>
  )
}
