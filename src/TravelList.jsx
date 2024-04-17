import React from 'react'
import TravelItem from './TravelItem'
import { useState } from 'react';
import data from "./data"; //datos iniciales del archivo data.js

function TravelList() {

  //Estado incicial es list=data --> es decir un array [{}{}{}]
  const [list, setList] = useState(data); //[{}{}{}] lista de Items

  const paintItems = () =>
    list.map((item, index) => (
      <TravelItem
        key={index}
        title={item.title}
        desc={item.desc}
        img={item.img}
        delete={()=>deleteItem(index)}
      />
    ));


  const clearItems = () => setList([]);//vacía la lista -> list=[]

  const resetItems = () => setList(data);//resetea la lista ->list=data

  const createItem = () => {
    alert("Crear destino nuevo")
    const title = prompt("Introduce destino")
    const desc = prompt("Introduce la descripción del destino")
    const img = prompt("Introduce url de imagen")

    const item = { title, desc, img };// Nuevo objeto de destino

    //list.push(item);//No se recomienda usar, es mala práctica
    setList([...list, item]); //Añade el nuevo destino a la lista
  };//crea la lista ->list=data

  const deleteItem = (pos) => { //pos es la posición del array
    alert("Borrar Destino")
    //[TravelItem1,TravelItem2,TravelItem3,TravelItem4]
    //pos 2
    //[TravelItem1,TravelItem3,TravelItem4]
    const remainingItems = list.filter((item, index) => index !== pos);
    setList(remainingItems);//esto modifica el estado con lo restante
  };//borra un item de la lista ->list=data


  return (
    <section>
      <h4>Aquí va TravelList</h4>
      <button onClick={clearItems}>Borrar todo</button>
      <button onClick={resetItems}>Recargar</button>
      <button onClick={createItem}>Crear destino</button>
      {paintItems()}
    </section>

  )
}



export default TravelList;