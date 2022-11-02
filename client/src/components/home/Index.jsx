import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getVideogames } from '../../redux/actions';
import OrderVideogames from '../OrderVideogames';
import SearchBar from '../SearchBar';
import RenderPages from '../renderPages'


export default function Home(){
    const dispatch = useDispatch();
    
    const videogames = useSelector(state => state.videogames)
    const findGames = useSelector(state => state.findGames)
    console.log('home: ', videogames)
    
    useEffect(() => {
        dispatch(getVideogames())
    }, [dispatch])


    return (
        <div>
            <div>
                <SearchBar videogames={videogames} />
            </div>
            <div>
                {findGames.length? <OrderVideogames videogames={findGames} ban='findGames'/> : <OrderVideogames videogames={videogames} ban='fvideogames'/>}
            </div>
            <div>
                {findGames.length? <RenderPages videogames={findGames} ban='findGames'/> : <RenderPages videogames={videogames} ban='fvideogames'/>}
            </div>
        </div>
    )
}