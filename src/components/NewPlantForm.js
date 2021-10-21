import React, { useState } from "react";

function NewPlantForm({addNewPlant}) {
  const[formState,setFormState]=useState({
    name:'',
    image:'',
    price:'',
    
  })
  console.log(formState)
  const handleChange=(e)=>{
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
    
  }
  function handleSubmit(e){
    e.preventDefault();

    fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formState),
  })
    .then((r) => r.json())
    .then((newItem) => addNewPlant(newItem) );
  }

  return (
    <div className="new-plant-form" >
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formState.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formState.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formState.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
