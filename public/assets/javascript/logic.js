//function that activates when the user clicks on the "submit" button on the survey page
$("#submit").on("click", function () {
    //declares a new variable equal to what the user inputs on the survey page
    var newMatch = {
        name: $("#name").val(),
        image: $("#image").val(),
        questions: [
            $('#exampleSelect1').find(":selected").text(),
            $('#exampleSelect2').find(":selected").text(),
            $('#exampleSelect3').find(":selected").text(),
            $('#exampleSelect4').find(":selected").text(),
            $('#exampleSelect5').find(":selected").text(),
            $('#exampleSelect6').find(":selected").text(),
            $('#exampleSelect7').find(":selected").text(),
            $('#exampleSelect8').find(":selected").text(),
            $('#exampleSelect9').find(":selected").text(),
            $('#exampleSelect10').find(":selected").text()
        ]
    }

    //posts the newMatch variable to the /api/friends route, and html and css of the page to display the relevant information
    $.post("/api/friends",
        newMatch, function (response) {
            console.log("Response:");
            console.log(response);
            console.log("Name:");            
            console.log(response.name);
            console.log("Image: ");
            console.log(response.image);

            $("#best-match").css("display","inline");
            $("#best-match-name").prepend(response.name);
            $("#best-match-image").prepend("<img style='height:45vh;' src=assets/images/"+response.image+">")
        })
        //hides the submit button, so that the user cannot enter a new answer without refreshing the page
        $("#submit").css("display","none");
});