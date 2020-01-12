import React from 'react'

function Item(props) {
  const { name, img, gender, house } = props;
  return (

    <div>
      <img src={img} alt={name} />
      <p>{`${name} / ${gender} `}</p>
      <p>{house}</p>

    </div>


  );
}


export default Item;