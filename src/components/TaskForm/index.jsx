import { Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

const TaskForm = (props) => {
  const {createTaskAction} = props;
  const submitHandler = (values, formikBag) => {
    createTaskAction(values)
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={{
        text: '',
        isDone: false,
      }}
      onSubmit={submitHandler}
    >
      <Form>
        <Field name="text" placeholder="Введите задачу" />
        <button type="submit">Добавить Задачу</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTaskAction: (values) => dispatch(actionCreators.createTask(values)),
  };
};

export default connect(null, mapDispatchToProps)(TaskForm);
