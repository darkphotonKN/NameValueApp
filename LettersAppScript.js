/**
 * Created by Kranti on 4/23/2017.
 */

// function to read input from form
$(document).ready(function() {

    $('#send_inp').click(function() {
        readForm();
    });


    // algorithm to calculate your name's worth
    var nameValAlgorithm = function(name) {

        if (name.length > 10) {
            return name.length*2.1;
        } else if (name.length>5) {
            return name.length*1.3;
        } else {
            return name.length*1.1;
        }
    };


    


    function readForm() {
        var res = $("#result");
        var message = "You entered ";
        res.addClass('resultAppear');// add result class to change the div to appear

        var x = document.getElementById("inp_form").elements[0].value; // reads first element, hence value of form

        var nameVal = nameValAlgorithm(x);

        // output it to results div
        document.getElementById("result").innerHTML = "Your name's value is: " + "<em>" + nameVal + "</em>";


    }



});

