//Task 1: Array Methods

API_URL = "https://restcountries.com/v3.1/all"

var request = new XMLHttpRequest();
request.open("GET",API_URL,true);
request.send();
var count = 1;
request.onload = function (){
    var data = request.response;
    var result = JSON.parse(data);
    //a=> Getting all countries from asia continent/region using filter function:
    const AsianCountries = result.filter(element=>element.region === "Asia");
    console.log(`a)Asian Countries: ${AsianCountries.map(element=> element.name.common)}`);
    console.log("-----------------------------------------------------------------");

    //b=>  Getting all countries with the population less than 2lakhs using filter function:
    const population = result.filter((element)=>(element.population < 200000))
    console.log("b)countries with the population less than 2 lakhs");
    population.map(element=>console.log(`${element.name.common} : ${element.population}`));
    console.log("-----------------------------------------------------------------------");

    //c=> Print the name,capital,flag using forEach function:
    console.log("c) Print the name,capital,flag");
    result.forEach(element => {
        console.log(element.flag);
        console.log(`Name:${element.name.common}`);
        console.log(`Capital: ${element.capital}`);
        console.log(`flag: ${element.flag,element.flags.svg}`);
        console.log("------------------------------------------");
    });

    //d=> print total population of countries using reduce function:
    const totalPopulation = result.reduce((acc,curr)=>{
        acc  += curr.population;
        return acc;
    },0)
    console.log(`d)total population of countries:${totalPopulation}`);
    console.log("-----------------------------------------------------------------------");

    //e=> print country uses US Dollers as currencies:
    console.log("e)Country uses US Dollers as currencies:");
    result.map((element)=>{
        if(typeof(element.currencies.USD) !== 'undefined'){
            console.log(element.name.common);
        }
    })    
}



    


