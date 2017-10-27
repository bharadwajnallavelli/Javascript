/* 
create an array that contains some items.
it should continiously iterate until the user types quit.
create a prompt to enter item name.
if the item is available in the store it should display item in stock else not in stock.
create two simple operations: 
    1.if the user enters list it should display all the items in array.
    2.if the user enters quit it should quit from prompt
*/
function print(message) {
   return document.write("<p>" + message + "</p>");
}
var items = ['milk','eggs','bread','oats','tomato','carrot','celery','spinach',
             'blueberry','cake','oil','biscuits','chicken','meat','steak','beaf'];
var searchItem;
var message;
while(true) {
searchItem = prompt("Type 'list' for complete list of items and type 'quit' to exit and type any item name to search");
searchItem = searchItem.toLowerCase();    
if(searchItem === 'quit') {
        break;
    }else if(searchItem === 'list') {
        message = items.join(', ');
        print(message);
    }else {
        var value = items.indexOf(searchItem);
        if(value > -1 ) {
            message = searchItem + ' item is in stock';
            print(message);
        } else {
            message = searchItem + ' item is not in stock';
            print(message);
        }
    }
}