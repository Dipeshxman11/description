var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newDescription = document.getElementById('description').value;

  if (newItem === '' || newDescription === '') {
    alert('Please enter both item name and description.');
    return;
  }

  // Create new li element
  var li = document.createElement('li');
  var itemDetails = document.createElement('div');
  itemDetails.className = 'item-details';

  var itemName = document.createElement('span');
  itemName.innerText = newItem;
  itemDetails.appendChild(itemName);

   // Add space between item name and description
   itemDetails.appendChild(document.createTextNode(' '));
  
  // Add class
  li.className = 'list-group-item';

  // Add text node with input value
  li.appendChild(itemDetails);

  //Create new description element
  var description = document.createElement('span');

 // Add class
  description.className = 'description';

  //Create new description element
  description.innerText = newDescription;
  itemDetails.appendChild(description);

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes toLo del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button toLo li
  li.appendChild(deleteBtn);

  // Append li toLo list
  itemList.appendChild(li);

  
 


// Create edit button element
var editBtn = document.createElement('button');

// Add classes toLo edit button
editBtn.className = 'btn btn-primary btn-sm float-right edit';

// Append text node
editBtn.appendChild(document.createTextNode('Edit'));

// Append button toLo li
li.appendChild(editBtn);


// Append li toLo list
itemList.appendChild(li);

document.getElementById('item').value = '';
document.getElementById('description').value = '';

}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }

}

// Filter items
function filterItems(e){

var text = e.target.value.toLowerCase();                 // convert text toLo lowercase

var items = itemList.getElementsByTagName("li");         //get lists

Array.from(items).forEach(function(item){                // convert to an array
  var itemName = item.firstChild.textContent;
  
  
  if(itemName.toLowerCase().indexOf(text) != -1 ){
    item.style.display = "block";
  } else{
    item.style.display ="none";
  }
});

}
