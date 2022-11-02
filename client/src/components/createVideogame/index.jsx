import { useRef } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { postVideogame } from "../../redux/actions"

export default function CreateVideogame(){
    
    const genres = useSelector(state => state.genres) 
    const platforms = useSelector(state => state.platforms)

    const errorRef = useRef(null);

    const [ input, setInput ] = useState({
        name: '',
        description: '',
        released: null,
        rating: null,
        genres: new Set(),
        platforms: new Set(),
        created: true
    })

    function handleInput(e){
        let aux = []
        if(e.target.name === 'description' || e.target.name === 'name'){
            
            if(!/[a-zA-Z 0-9.,¡!¿?$]+/gi.test(e.target.value.charAt(e.target.value.length - 1)))
                errorRef.current.innerHTML = 'Solo se permiten letras y numeros'
            else    
                errorRef.current.innerHTML = ''
            e.target.value = e.target.value.match(/[a-zA-Z 0-9.,¡!¿?$]+/gi)
            aux = []
            aux.push(e.target.value)
            aux.flat()
            e.target.value=aux[0].slice(0,1000)
            if(e.target.name === 'name'){
                e.target.value=aux[0].slice(0,50)

            }
            setInput({...input, [e.target.name]: e.target.value})
            return;
        }

        if(e.target.name==='released'){
            let auxDate = new Date()
            let actualDate
            if(auxDate.getMonth() + 1 < 10)
                actualDate = auxDate.getFullYear() + '-0' + (auxDate.getMonth() + 1)  + '-' + auxDate.getDate()
            else    
                actualDate = auxDate.getFullYear() + '-' + (auxDate.getMonth() + 1)  + '-' + auxDate.getDate()
            if(e.target.value > '1970-01-01' && e.target.value <= actualDate)   
                setInput({...input, released: e.target.value})
            else{
                setInput({...input, released: ''})
                e.target.value = 'dd / mm / aaaa'
            }
            return;
        }

        if(e.target.name === 'rating'){
            if(e.target.value >= 0 && e.target.value <= 5)
                setInput({...input, rating: e.target.value})
            else    
                e.target.value = ''
            return;
        }
        
        if(genres.includes(e.target.value) || platforms.includes(e.target.value)){
            if(e.target.name==='platforms' || e.target.name==='genres'){
                if(input[e.target.name].has(e.target.value))
                    input[e.target.name].delete(e.target.value)
                else
                    input[e.target.name].add(e.target.value)
            setInput({...input})
        }}

        

    }

    function handleClear(e){
        setInput({
            name: '',
            description: '',
            released: null,
            rating: null,
            genres: new Set(),
            platforms: new Set(),
            created: true
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!input.name || !input.description || [...input.platforms].length === 0){
            alert('Falta completar campos')
            return
        }
        postVideogame({...input, genres: [...input.genres], platforms: [...input.platforms]})
    }

    
    return (
        <div> 
            <div> Crear Juego </div>

            <form onSubmit={handleSubmit}>
                <input type='reset' value='Limpiar' onClick={handleClear} />
                <div>
                    <label >Nombre:</label>
                    <input type='text' name='name' onChange={handleInput} />
                </div>
                <div>
                    <label>Descripción</label>
                    <textarea type='text'  name='description' onChange={handleInput} />   
                </div>
                    <label ref={errorRef} ></label>
                <div>
                    <label>Fecha de lanzamiento:</label>
                    <input type='date' min='1960-01-01' name='released' onChange={handleInput} />
                </div>
                <div>
                    <label>Rating: </label>
                    <input type='number' min='0' max='4' step='0.01' name='rating' onChange={handleInput} />
                </div>
                <div>
                    <label>Géneros: </label>
                    {genres.length && genres.map((gen, i) => (
                        <div key = {i}> {gen}
                            <input type='checkbox' name='genres' value={gen} onChange={handleInput} />
                        </div>
                    ))}
                </div>
                <div>
                    <label>Plataformas: </label>
                    {platforms.length && platforms.map((res, i) => (
                        <div key = {i}>{res} 
                            <input type='checkbox' name='platforms' value={res} onChange={handleInput} />
                        </div>
                    ))} 
                </div>
                <input type='submit' />

            </form>

        </div>
    )
}