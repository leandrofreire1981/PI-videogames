
export default function Page(props){


    return (
        <div>
            <div>
                {props.name}
                <br></br>
                 {props.genres.length && props.genres.map((res, i) => (
                    <p key={i}>{res.name}</p>
                ))} 
                <br></br>
                <img src={props.image} alt='not found' />
            </div>
        </div>
    )
}