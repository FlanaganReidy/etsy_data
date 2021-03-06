// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let total = 0;
  let average;
  // for (let i = 0; i < data.length; i++) {
  //   total += data[i].price;
  //
  // }
  data.forEach(function(e){
    total += e.price;
  })
    console.log("The Average cost is $" + (average = total/data.length));
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let lowishCost=[];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00 ) {
      lowishCost.push(data[i].title);

    }
  }
  lowishCost.forEach(function(e){
    console.log(e);
  })
}
// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  data.forEach(function(e){
    if (e.currency_code === "GBP") {
      console.log(e.title + " costs " + e.price + " pounds.");

    }
  })

}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  data.forEach(function(e){
      e.materials.forEach(function(f){
        if (f === 'wood') {
          console.log(e.title);
        }
      })

  })
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let numMaterials;

  data.forEach(function(e){
    if(e.materials.length >= 8){
      console.log(e.title + " has " + e.materials.length + " materials: ");
      e.materials.forEach(function(f){
        console.log("- "+ f);
      })
    }
  })

}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let total = 0;
  data.forEach(function(e){
    if(e.who_made == "i_did"){
      total++;
    }
  })
  console.log(total +" items were made by their sellers.");
}
