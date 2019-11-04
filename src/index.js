/* eslint-disable indent */
import $ from 'jquery';
import api from './api';
import store from './store';
import 'normalize.css';
import './index.css';


import shoppingList from './shopping-list';
// api.getItems()
//   .then(res => res.json());


// console.log(api.BASE_URL);

const main = function () {
  api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
  api.getItems()
  .then(res => res.json())
  .then((items) => {
    const item = store.items[0];
    return api.updateItem(item.id, { name: 'foobar' });
  })
  .then(res => res.json())
  .then(() => console.log('updated!'));
  
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
