import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getVideogames } from '../../redux/actions';
import OrderVideogames from '../OrderVideogames/Index';
import Loading from '../Loading/Index';
import Nav from '../nav/Index.jsx';
import Page from '../Page/Index';
import RenderPages from '../renderPages/Index';
export default function Home(){

    const dispatch = useDispatch();

    const videogames = useSelector(state => state.videogames)

    useEffect(() => {
        dispatch(getVideogames())
    }, [dispatch])

    return (
        <div>
            <Nav/>
            <div>
                <OrderVideogames videogames={videogames} />
            </div>
            <div>
                <RenderPages videogames={videogames} />
            </div>
        </div>
    )
}