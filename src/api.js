const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kyle';
const getItems = function () {
 
  return fetch(`${BASE_URL}/items`);
 
};
let createItem = function(name){
  let newItemString =JSON.stringify({name});
  return fetch(`${BASE_URL}/items`,{
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: newItemString
  });
};

let updateItem = function(id, updateData) {
  let updateDataString = JSON.stringify(updateData);
  //console.log(updateDataString);
  return fetch(`${BASE_URL}/items/${id}`,{
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: updateDataString,
  });
  
};

 
export default {
  getItems,
  createItem,
  updateItem
};