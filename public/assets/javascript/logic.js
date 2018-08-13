//require("../../../data/friendData.js");




$("#submit").on("click", function () {
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

    $.post("/api/friends",
        newMatch, function (response) {
            console.log(response);


            //write code that will display the closest friend. use the "response" variable
        })


});


