import React, { useState } from "react";

function PlantCard({plant,deletePlant,handlePriceChange}) {
 

  const[sold,setSolde]=useState(true)
  const[setPrice,setNewPrice]=useState('')

  function handleClick(){
    setSolde(!sold)
  }
  
  const commitToPriceChange=()=>{
    handlePriceChange(setPrice,plant.id)
  }


  

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {sold ? (
        <button onClick={handleClick}  className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick} >Out of Stock</button>
      )}
      
      <input type="text" name="price" onChange={e => setNewPrice(e.target.value)}/>
      <button onClick={commitToPriceChange}>edit</button>
      <button onClick={()=>deletePlant(plant)}>Delete</button>
    </li>
  );
}

export default PlantCard;
