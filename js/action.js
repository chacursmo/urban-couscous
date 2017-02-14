$(document).ready(function(){
    if ("geolocation" in navigator){
	navigator.geolocation.getCurrentPosition(function(position){
	    var lat = position.coords.latitude;
	    var logi = position.coords.longitude;
	    var appid = "4d04b28917903ffcc96bdbad424dccc3";
	    var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + logi + "&appid=" + appid;
	    $.ajax(
		{url:api,
		 success: function(data){
		     var tempk = data["main"]["temp"];
		     var temp = Math.round(tempk * 9/5 - 459.67);
		     var overview = data["weather"][0]["main"];
		    $(".weather").html(overview+"<br>"+temp);
		 },
		 error: function(data){

		 }
		}
		);

	})
    }

    else {
	$(".weather").html("I donno where u r");
    }
    
});
