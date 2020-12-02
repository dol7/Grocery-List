var formField = document.querySelector('form');
var groceryItem = document.querySelector('ul');
var buttonClearAll = document.querySelector('#clear-list');
var inputGroceryItem =document.getElementById('item');

//var itemsArray = [];
var itemsArray = localStorage.getItem('groceryItems') ? JSON.parse(localStorage.getItem('groceryItems')) :[];

localStorage.setItem('groceryItems',JSON.stringify(itemsArray));

var storage = JSON.parse(localStorage.getItem('groceryItems'));


formField.addEventListener('submit', function(e) {
    e.preventDefault();

    itemsArray.push(inputGroceryItem.value);
    localStorage.setItem('groceryItems',JSON.stringify(itemsArray));

    addGroceryList(inputGroceryItem.value);
    inputGroceryItem.value='';
    
});


var addGroceryList = function(text) {

    var addToList = document.createElement('li');
    addToList.textContent=text;
    groceryItem.appendChild(addToList);

}

for (var i=0; i< storage.length; i++) {

    addGroceryList(storage[i]);
}

buttonClearAll.addEventListener('click',function() {

    localStorage.clear();
    while (groceryItem.firstChild) {
        groceryItem.removeChild(groceryItem.firstChild);

    }
});