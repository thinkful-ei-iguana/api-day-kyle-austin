import $ from 'jquery';
import api from './api';
import 'normalize.css';
import './index.css';


import shoppingList from './shopping-list';
api.getItems()
  .then(res => console.log(res));

console.log(api.BASE_URL);
const main = function () {
  
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
