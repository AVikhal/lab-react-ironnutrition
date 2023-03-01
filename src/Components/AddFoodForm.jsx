import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {

    const [ nameInput, setNameInput] = useState ("")
    const [ imageInput, setImageInput ] = useState("")
    const [ caloriesInput, setCaloriesInput ] = useState(0)
    const [ servingsInput, setServingsInput ] = useState(0)

//Funciones de los inputs

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNameInput(event.target.value)
    }

    const handleImageChange = (event) => {
        setImageInput(event.target.value)
    }

    const handleCaloriesChange = (event) => {
        setCaloriesInput(event.target.value)
    }

    const handleServingsChange = (event) => {
        setServingsInput(event.target.value)
    }

//Enviando informacion

    const handleAddForm = (event) =>{
        event.preventDefault()
        console.log("Añadiendo nuevo plato")

        const newFood = {
            name: nameInput,
            image: imageInput,
            calories: caloriesInput,
            servings: servingsInput
        }

        props.addingNewFood(newFood)
    }
  return (
    <div>
        <form>
        <Divider>Add Food Entry</Divider>

        <label htmlFor="name">Name</label>
        <Input type="text" name="name" value ={nameInput} onChange={handleNameChange}/>

        <label htmlFor="image">Image</label>
        <Input type="text" name="image" value={imageInput} onChange={handleImageChange}/>

        <label htmlFor="calories">Calories</label>
        <Input type="number"  name="calories" value= {caloriesInput} onChange={handleCaloriesChange}/>

        <label htmlFor="servings">Servings</label>
        <Input type="number" name="servings" value= {servingsInput} onChange={handleServingsChange}/>
        
        <button onClick={handleAddForm}>Add</button>
        </form>
        
    </div>
  )
}

export default AddFoodForm