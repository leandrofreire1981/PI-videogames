import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getVideogameById } from "../../redux/actions"
import { GET_VIDEOGAMES_BY_ID } from "../../redux/const"
import Loading from "../Loading/Index"
import parser from 'html-react-parser'


export default function GameDetail(){
    const { id } = useParams()
    
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getVideogameById(id))
        return () => dispatch({
            type: GET_VIDEOGAMES_BY_ID,
            payload: {}
        })
    }, [])
    
    let vg = useSelector(state => state.gameDetail)
   console.log('detalles: ', vg)
    if(vg.image)
        return (
            <div>
                <h2>Nombre</h2>
                {vg.name}
                <div>
                    Lanzado: {vg.released}
                </div>
                <div>
                    Rating: {vg.rating}
                </div>
                <h2>
                    Plataformas
                </h2>
                <div>
                    {vg.platforms.map((res, i) => (
                        <p key = {i}>{res}</p>
                    ))}
                </div>
                <h2>
                    Genero
                </h2>
                <div>
                    {vg.genres.map((res, i) => (
                        <p key = {i}> {res} </p>
                    ))}
                </div>
                <h2>
                    Descripcion
                </h2>
                <div>
                   {parser(vg.description)} 
                   <img src={vg.image} alt='not found' />
                </div>
            </div>
        )
    
    return (
        <div>

        <Loading />
        </div>
    )

}