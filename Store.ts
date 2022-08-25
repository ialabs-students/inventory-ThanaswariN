// interface Product{
//     category:string,
//     pName: string;
//     pCode: number;
//   }
  
  
//   interface Inventory {
//     products?: Product[];
//   }
  
//   class Store {
//     inventory: Inventory = {products: []};
    
//     // addProduct(product: Product): void {
//     //   this.inventory.products?.push(product);
//     // }
//   }
//   function addProduct(category,pName, pCode){
//     this.inventory.products?.push(product);
//   }
//   var store = new Store();
//   store.addProduct({category:'juice', pName:'mango', pCode:898});
//   addProduct();
//   console.log(store.addProduct);

  


interface Product{
  pName: string;
  pCode: number;
  category: string;
  quantity:number;
}

var item: Product[] = [
  {pName:'mango', pCode:898, category:'juice', quantity:10},
  {pName:'apple', pCode:890, category:'juice', quantity:8},
  {pName:'pineapple', pCode:899, category:'juice', quantity:15},
];

console.log(item);

console.log("Add product items");
console.log("----------------------------")
item.push(
  {
    pName:'jackfruit', pCode:209, category:'juice' , quantity:4
  }
)
console.log(item);

let id=3;
let removedBiscuit=item.splice(id,2);
console.log(item);

//defect
var defect_item="mango";
var defect= JSON.stringify(item);
var item1= item.filter(indexOf(defect_item)=== 0));
console.log(defect);


