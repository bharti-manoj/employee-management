import React from 'react'
import { Field, ErrorMessage } from 'formik';

function TextField({ label, type, name, disabled }) {
    return (
        <>
            <label><strong>{label}: </strong></label>
            <Field type={type} name={name} className="form-control" disabled={disabled} />
            <ErrorMessage name={name} component="div" />
        </>
    )
}

export default TextField
