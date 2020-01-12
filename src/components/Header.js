import React from 'react'
import Harry from '../images/harry.jpg';

function Header(props) {

  function handleSearch(ev) {
    const inputValue = ev.target.value;
    props.handleSearch(inputValue);
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Busca tu personaje favorito"
        onChange={handleSearch}
      />
      <img src={Harry} alt="Cabecera de Harry Potter" />
    </div>
  )
}

export default Header;