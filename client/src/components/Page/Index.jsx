
export default function Page(props){


    return (
        <div>
            <div>
                {props.name}
                rating: {props.rating}
                <br></br>
                 {props.genres.length && props.genres.map((genres, i) => (
                    <p key={i}>{genres}</p>
                ))} 
                <br></br>
               {/*  <img src={props.image} alt='not found' /> */}
            </div>
        </div>
    )
}