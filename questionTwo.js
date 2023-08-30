let flag= new XMLHttpRequest();
flag.open("GET","https://restcountries.com/v3.1/all");
flag.send();
flag.onload= function(){
    const flags=JSON.parse(flag.response)
    for(let i = 0; i<flags.length ; i++)
    console.log("The FLAG is :" , flags[i].flag)
}