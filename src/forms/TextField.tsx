import { Field, ErrorMessage } from 'formik'
import React from 'react'
import { isPropertySignature } from 'typescript';

interface TextFieldProps {
    field: string;
    displayName: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
    return (
        <div className='mb-3'>
            <label htmlFor={props.field}>{props.displayName}</label>
            <Field id={props.field} name={props.field} className="form-control" />
            <ErrorMessage name={props.field}>{msg =>
                <div>{msg}</div>}
            </ErrorMessage>
        </div>

    )
}
export default TextField