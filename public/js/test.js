var testId = 1;

$(function(){
	var queryURL = "https://qu4tro.herokuapp.com/api/quiz/" + testId;
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });
});