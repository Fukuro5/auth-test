import React, { useCallback } from 'react';
import {
  Formik, Form,
} from 'formik';
import { useDispatch } from 'react-redux';
import { stepIncrement, stepDecrement } from '@/redux/actions/steps';
import { addUserData } from '@/redux/actions/userData';
import {
  Button, Switch, ProgressBar, SelectOptions, DateField,
} from '@/components';
import validation from './validation';
import st from './styles.scss';

const SecondStep = () => {
  const dispatch = useDispatch();
  const back = useCallback(() => {
    dispatch(stepDecrement());
  }, [dispatch]);

  const next = useCallback((values) => {
    const date = new Date(values.year, values.month, values.day);

    dispatch(addUserData({
      gender: values.gender,
      dateBirth: date.valueOf(),
      hearAboutIs: values.hearAboutIs,
    }));
    dispatch(stepIncrement());
  }, [dispatch]);

  return (
    <section className="container">
      <Formik
        initialValues={{
          gender: '',
          day: '',
          month: '',
          year: '',
          hearAboutIs: '',
        }}
        onSubmit={next}
        validate={validation}
      >
        <Form className="auth-window">
          <div>
            <h1 className="head">Signup</h1>
            <ProgressBar value={66} />
          </div>
          <div className={st.cont}>
          <div className={st.inputsWrapper}>
            <DateField
              head="DATE OF BIRTH"
            />
          </div>
          <div className={st.radioGroup}>
            <Switch id="gender" name="gender" labels={['MALE', 'FEMALE', 'UNSPECIFIED']} head="GENDER" />
          </div>
          <div className={st.select}>
            <h2 className="head-text">Where did you hear about is?</h2>
            <SelectOptions name="hearAboutIs" />
          </div>
          </div>
          <div className={st.buttons}>
            <Button type="button" onClick={back}>Back</Button>
            <Button type="submit">Next</Button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default SecondStep;
