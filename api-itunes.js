$(document).ready(function(){
    $("#musicSearch").on("click",function(){
        amount = $("#amount").val();
        var artist = $("#artist").val();
        $('table').empty();
        $.ajax({
            url: "https://itunes.apple.com/search?term=" + artist + "&limit=" + amount,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                console.log(result);
                myFunction(result) },
            error: function() {
                alert('Failed!');
            }
        });
    });
});

function myFunction(result){
if(amount===0){
    document.getElementById("table").innerHTML = "You cannot search for nothing!"
}
    for (var i=0; i<amount; i++){
        var albumName = result.results[i].collectionName;
        var songName = result.results[i].trackName;
        var cover = result.results[i].artworkUrl100;
        var music = result.results[i].previewUrl;
        document.getElementById("table").innerHTML+=
            "<tr>"+ "<td id='rank'>"+(i+1)+"</td>"+"<td id='img'><img src="+ cover + "></td>"+
            "<td <div align='center' id='info'>"+songName+" <br> "+ albumName + "<br><audio controls=\"true\" src=\""+music+"\" id=\"audio\" type=\"audio/m4a\"></audio></div></td>";
    }
}
