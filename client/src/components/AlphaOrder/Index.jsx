import { useDispatch } from "react-redux";
import { ALPHA_ORDER } from "../../redux/const";

export default function AlphaOrder(props){
    let { videogames } = props;
    
    const dispatch = useDispatch()

    function alphaOrder(){
        videogames.sort((a, b) => a.name.localeCompare(b.name))
        dispatch({
            type: ALPHA_ORDER,
            payload: videogames
        })
    }

    function reverseOrder(){
        videogames.reverse((a, b) => a.name.localeCompare(b.name))
        dispatch({
            type: ALPHA_ORDER,
            payload: videogames
        })
    }


    return (
        <div>
            <button onClick={alphaOrder}>A_Z</button>
            <button onClick={reverseOrder}>Z-A</button>
        </div>
    )
}