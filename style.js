const apikey="93f5152998cfc73fdfb306e821e8d787"
const apiurl="https://api.openweathermap.org/geo/1.0/direct?"

async function checkWeather(){
    const response=await fetch(apiurl+`&appid=${apikey}`)
    var data=await response.json();
    console.log(data)
}
checkWeather()
const abc=document.querySelector('.humidity');
abc.addEventListener('mouseover',()=>{
    
})