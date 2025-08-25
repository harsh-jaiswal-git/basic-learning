document.getElementById("searchBtn").addEventListener('click',()=>{

    const input = document.getElementById("cityInput").value;


    function updateTemp(data){

        const element = document.getElementById("currentDesc");
        element.innerHTML =` Condition:- ${data.current.condition.text}`;
        
        const element2 = document.getElementById("currentTemp");
        element2.innerHTML =  `Temperature:- ${data.current.temp_c}`;
    }

    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=38550a218b56410da8055922251908&q=${input}&aqi=yes`)
    prom
    .then(response=>response.json())
    .then(data=>updateTemp(data));
    

})