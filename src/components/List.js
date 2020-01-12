import React from 'react'
import Item from './Item'


function List(props) {

  console.log(props.characters.name)

  if (props.characters.length === 0) {

    return (
      <p>No hay resultados que mostrar</p>
    )
  } else {
    return (

      <div>
        <ul>
          {props.characters.map((character, index) =>
            <li key={index}>
              <Item
                img={character.image}
                name={character.name}
                specie={character.species}
              />
            </li>
          )
          }
        </ul>
      </div>



    )
  }
}
export default List;