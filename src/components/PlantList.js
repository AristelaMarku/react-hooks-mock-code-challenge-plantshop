import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList,deletePlant,handlePriceChange}) {
  return (
    <ul className="cards">{plantList.map((plant)=>{
      return <PlantCard plant={plant} deletePlant={deletePlant} handlePriceChange={handlePriceChange}/>
    })}</ul>
  );
}

export default PlantList;
