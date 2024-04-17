import React from 'react'

function TravelItem(props) {
  return (
    <article>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <img 
        src={props.img}
        width={200}
        alt={props.title}/>
        <br/>
        <button onClick={()=>props.delete()}>Borrar destino</button>
    </article>
  )
}

export default TravelItem;