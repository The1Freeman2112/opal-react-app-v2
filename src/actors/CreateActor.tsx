import React from 'react'
import ActorForm from './ActorForm'

interface CreateActorProps {

}

const CreateActor: React.FC<CreateActorProps> = () => {
    return (
        <>
            <h3>Create Actor</h3>
            <ActorForm model={{ name: '', dateOfBirth: undefined }}
                onSubmit={values => console.log(values) }
            />
        </>
    )
}
export default CreateActor