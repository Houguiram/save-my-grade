import PropTypes from 'prop-types'
import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from 'axios';
import classNames from "classnames";

CourseCreator.propTypes = {
    successCallback: PropTypes.func.isRequired
};

function CourseCreator({successCallback}) {
    return (
        <div className="box" style={{width: '100%', marginTop: 40}}>
            <Formik
                initialValues={{name: '', cycle: ''}}
                validate={values => {
                    let errors = {};
                    if (!values.name) {
                        errors.name = "Le nom de la matière ne peut pas être vide";
                    }
                    if (!values.cycle) {
                        errors.cycle = "Le cycle doit être selectionné";
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    axios({
                        method: 'post',
                        url: '/api/courses',
                        data: values
                    })
                        .then(() => {
                            setSubmitting(false);
                            successCallback()
                        })
                        .catch(() => {
                            setSubmitting(false);
                        });
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="name" name="name" className="input" placeholder="Nom de la matière"/>
                        <ErrorMessage name="name" component="div"/>
                        <div style={{marginTop: 10}}/>
                        <div className="select">
                            <Field name="cycle" component="select" placeholder="Cycle">
                                <option value="" disabled hidden>Cycle</option>
                                <option value={"prep"}>Prépa</option>
                                <option value={"cii"}>CII</option>
                                <option value={"ing"}>Ingé</option>
                            </Field>
                        </div>
                        <ErrorMessage name="cycle" component="div"/>
                        <div style={{marginTop: 10}}/>
                        <button type="submit" disabled={isSubmitting}
                                className={classNames("button", "is-info", {"is-loading": isSubmitting})}>
                            Créer matière
                        </button>
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default CourseCreator;