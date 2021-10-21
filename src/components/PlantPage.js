import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantList, addNewPlant,searchForplant,deletePlant,handlePriceChange}) {
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search searchForplant={searchForplant}/>
      <PlantList plantList={plantList} deletePlant={deletePlant} handlePriceChange={handlePriceChange}/>
    </main>
  );
}

export default PlantPage;
