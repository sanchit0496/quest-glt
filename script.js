let data = document.getElementById('data')

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
        </tr>  
        <table>`;
    }
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
               </tr>  
               <table>`;
            }
        }
        data.innerHTML = newoutput;

    })

    


}
 



//adding logics
