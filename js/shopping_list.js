//ShoppingList is a class
function ShoppingList (){
  this.items = []; //has a property named items and a constructor method that initializes items as an empty array

}
//ShoppingList has a method named addItem that accepts a single ShoppingListItem argument
ShoppingList.prototype.addItem = function(shoppinglistitem){
  //calling/invoking addItem method pushes ShoppingListItem into this.items empty array
  this.items.push(shoppinglistitem);
  //checking the shoppinglistitem argument is an instance of the ShoppingListItem object
  if(!(shoppinglistitem instanceof ShoppingListItem)){
    throw "error"; //throws an error if anything else that is not a ShoppingListItem object is passedSe
  }

};