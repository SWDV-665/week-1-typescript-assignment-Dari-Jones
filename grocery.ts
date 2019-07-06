class Grocery {
    groceryItem: string;
    constructor(public itemName: string, public quantity: number, public price: number) {
        this.groceryItem = itemName + " " + quantity + " " + price;
    }
}

interface groceryItem {
    itemName: string;
    quantity: number;
    price: number;
}

function listItem(groceryItem: Grocery) {
    return "Grocery Item: " + groceryItem.itemName + ", " + " Quantity: " + groceryItem.quantity + ", " + " Price (Each): $" + groceryItem.price;
}


var item1 = new Grocery("Oreo Cookies", 3, 3.99);
var item2 = new Grocery("Milk", 1, 2.99);
var item3 = new Grocery("Pizza", 2, 5.99)

document.body.textContent += listItem(item1) + " | ";
document.body.textContent += listItem(item2) + " | ";
document.body.textContent += listItem(item3);