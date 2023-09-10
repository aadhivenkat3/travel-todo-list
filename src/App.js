import React,{ useState } from 'react'
import Header from './header';
import Form from './form';
import List from './list';
import Stats from './footer';



const App = () => {

  const [items, setItems] = useState([]);
  const [itemsData, setItemsData] = useState([]);
  

  const handleAddItems = (item) =>{
    setItems((items)=> [...items, item]);
    setItemsData((itemsData) =>[...items, item]);
}
  
  

  return (
    <div className = 'container'>
    
        <Header/>
        <Form onAddItems = {handleAddItems}/>

        <List 
        items = {items} 
        setItems = {setItems}
        itemsData = {itemsData}
        setItemsData = {setItemsData}/>

        <Stats items = {items} />
     
        
    </div>
  )
}

export default App;

