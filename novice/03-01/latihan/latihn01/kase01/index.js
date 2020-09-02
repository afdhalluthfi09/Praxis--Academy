let Titel = document.querySelector('h1');
Titel.textContent='Belajar Dom';

const G = document;
let div =G.getElementById("montain");
let table = G.getElementById("table");
let tr = table.getElementsByTagName("tr");
console.log(tr[0]);
let hr = G.createElement("th");
const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];
MOUNTAINS.map(data =>{
    table.innerHTML +=`<tr>
                <td>${data.name}</td>
                <td>${data.height}</td>    
                <td>${data.place}</td>    

    </tr>`
})
