import React from 'react'
import { Link } from 'react-router-dom'

interface IndexMovieTheatersProps {

}

const IndexMovieTheaters: React.FC<IndexMovieTheatersProps> = () => {
    return (
        <>
            <h3>Movie Theaters</h3>
            <Link className="btn btn-primary" to="/movietheaters/create">Create a movie theater</Link>
        </>
    )
}
export default IndexMovieTheaters