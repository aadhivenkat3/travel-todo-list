import React, { useState } from 'react'
import './form.css';

const Form = ({onAddItems}) => {

    const [ingradient, setIngradient] = useState('');
    const [quantity, setQuantity] = useState(1);
    
    const handleSubmit=(event) =>{
        event.preventDefault();

        const newItem = {
            ingradient, 
            quantity, 
            packed : false, 
            id: Date.now(),
            lengths: true,
        };

        console.log(newItem);

        onAddItems(newItem);

        setIngradient('');
        setQuantity(1);
    }

  return (

    <div className = 'form-sec'>

        <form className = 'form' onSubmit = {handleSubmit}>

            <p className = 'para'>What do your need &#128525; for your trip?</p>

            <select className = 'number'
             value = {quantity} 
            onChange = {(e) => setQuantity(Number(e.target.value))}>

                {Array.from ({ length: 20 }, (_, i) => i + 1).map((num) => (

                    <option className = 'num' value = {num}>
                        {num}
                    </option>
                ))}

            </select>

            <input type = 'text' 
            className = 'input' 
            placeholder = 'Item...' 
            autoFocus
            required
            value = {ingradient} 
            onChange = {(e) => {
                setIngradient(e.target.value);
            }}></input>

            <button className = 'buton'>ADD</button>

        </form>

    </div>
  )
}

export default Form;