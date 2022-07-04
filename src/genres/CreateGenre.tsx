import React from 'react'
import GenreForm from './GenreForm';

interface CreateGenreProps {

}

const CreateGenre: React.FC<CreateGenreProps> = ({ }) => {
        return (
                <>
                        <h3>Create Genre</h3>

                        <GenreForm model={{ name: '' }}
                                onSubmit={async value => {
                                        await new Promise(r => setTimeout(r, 1));
                                        console.log(value);
                                }}
                        />
                </>
        )
}
export default CreateGenre 