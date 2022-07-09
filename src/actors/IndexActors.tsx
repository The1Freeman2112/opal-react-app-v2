import React from 'react'
import { Link } from 'react-router-dom'

interface IndexActorsProps {

}
const IndexActors: React.FC<IndexActorsProps> = () => {
    return (
        <>
            <h3>Actors</h3>
            <Link className="btn btn-primary" to="/actors/create">Create Actors</Link>
        </>
    )
}
export default IndexActors