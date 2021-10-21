import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantList, setPlantList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlantList(data);
      });
  }, []);

  function addNewPlant(newPlant) {
    console.log("In app", newPlant);
    setPlantList([...plantList, newPlant]);
  }

  function searchForplant(plantToSearch) {
    setSearch(plantToSearch);
  }

  const searchplants = () => {
    if (search.length > 0) {
      return plantList.filter((plant) =>
        plant.name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return plantList;
    }
  };

  function deletePlant(itemTodelet) {
    const listToRender = plantList.filter(
      (plant) => plant.id !== itemTodelet.id
    );
    setPlantList(listToRender);
    fetch(`http://localhost:6001/plants/${itemTodelet.id}`, {
      method: "DELETE",
    });
  }

  function handlePriceChange(edditedPrice, id) {
   
    const newArray=[...plantList]
    const index=newArray.findIndex(plant=>plant.id===id)
    newArray[index].price=edditedPrice
    setPlantList(newArray)

    fetch(`http://localhost:6001/plants/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      price: edditedPrice
    }),
    })
   
  }

  return (
    <div className="app">
      <Header />
      <PlantPage
        handlePriceChange={handlePriceChange}
        plantList={searchplants()}
        addNewPlant={addNewPlant}
        searchForplant={searchForplant}
        deletePlant={deletePlant}
      />
    </div>
  );
}

export default App;
