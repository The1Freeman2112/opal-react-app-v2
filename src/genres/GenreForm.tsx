import { Formik, Form, FormikHelpers } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import TextField from '../forms/TextField';
import Button from '../utils/Button';
import * as Yup from 'yup';
import { genreCreationDTO } from './genres.model';

interface GenreFormProps {
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void;
}

const GenreForm: React.FC<GenreFormProps> = (props) => {
    return (
        <>
            <Formik initialValues={props.model}
                onSubmit={props.onSubmit}
                validationSchema={Yup.object({
                    name: Yup.string().required('This field is required').firstLetterUppercase()
                })}
            >
                {(formikProps) => (
                    <Form>
                        <TextField field='name' displayName='Name Proper' />

                        <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                        <Link className='btn btn-secondary' to="/genres">Cancel</Link>
                    </Form>
                )}
            </Formik>
        </>
    )
}
export default GenreForm