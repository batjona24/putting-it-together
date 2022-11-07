import React, {useState} from 'react';

const PersonCard = (props) =>{
    const[inAge , setInAge]= useState(props.initialAge);
    return(
        <div>
            <h1> { props.tittle }</h1>
            <p>Age :{ inAge }</p>
            <p>{ props.desc }</p>
            <button onClick={ (event) => setInAge(inAge + 1)}>Birthday Button for {props.tittle}</button>
        </div>

    )
}
export default PersonCard;