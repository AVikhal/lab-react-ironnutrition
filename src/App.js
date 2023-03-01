import logo from './logo.svg';
import './App.css';
import { Row, Divider, Button } from 'antd';
import { Collapse } from 'antd';
import foods from "./foods.json"

import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import { useState } from 'react';
import Search from './Components/Search';

const { Panel } = Collapse;
const foodArr = foods

function App() {

  //STATES
  const [ foodArray, setFoodArray ] = useState(foodArr)
  const [ foodToDisplay, setFoodToDisplay ] = useState(foodArr)
  


  //Funciones para subir data de componentes

  const addNewFood = (newFood) => {
    
    const updatedFoodArr= [...foodArray]
    updatedFoodArr.unshift(newFood)
    setFoodArray(updatedFoodArr)
    setFoodToDisplay(updatedFoodArr)

  }

  const searchFood = (foodToSearch) => {

  
    const foundFood = foodArray.filter((eachFood) =>{

      let eachFoodMin = eachFood.name.toLowerCase()
      let foodToSearchMin = foodToSearch.toLowerCase()

      if(eachFoodMin.includes(foodToSearchMin)){
        return true
      } else {
      
        return false
      }

    })
    
    
    setFoodToDisplay(foundFood)

  }

  const deleteFood = (foodToDelete) => {
    console.log(foodToDelete)
    const newMenu = foodArray.filter((eachFood) =>{
      if(eachFood.name === foodToDelete){
        return false
      } else {
        return true
      }
    })

    setFoodArray(newMenu)
    setFoodToDisplay(newMenu)

  }
  return (

    <div className="App">

      

      <Collapse>
          <Panel header = "Show Food Form">
          <AddFoodForm addingNewFood={addNewFood}/>
          </Panel>     
      </Collapse>
      

      <Search searchingFood = {searchFood} />

      <Row style={{ width: '100%', justifyContent: 'center' }}>
         {foodToDisplay.map((eachFood) => {
           return(
            <div key={eachFood.name}>
             <FoodBox eachFood={eachFood} deleteFood={deleteFood}/>
           </div>
          
           )
         })}
      </Row>
     

      
    </div>
  );
}

export default App;
