import React from 'react'
import { Formik, Form, Field, useField } from 'formik'
import { Button, Input, ProgressBar } from '@/components'
import { validation } from './validation'
import st from './styles.scss'

const FirstStep = props => {
  return (
    <section className="container">
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirm: ''
        }}

        validate={validation}
      >
        <Form className="auth-window">
          <div>
            <h1 className="head">Signup</h1>
            <ProgressBar value="30" />
          </div>
          <div>
            <Input name="email" id="email" type="email" label="EMAIL" />
            <Input name="password" id="password" type="password" label="PASSWORD" />
            <Input name="confirm" id="confirm" type="password" label="CONFIRM PASSWORD" />
          </div>
          <div className={st.button}>
            <Button type="submit" name="Next" />
          </div>
        </Form>
      </Formik>
    </section>
  )
}

export default FirstStep