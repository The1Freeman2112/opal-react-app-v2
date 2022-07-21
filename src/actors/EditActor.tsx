import React from 'react'
import ActorForm from './ActorForm'

interface EditActorProps {

}

const EditActor: React.FC<EditActorProps> = () => {
    return (
        <>
            <h3>Edit Actor</h3>
            <ActorForm model={{
                name: 'Tom Holland',
                dateOfBirth: new Date('1996-06-01T00:00:00'),
                biography: `# Something
This person was born in **DR**`,
                pictureUrl:'https://img.buzzfeed.com/buzzfeed-static/static/2021-03/26/21/asset/ce00d07041fd/sub-buzz-645-1616792677-30.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto'
            }}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}
export default EditActor