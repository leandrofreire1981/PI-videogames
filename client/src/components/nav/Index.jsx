import { Link } from 'react-router-dom'

export default function Nav(){

    return (
        <div>
            <Link to='/'>
                Inicio
            </Link>
            <Link to='/home'>
                Home
            </Link>
            <Link to='/createGame' >
                Crear juego
            </Link>
        </div>
    )

}