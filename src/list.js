import React, {useState} from 'react'
import './list.css';

const List = ( {items, setItems, itemsData, setItemsData} ) =>{

  let sortItems = (value) => {
    if (value === 1) {
      let itemsIngradient = itemsData.sort((a,b) => {
        if (a.id > b.id) {
          return 1;
        } else if (a.id < b.id) {
          return -1;
        }else {
          return 0;
        }
      });

      setItems([...itemsIngradient]);
    } else if (value === 2) {
      let itemsPacked = itemsData.sort((a,b) => {
        if (a.packed > b.packed) {
          return 1;
        } else if (a.packed < b.packed) {
          return -1;
        }else {
          return 0;
        }
      });
      setItems([...itemsPacked]);

    } else if (value === 3) {
      let itemsQuantity = itemsData.sort((a,b) => {
        if (a.quantity > b.quantity) {
          return 1;
        } else if (a.quantity < b.quantity) {
          return -1;
        } else {
          return 0;
        }
      });
      setItems([...itemsQuantity]);
    }
  };

  let checkBox = (id) => {
    let newItems = [...itemsData];
    setItems(newItems);
    setItemsData(newItems);
  };

  let itemClose = (id) => {
    setItemsData((setData) => itemsData.filter((value) => value.id !== id));
    setItems((items) => items.filter((value) => value.id !== id));
  };

  return (
    <div className = 'list-sec'>

      <div className = 'sort-sec'>

        <select className = 'butons' onChange = {(d) => sortItems(Number(d.target.value))}> 
       
          <option value = {1}>Sort by packed items</option>
          <option value = {2}>sort by ingradients</option>
          <option value = {3}>sort by quantity</option>
        </select>

        <button className = 'butons' onClick = {() =>{
            setItems((items = []));
            setItemsData((items = []));
        }}>
            CLEAR
        </button>

      </div>

     
        <div className = 'list'>
          {items.map((item) => (
            <Item 
            item={item} 
            key={item.id}
            check = {checkBox}
            close = {itemClose}/>
          ))}
        </div>

      
      
    </div>
  );
};

const Item = ({ item, check, close }) => {

  const [isClose, setIsClose] = useState(true);
  const [isPacked, setIsPacked] = useState(false);

  return (

   <div>
      <div className = 'ul-list'>

         {isClose && (
         <div className = 'list'>

          <input
              type="checkbox"
              onClick = {() => {
                check();
                setIsPacked(!isPacked);
                item.packed = !item.packed;
              }}
             />
            
          <span style = {isPacked ? {textDecoration : 'line-through'} : {textDecoration : 'none'}}>
            {item.quantity} {item.ingradient}
          </span>

          <button className = 'btn' 
          onClick = {() => {
            setIsClose(!isClose);
            item.packed = item.packed ? !item.packed : item.packed;
            close(item.id);
          }}>
            &times;</button>

          </div>
          )}

      </div>

    </div>
      
      
     

  )
}

export default List;