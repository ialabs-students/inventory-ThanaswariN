interface product {
    productNumber: string;
    productName: string;
    count: string;
    
}

var sports: product = {
    productName: "mm",
    productNumber:"qq",
    count:"22",
    
}

class football implements product {
    productNumber: string;
    productName: string;
    count: string;
    constructor(productNumber: string, productName: string, count: string) {
        this.productNumber = productNumber; 
        this.productName = productName;
        this.count = count;
    }
    brand: string = 'football';
    
}
class volleyBall implements product{
  productNumber: string;
  productName: string;
  count: string;
  constructor(productNumber: string, productName: string, count: string) {
      this.productNumber = productNumber; 
      this.productName = productName;
      this.count = count;
  
 }
    
    brand: string = 'VolleyBall';
}

var fb1 = new football('1', 'Nike','20');

var fb2 = new football('2', 'Riddell','21');

var  vb1 = new volleyBall('1','Molten','23');
var vb2 = new volleyBall('2','Wilson','13');
var vb3 = new volleyBall('3','Tachikara','10');

delete vb3['ProductNumber'];
 
 console.log("-----------------------");
            
function getKey(fb1,fb2){
  const arr = [],
  obj = Object.keys(fb1);
  for (var count in obj){
    if(fb1[obj[count]] > 5){
      arr.push(obj[count]);
      //count++;
    }
  }
  console.log(count)
  return arr;
}

 var fb5 = [{brand:"football", productNumber:"2",productName:"Wilson",count:"23"},
 {brand:"VolleyBall", productNumber:"3",productName:"Milasa",count:"21"}];

 const result = fb5.filter((obj) => {
  return obj.count > '5';

});

console.log(result);

console.log("Product dataset");

console.log(fb1,fb2,vb1,vb2,vb3);
console.log("--------------------------------");
console.log("delete");

console.log(vb3);

console.log("-----------------------");
console.log("addional");

console.log(fb5);
console.log("-----------------------");
console.log("threshold");

console.log(getKey(fb1 ,fb2));

console.log(result);

