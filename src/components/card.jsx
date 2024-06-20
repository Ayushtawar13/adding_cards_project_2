import { useState } from 'react';
 
 

function Card({id , name , price , image , info,removeTour}){
      
     let [readmore,setReadmore] = useState(false);
     let description = readmore ? info : `${info.substring(0,200)}....`; 
    function readHandler()
    {
          setReadmore(!readmore);
    }
    return(
        <div className='card'>
            <div  >
                <img className='image' src={image} alt="" />
            </div>
            <div className='tour-details'>
                <p className='price'>Rs {price}</p>
                <p className='name'>{name}</p>
            </div>
            <div className='desciption'>
                <span className='readmore' onClick={readHandler}>
                     {description}
                    <span> {readmore?`Show Less`:`Read More`}</span> 
                </span>
            </div>
            <div className='btn'>
                <button onClick={ () => removeTour(id)}>Not Intrested</button>
            </div>
        </div>
        
         
    );
}


export default Card;