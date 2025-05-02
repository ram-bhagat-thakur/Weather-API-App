link="https://api.openweathermap.org/data/2.5/weather?lat=26.459446&lon=86.271721&appid=b74b65351183caf941a3123b0fcf20cd";

var request=new XMLHttpRequest();
request.open('GET',link,true);
request.onload=function(){
    var obj = JSON.parse(this.response);
    console.log(obj);
    document.getElementById('location').innerHTML=obj.name;
    document.getElementById('Weather').innerHTML=obj.weather[0].description;
    document.getElementById('temp').innerHTML=Math.round(obj.main.temp-273.15);
    document.getElementById('icon').src="https://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
}
if(request.status>=200 && request.status<400){
    var temp=obj.main.temp;
}
else{
    console.log("The city data is not found");
}
request.send();
