import React from 'react';
import {
  Formik, Form,
} from 'formik';
import {
  Button, RadioButton, ProgressBar, SelectOptions, InputBox,
} from '@/components';
import st from './styles.scss';

const SecondStep = () => (
  <section className="container">
    <Formik>
      <Form className="auth-window">
        <div>
          <h1 className="head">Signup</h1>
          <ProgressBar value="66" />
        </div>
        <div className={st.cont}>
        <div className={st.inputsWrapper}>
          <h2 className={st.headText}>DATE OF BIRTH</h2>
          <InputBox type="number" placeholder="DD" min="1" max="31" />
          <InputBox type="number" placeholder="MM" min="1" max="12" />
          <InputBox type="number" placeholder="YYYY" min="1950" max="2020" />
        </div>
        <div className={st.radioGroup}>
          <h2 className={st.headText}>GENDER</h2>
          <div>
            <RadioButton id="radio1" label="MALE" />
            <RadioButton id="radio2" label="FEMALE" />
            <RadioButton id="radio3" label="UNSPECIFIED" />
          </div>
        </div>
        <div className={st.select}>
          <h2 className={st.headText}>Where did you hear about is?</h2>
          <SelectOptions />
        </div>
        </div>
        <div className={st.buttons}>
          <Button type="submit" name="Back" />
          <Button type="submit" name="Next" />
        </div>
      </Form>
    </Formik>
  </section>
);

export default SecondStep;
