import React from 'react'
import MovieTheaterForm from './MovieTheaterForm'

interface EditMovieTheaterProps {

}

const EditMovieTheater: React.FC<EditMovieTheaterProps> = () => {
    return (
        <>
            <h3>Edit MovieTheater</h3>
            <MovieTheaterForm
                model={{name: 'AMC'}}
                onSubmit =  {values => console.log(values)}
            />
        </>
    )
}
export default EditMovieTheater