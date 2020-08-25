import React from 'react';
import {
  Formik, Form,
} from 'formik';
import { useSelector } from 'react-redux';
import {
  Button, ProgressBar,
} from '@/components';
import { userDataSelector } from '@/redux/selectors/userData';
import { CheckSvg } from '@/assets/icons/';
import st from './styles.scss';

const ThirdStep = () => {
  const userData = useSelector(userDataSelector);
  const onClick = () => {
    console.log(JSON.stringify(userData));
  };

  return (
    <section className="container">
      <Formik>
        <Form className="auth-window">
          <div>
            <h1 className="head">Thank you!</h1>
            <ProgressBar value={100} />
          </div>
          <div className={st.check}>
            <CheckSvg />
          </div>
          <div className={st.button}>
            <Button type="button" onClick={onClick}>Go to Dashboard</Button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default ThirdStep;
