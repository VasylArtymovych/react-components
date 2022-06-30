import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

const schema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().min(6).max(12).required(),
});

const initialValues = {
    login: '',
    password: '',
};

export const LoginForm = () => {

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };

    return (
    <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
    >
        <Form autoComplete="off">
            <label htmlFor="login">
            Login
            <Input type="text" name="login" />
            <ErrorMessage name="login" component="div"/>
            </label>
            <br />
            <label htmlFor="password">
            Password
            <Field type="password" name="password"/>
            <ErrorMessage name="password" component="div"/>
            </label>
            <button type="submit">Submit</button>
        </Form>    
    </Formik>
        
    );
};

const Input = styled(Field)`
    width: 200px;
    height: 30px;
    background-color: lightblue;
`;