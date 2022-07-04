import { movieDTO } from "./movies.model";
import css from "./IndividualMovie.module.css";

// export default function IndividualMovie(props: movieDTO){

//     const buildLink = () => `/movie/${props.id}`;

//     return(
//         <div className={css.div}>
//             <a>
//                 <img alt="Poster" src={props.poster} />
//             </a>
//             <p>
//                 <a href={buildLink()}>{props.title}</a>
//             </p>
//         </div>
//     )
// }

const Test: React.FC<movieDTO> = ({ id, title, poster }) => {
    const buildLink = () => `/movie/${id}`;
    return (
        <div className={css.div}>
            <a>
                <img alt="Poster" src={poster} />
            </a>
            <p>
                <a href={buildLink()}>{title}</a>
            </p>
        </div>
    )
}
export default Test