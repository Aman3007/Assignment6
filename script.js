
 $(document).ready(function() {
const link = "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=df32153f9396f4db06ec6f38417d49cc";
$("#refresh").on("click",()=>{
 fetch(link).then((data) => {
    return data.json()
}).then((newdata) => {
    const temp = Math.round(newdata.main.temp - 273.15);
    $("#location").html(newdata.name)
    $("#weather").html(newdata.weather[0].description)
    document.getElementById("temp").innerHTML=temp;
    $("#icon").attr("src", "https://openweathermap.org/img/w/" + newdata.weather[0].icon + ".png")
}).catch((error
) => {
    console.log(error)
})
});
$("#refresh").click();
 })


