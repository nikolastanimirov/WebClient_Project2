$(document).ready(function(){
	
	$('#btn').click(function(){
		var city = $('#city').val();
		var key = '918691b6e1b42910b511fae49f329d3c';
		if(city != ''){
			$.ajax({
				url: 'http://api.openweathermap.org/data/2.5/weather?q=' +city+ '&appid=918691b6e1b42910b511fae49f329d3c&units=metric' ,
				type: 'GET',
				dataType: 'json',
				success: function(data){
					var weather = '';
					$.each(data.weather,function(index,val){
						weather +='<h1><b>'+data.name+'</b></h1>'+'<h2>'+data.main.temp+'&deg;C' + ' | ' + val.main + ', ' + val.description + '</h2>';
					});
					$('#show').html(weather);
				}
			})
		}
		else{
			console.log("err");
		}
	});
	$('#btn2').click(function(){
	var country = $('#country').val();
	if(country != ''){
		$.ajax({
			url: 'https://newsapi.org/v2/top-headlines?country='+country +'&apiKey=aa0fa4086e8248158200de231c2d31bb',
			type: 'GET',
			dataType: 'json',
			success: function(data){
				var news = '';
				var articles = data.articles;
				for (var i = 0;i<articles.length;i++){
				news += '<h3>'+ (i+1) + ": "+ articles[i].title + '</h1></br>';
				}
			$('#show_news').html(news);
			}
		})
	}
	else
		console.log("ERR");
})	
});

function date(){
	var d = new Date();
document.getElementById("time").innerHTML = d;
}
setInterval(date,1000);