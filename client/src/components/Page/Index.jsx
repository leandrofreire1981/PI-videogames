import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from '../Loading'

export default function Page(props){
    console.log('page: ', props.image)

    if(!props.image)
        return(
            <div>
                No se encontró ningun juego
            </div>
        )
    return (
        <div>s
            <div>
                <Link to={`/videogames/${props.id}`}>
                    {props.name}

                </Link>
                rating: {props.rating}
                <br></br>
                 {props.genres.length && props.genres.map((genres, i) => (
                    <p key={i}>{genres}</p>
                ))} 
                <br></br>
                 <img src={props.image} alt='not found' /> 
            </div>
        </div>
    )
}