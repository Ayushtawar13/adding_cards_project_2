import Card from "./card";
 

function Tours({tours,removeTour}){
    console.log("me toh hu",tours)
    return(
        <div className="tours">
            <div className="heading">
                <p>Plan With Love</p>
            </div>
            <div className="card-container">
                    {
                        tours.map( (tour) => 
                        {return <Card  {...tour} removeTour={removeTour}></Card> })
                         
                    }
            </div>
        </div>

    ); 
}

export default Tours;