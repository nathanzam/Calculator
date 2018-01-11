myArray = []
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#calculatorInput").val(function(n, previous) {
          if (previous === " + " || previous === " - " || previous === " / " || previous === " * ") {
            previous = "";
          };
          return previous + 1;
        });
    });

    $("#btn2").click(function(){
        $("#calculatorInput").val(function(n, previous) {
          if (previous === " + " || previous === " - " || previous === " / " || previous === " * ") {
            previous = "";
          };
          return previous + 2;
        });
    });

    $("#btn3").click(function(){
        $("#calculatorInput").val(function(n, previous) {
          if (previous === " + " || previous === " - " || previous === " / " || previous === " * ") {
            previous = "";
          };
          return previous + 3;
        });
    });

    $("#btn4").click(function(){
        $("#calculatorInput").val(function(n, previous) {
          if (previous === " + " || previous === " - " || previous === " / " || previous === " * ") {
            previous = "";
          };
          return previous + 4;
        });
    });

    $("#btn5").click(function(){
        $("#calculatorInput").val(function(n, previous) {
          if (previous === " + " || previous === " - " || previous === " / " || previous === " * ") {
            previous = "";
          };
          return previous + 5;
        });
    });

    $("#btn6").click(function(){
        $("#calculatorInput").val(function(n, previous) {
          if (previous === " + " || previous === " - " || previous === " / " || previous === " * ") {
            previous = "";
          };
          return previous + 6;
        });
    });

    $("#btn7").click(function(){
        $("#calculatorInput").val(function(n, previous) {
          if (previous === " + " || previous === " - " || previous === " / " || previous === " * ") {
            previous = "";
          };
          return previous + 7;
        });
    });

    $("#btn8").click(function(){
        $("#calculatorInput").val(function(n, previous) {
          if (previous === " + " || previous === " - " || previous === " / " || previous === " * ") {
            previous = "";
          };
          return previous + 8;
        });
    });

    $("#btn9").click(function(){
        $("#calculatorInput").val(function(n, previous) {
          if (previous === " + " || previous === " - " || previous === " / " || previous === " * ") {
            previous = "";
          };
          return previous + 9;
        });
    });

    $("#btn0").click(function(){
        $("#calculatorInput").val(function(n, previous) {
          if (previous === " + " || previous === " - " || previous === " / " || previous === " * ") {
            previous = "";
          };
          return previous + 0;
        });
    });

    $("#btnMinus").click(function(){
        $("#calculatorInput").val(function(n, previous) {
          myArray[0] = previous;
          myArray[1] = " - ";
          console.log(myArray);
          return " - ";
        });
    });

    $("#btnPlus").click(function(){
        $("#calculatorInput").val(function(n, previous) {
          myArray[0] = previous;
          myArray[1] = " + ";
          console.log(myArray);
          return " + ";
        });
    });

    $("#btnDivide").click(function(){
        $("#calculatorInput").val(function(n, previous) {
          myArray[0] = previous;
          myArray[1] = " / ";
          console.log(myArray);
          return " / ";
        });
    });

    $("#btnMultiply").click(function(){
        $("#calculatorInput").val(function(n, previous) {
          myArray[0] = previous;
          myArray[1] = " * ";
          console.log(myArray);
          return " * ";
        });
    });

    $("#btnClear").click(function(){
        $("#calculatorInput").val("");
    });


    $("#btnEquals").click(function(){
        $("#calculatorInput").val(function (n, previous){
          myArray[2] = previous;
          console.log(myArray);
          if (myArray[1] === " + "){
            return Number(myArray[0]) + Number(myArray[2]);
          } else if (myArray[1] === " - "){
            return myArray[0] - myArray[2];
          } else if (myArray[1] === " * "){
            return myArray[0] * myArray[2];
          } else {
            return myArray[0] / myArray[2];
          };
        });
    });
});
