import { Field, useFormikContext } from 'formik';
import React from 'react'
import ReactMarkdown from 'react-markdown';
import './MarkdownField.css';

interface MarkdownFieldProps {
    displayName: string;
    field: string;
}

const MarkdownField: React.FC<MarkdownFieldProps> = (props) => {
    const {values} = useFormikContext<any>();
        return(
 <div className='mb-3 form-markdown'>
    <div>
        <label>{props.displayName}</label>
        <div>
            <Field name={props.field} as="textarea" className="form-textarea" />
        </div>
    </div>
    <div>
        <label>{props.displayName} (preview):</label>
        <div className='markdown-constainer'>
            <ReactMarkdown>{values[props.field]}</ReactMarkdown>
        </div>
    </div>
 </div>
)
}
export default MarkdownField