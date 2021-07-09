let data = document.getElementById('data')
let refresh = document.getElementById('refresh')
let book = document.getElementById('book')
let modal = document.getElementById('modal')



//adding to and from date for calculating duration
let fromdate = document.getElementById('fromdt')
let todate = document.getElementById('todt')

//example data
// availability: true
// code: "p1"
// durability: 3000
// max_durability: 3000
// mileage: null
// minimum_rent_period: 1
// name: "Air Compressor 12 GAS"
// needing_repair: false
// price: 4500
// type: "plain"

//fetching data and creating table
fetch('data.json')
.then(x => x.json())
.then(y => myDisplay(y));

function myDisplay(y){
    console.log(y)
    let len = y.length;
    let output =   `
    <table>     
        <th>Number</th>
        <th>Name</th>
        <th>Co</th>
        <th>Availability</th>
        <th>Need to Repair</th>
        <th>Durability</th>
        <th>Mileage</th>
        <th>Price</th>
        <th>Minimum Rent Period</th>
    `;
    for(let i = 0 ; i < y.length; i++){
        output += `
         
        <tr>
        <td>${i+1}</td>
        <td>${y[i].code}</td>  
        <td>${y[i].name}</td>
        <td>${y[i].availability}</td>
        <td>${y[i].needing_repair}</td>
        <td>${y[i].durability}</td>
        <td>${y[i].mileage}</td>
        <td>${y[i].price}</td>
        <td>${y[i].minimum_rent_period}</td>
        </tr>  
        <table>`;
    }
    //adding output to data
    data.innerHTML = output;

    //using the search term and displaying the matching words
    let term = document.getElementById('searchRental');

    term.addEventListener("keyup", e => {
        let rental = e.target.value;
        let newoutput =   `
        <table>     
            <th>Number</th>
            <th>Name</th>
            <th>Co</th>
            <th>Availability</th>
            <th>Need to Repair</th>
            <th>Durability</th>
            <th>Mileage</th>
            <th>Price</th>
            <th>Minimum Rent Period</th>
        `;

        for(let i = 0 ; i < y.length; i++){

            if(y[i].name.toLowerCase().includes(rental)){
               console.log(y[i].name)
               newoutput += `
         
               <tr>
               <td>${i+1}</td>
               <td>${y[i].code}</td>  
               <td>${y[i].name}</td>
               <td>${y[i].availability}</td>
               <td>${y[i].needing_repair}</td>
               <td>${y[i].durability}</td>
               <td>${y[i].mileage}</td>
               <td>${y[i].price}</td>
               <td>${y[i].minimum_rent_period}</td>
               </tr>  
               <table>`;
            }
        }
        data.innerHTML = newoutput;

    })

}




//adding logics

// You can calculate the rental fee by multiplying the product's price by days in the rental period
let numberOfRentalDays = fromdate - todate;
let rentalfee = ((numberOfRentalDays) * (y[i].price))
//console.log(rentalfee)

if(y[i].minimum_rent_period)


// For the plain type, durability will be decreased 1 point per every day.
if(y[i].type === 'plain'){
    y[i].durability = y[i].durability + (1*numberOfRentalDays);
}

// For the meter type, durability will be decreased 2 points per every day, and also decreased 2 points per 10 miles
if(y[i].type === 'meter'){
    y[i].durability = y[i].durability - (2*numberOfRentalDays);
}


//refresh page
refresh.addEventListener('click', alert('clicked'))


//onclicking this button the visibility of modal will be set to visible
//currently it is set to hidden in the middle of the screen with animation for better UI
book.addEventListener('onload', 
    modal.style.visibility = 'visible',
    data.style.visibility = 'hidden'
) 


