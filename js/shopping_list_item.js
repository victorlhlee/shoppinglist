//ShoppingListItem is a class and has a constructor method that accepts two arguments, name and description
function ShoppingListItem (name, description){
  this.name = name;
  this.description = description;
  this.is_done = null;
}
//ShoppingListItem has a method named check 
ShoppingListItem.prototype.check = function (){
  this.is_done = true;  //calling the instance's check method will set it's is_done property to true

};
//ShoppingListItem has a method named uncheck
ShoppingListItem.prototype.uncheck = function (){
  this.is_done = false; //calling the instance's unchecked method will seit it's is_done propert to false

};

//ShoppingListItem has a method named render 
ShoppingListItem.prototype.render = function (){
//calling the instance's render method will construct and return an html formatted string, 
//the string will be wrapped in "tags"
   return ('<li class="completed_ ' + ' this.is_done"> \n <span>"  ' + this.name + ' "</span> \n <span>"  ' + this.description  + ' "</span> \n  </li>');
};

// this.name("banana");
// this.description("sweet");