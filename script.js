var formField = document.querySelector('form');
var groceryItem = document.querySelector('ul');
var buttonClearAll = document.querySelector('#clear-list');
var inputGroceryItem =document.getElementById('item');

formField.addEventListener('submit', function(e) {
    e.preventDefault();
    addGroceryList(inputGroceryItem.value);
    inputGroceryItem.value='';
    //console.log(inputGroceryItem.value);
});


var addGroceryList = function(text) {

    var addToList = document.createElement('li');
    addToList.textContent=text;
    groceryItem.appendChild(addToList);

}

buttonClearAll.addEventListener('click',function() {

    console.log("clicked butt");
});

buttonClearAll.addEventListener('click',function() {

    while (groceryItem.firstChild) {
        groceryItem.removeChild(groceryItem.firstChild);

    }
});