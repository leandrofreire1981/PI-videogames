import { useHistory, useLocation } from "react-router-dom";
import Loading from "../Loading/Index";
import Page from "../Page/Index";

export default function RenderPages(props){
    const { videogames } = props
    let GAME_PAGE = 15

    const location = useLocation()
    const history = useHistory()

    let query = new URLSearchParams(location.search)
    let start = parseInt(query.get('inicio')) || 1;
    let end = parseInt(query.get('fin')) || 15;
    
    if (start < 0) history.push('?inicio=1&fin=15');
    
    let renderVideogames = videogames.slice(start-1, end)

    function prevPage(){
        history.push({search: `?inicio=${start - GAME_PAGE }&fin=${end - GAME_PAGE}`})

    }

    function nextPage(){
        history.push({search: `?inicio=${start + GAME_PAGE}&fin=${end + GAME_PAGE}`})
        
    }

    return (
        <div>
            <h2>Mostrando elementos del {start} al {end}</h2>
            {start >= GAME_PAGE && <button onClick={prevPage}>Pagina anterior</button>}
            {end < videogames.length && <button onClick={nextPage}>Pagina siguiente</button>}
                {renderVideogames.length? renderVideogames?.map((res, i) => (
                    <Page key={i} id={res.id} name={res.name} image={res.image} genres={res.genres} rating={res.rating} />
                )): <Loading />} 
        </div>
    )
}