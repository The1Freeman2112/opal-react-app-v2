import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import TextField from '../forms/TextField'
import Button from '../utils/Button'
import { movieTheaterCreationDTO } from './movieTheater.model'
import * as Yup from 'yup'
import MapField from '../forms/MapField'
import coordinateDTO from '../utils/coordinates.model'

interface MovieTheaterFormProps {
    model: movieTheaterCreationDTO;
    onSubmit(values: movieTheaterCreationDTO, actions: FormikHelpers<movieTheaterCreationDTO>): void
}

const MovieTheaterForm: React.FC<MovieTheaterFormProps> = (props) => {

    function transformCoordinates(): coordinateDTO[] {
        if(props.model.latitude && props.model.longitude){
            const response: coordinateDTO = {lat: props.model.latitude, lng: props.model.longitude};
            return [response];
        }

        return [];
    }

    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUppercase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayName='Name' field='name' />
                    <div style={{marginBottom: '1rem'}}>
                        <MapField latField='latitude' lngField='longitude' coordinates={transformCoordinates()} />
                    </div>

                    <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                    <Link className='btn btn-secondary' to="/movietheaters">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}
export default MovieTheaterForm