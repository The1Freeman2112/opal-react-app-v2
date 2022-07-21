import React from 'react'
import MovieTheaterForm from './MovieTheaterForm'

interface CreateMovieTheaterProps {

}

const CreateMovieTheater: React.FC<CreateMovieTheaterProps> = () => {
    return (
        <>
            <h3>Create MovieTheater</h3>
            <MovieTheaterForm
                model={{name: ''}}
                onSubmit= {values => console.log(values)}
            />
        </>
    )
}
export default CreateMovieTheater