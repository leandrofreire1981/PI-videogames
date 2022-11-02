import { useDispatch } from "react-redux";
import { GET_VIDEOGAMES } from "../../redux/const";


export default function OrderVideogames(props){
    let { videogames } = props;

    const dispatch = useDispatch()

    function handleOrder(e){
        switch (e.target.name) {
            case 'AZ':
                videogames.sort((a, b) => a.name.localeCompare(b.name));
                break;
            
            case 'ZA':
                videogames.sort((a, b) => b.name.localeCompare(a.name));
                break;
            
            case 'mayorRating':
                videogames.sort((a, b) => b.rating - a.rating);
                break;

            case 'menorRating':
                videogames.sort((a, b) => a.rating - b.rating);
                break;

            default:
                break;
        }

            dispatch({
            type: GET_VIDEOGAMES,
            payload: videogames
        })

    }

    return (
        <div>
            <button name='AZ' onClick={handleOrder}>A_Z</button>
            <button name='ZA' onClick={handleOrder}>Z-A</button>
            <div>
                <button name='mayorRating' onClick={handleOrder}>Mayor rating</button>
                <button name='menorRating' onClick={handleOrder}>Menor rating</button>
            </div>
        </div>
    )
}