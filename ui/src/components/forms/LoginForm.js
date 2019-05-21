import PropTypes from 'prop-types'
import React from 'react';
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import classNames from "classnames";

LoginForm.propTypes = {
    successCallback: PropTypes.func.isRequired,
    failureCallback: PropTypes.func.isRequired
};

function LoginForm(props) {
    const {successCallback, failureCallback} = props;
    return (
        <Formik
            initialValues={{email: '', password: ''}}
            validate={values => {
                let errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                axios({
                    method: 'post',
                    url: '/api/login',
                    data: values
                })
                    .then((response) => {
                        setSubmitting(false);
                        successCallback(response.data.body);
                    })
                    .catch(() => {
                        setSubmitting(false);
                        failureCallback();
                    });
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="email" name="email" className="input" placeholder="Email"/>
                    <ErrorMessage name="email" component="div"/>
                    <br/>
                    <Field type="password" name="password" className="input" placeholder="Mot de passe"/>
                    <ErrorMessage name="password" component="div"/>
                    <br/>
                    <button type="submit" disabled={isSubmitting}
                            className={classNames("button", {"is-loading": isSubmitting})}>
                        Se connecter
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default LoginForm;
