import React from 'react'

function Item(props) {
  const { name, img, specie } = props;
  return (

    <div>
      <img src={img} alt={name} />
      <p>{name}</p>
      <p>{specie}</p>
    </div>


  );
}


export default Item;