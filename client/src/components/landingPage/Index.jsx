import { Link } from 'react-router-dom'
export default function LandingPage(){
    return(
        <div>
            <Link to='/home'>
                <button >Entrar</button>
            </Link>
        </div>
    )
}