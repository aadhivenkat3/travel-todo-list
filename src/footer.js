import React from 'react'
import './footer.css';

const Stats = ({items}) => {

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked/numItems)*100)

  if(!items.length)return(
    <div className = 'footer'>
      <em className = 'foot'>
        Start your Travel With Adding Some Package Lists.
      </em>
    </div>
  )

  return (
    <div className = 'footer'>

        <p className = 'foot'>
          {percentage === 100 ? (
          <em>'You Got Everything. Reaady To Go!!'</em>
          ): (
          <em>{`You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}</em>
          )}
          </p>
        

    </div>
  );
};

export default Stats;