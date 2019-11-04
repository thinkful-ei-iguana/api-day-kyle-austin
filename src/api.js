const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kyle';
const getItems = function () {
 
  return fetch(`${BASE_URL}/items`);
 
};
let createItem = function(name){
  let newItemString =JSON.stringify({name});
  return fetch(`${BASE_URL}/items`,{
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body:newItemString
  });
};
 
export default {
  getItems,
  createItem
};