import { useSelector } from "react-redux"

export default function CreateVideogame(){
    
    const genres = useSelector(state => state.genres)   

    return (
        <div> 
            <div> Crear Juego </div>

            <form>
                <div>
                    <label>Nombre:</label>
                    <input type='text' />
                </div>
                <div>
                    <label>Descripción</label>
                    <textarea type='text' />   
                </div>
                <div>
                    <label>Fecha de lanzamiento:</label>
                    <input type='date' />
                </div>
                <div>
                    <label>Rating: </label>
                    <input type='number' min='0' max='4' step='0.01'/>
                </div>
                <div>
                    <label>Géneros: </label>
                    {genres.length && genres.map(gen => (
                        <genres> {gen.name}
                            <input type='checkbox' />
                        </genres>
                    ))}

                </div>
                


            </form>

        </div>
    )
}