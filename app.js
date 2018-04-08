
$("document").ready(function() {
    $("#searchButton").on("click", function(e) {
        console.log("Submit button clicked");
        e.preventDefault();
        var input = $("#searchTerm").val();
        console.log(input);

        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&prop=extracts&exsentences=1&search="+input+"&limit=8&callback=?";
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            success: displayData,
            error: function(err) {
                 console.log("The error is " + err);
              }
        });

        function displayData(data){
           for (i=0; i<8;i++){
               var content = "<div class=\"content\"><a href="+data[3][i]+"><h3>"+data[1][i]+"</h3></a><span>"+data[2][i]+"</span></div>";
               $("#output").append(content)
           };
        };
    });

    $("#searchTerm").keyup(function(event) {
        if (event.keyCode == 13) {
          $("#searchButton").click();
        }
      });

   
})

