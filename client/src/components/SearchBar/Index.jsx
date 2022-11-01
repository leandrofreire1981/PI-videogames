
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { getVideogamesByName } from "../../redux/actions";
import { SEARCH } from "../../redux/const";

export default function SearchBar(props){
    let videogames = props.videogames
    const dispatch = useDispatch()
    const history = useHistory()

    const genres = useSelector(state => state.genres)

    function handleOnSelect(e, videogames){     
        let vg = []
        console.log('games de select: ', videogames)
        console.log('genero: ', e.target.value)
        if(e.target.value!='Cualquier Genero'){
            videogames.map(res => {
            if(res.genres.includes(e.target.value))
                vg.push(res)
                dispatch({
                    type: SEARCH,
                    payload: vg
                })
            })
            if(vg.length===0){
                //alert('No se encontró el juego')
                dispatch({
                    type: SEARCH,
                    payload: [{id: -1,
                    name: 'Juego no encontrado',
                    image: '',
                    genres: [],
                    rating: -1,
                    created: true, }]
                    })
                e.target.value='Cualquier Genero'

            }

        }

            
            history.push('/home')
    }

    function handleOnSearch(e){
        e.preventDefault()
        dispatch(getVideogamesByName(e.target[0].value))
        console.log(e.target[0].value)


        e.target[0].value=''
        e.target[2].value='Cualquier Genero'
        history.push('/home')
    }

    function handleOnAllGames(){
        dispatch({
            type: SEARCH,
            payload: []
        })
        history.push('/home')
    }



    return(
        <div>
             <form onSubmit={handleOnSearch}>
                <label>Ingrese nombre del juego</label>
                <input type='search' />
                <input type='submit' value='Buscar'/> 

                <label>Seleccione el genero</label>
                <select onChange={(e) => handleOnSelect(e, videogames)} >
                    <option value='Cualquier Genero'>Cualquier Genero</option>
                    {
                        genres.length && genres.map((gen, i) => (
                            <option key={i} value={gen}>{gen}</option>
                            ))
                    }

                </select>  
                <button onClick={handleOnAllGames}>Todos los Juegos</button> 
             {/*    <input type='submit' value='todos los juegos'/> */}
            </form> 
    
        </div>
    )
}