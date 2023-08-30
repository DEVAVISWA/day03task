let countriesDet= new XMLHttpRequest();
countriesDet.open("GET","https://restcountries.com/v3.1/all");
countriesDet.send();
countriesDet.onload= function(){
    const details=JSON.parse(countriesDet.response)
    console.log(details)
    for(let i = 0; i<details.length ; i++){
        console.log(`
        Name is: ${details[i].name.common}
        Region is: ${details[i].region}
        Sub-Region is: ${details[i].subregion}
        Population is: ${details[i].population
        }`)
    }
    
}