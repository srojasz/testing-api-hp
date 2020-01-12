export default () => {
  return fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(responseData => responseData)
}