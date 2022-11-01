
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Loading from "../Loading";
import Page from "../Page";



export default function RenderPages(props){
    const { videogames } = props
    let GAME_PAGE = 15
    console.log('videogames', videogames.length)
    
    const location = useLocation()
    const history = useHistory()
    
    let query = new URLSearchParams(location.search)
    let start = parseInt(query.get('inicio')) || 1;
    let end = parseInt(query.get('fin')) || GAME_PAGE;
    if (start < 0) history.push(`?inicio=1&fin=${GAME_PAGE}`);
    
 
    let renderVideogames = videogames.slice(start-1, end)
    console.log('renderpages', renderVideogames)
    
    let pageCount = parseInt(videogames.length / GAME_PAGE)
    let buttonsPages = []
    
    for(let i = 0; i < pageCount + 1; i++){
        buttonsPages.push({
            inicio: i * GAME_PAGE + 1,
            fin: i * GAME_PAGE + GAME_PAGE 
        })
    }
 
    function goPage(e){
        let page = (parseInt(query.get('inicio')) - 1) || 0
        if(page>0)
            page /= GAME_PAGE
        let inicio = 0
        let final = 0
        switch (e.target.id) {
            case 'prev':
                inicio = buttonsPages[page - 1].inicio
                final = buttonsPages[page - 1].fin 
                break;

            case 'next':
               inicio = buttonsPages[page + 1].inicio
               final = buttonsPages[page + 1].fin  
                break;

            default:
                inicio = buttonsPages[e.target.id].inicio
                final = buttonsPages[e.target.id].fin 
                break;
        }
        if(final>videogames.length) final=videogames.length
        history.push({search: `?inicio=${inicio}&fin=${final}`})
    }

    
    return (
        <div>
            <h2>Mostrando Juegos del {start} al {end}</h2>
            {start >= GAME_PAGE && <button id='prev' onClick={goPage}>Pagina anterior</button>}

{/*             {buttonsPages.length && buttonsPages.map((res, i) => (
                <button key={i} onClick={goPage} id={i}>{i + 1}</button>
                ))
            } */}
            
            {end  < videogames.length && <button id='next' onClick={goPage}>Pagina siguiente</button>}
           
                {renderVideogames.length? renderVideogames?.map((res, i) => (
                    <Page key={i} id={res.id} name={res.name} image={res.image} genres={res.genres} rating={res.rating} />
                )): <Loading />} 
        </div>
    )
}