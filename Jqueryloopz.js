$(document).ready(function () {
    start();
});
   
 

function getRandNum() {
    var num = Math.floor(Math.random() * 10);
    return num;
}
       
function close() {
    $("body").fadeOut(2000);
    $("#msg").fadeIn(2000).text("Goodbye.");
}
    
    function start(){

    var loopCounter1 = 1;
    var rNum = getRandNum();
    while (loopCounter1 <= 10) {
         rNum = getRandNum();

        if (rNum >= 4 || rNum == 0) {
            rNum = getRandNum();
            continue;
        }

        if (rNum == 1) {
            $("#b1").attr("class","one");
            break;
        }
        if (rNum == 2) {
            $("#b1").attr("class","two");
            break;
        }
        if (rNum == 3) {
            $("#b1").attr("class","three");
            break;
        }
        loopCounter1++;
        //duplicate the above for the other possible classes (two, three etc)        
    }


    var loopCounter2 = 1;
    //box2
    while (loopCounter2 <= 10) {

        var rNum2 = getRandNum();

        if (rNum2 >= 4 || rNum2 == 0) {
           rNum2 = getRandNum();
            continue;
        }
        if (rNum2 == 1) {
            $("#b2").attr("class","one");
            break;
        }
        if (rNum2 == 2) {
            $("#b2").attr("class","two");
            break;
        }
        if (rNum2 == 3) {
            $("#b2").attr("class","three");
            break;
        }
        loopCounter2++;//break;
    }

    var loopCounter3 = 1;
        //box3
    
    while (loopCounter3 <= 10) {

        var rNum3 = getRandNum();

        if (rNum3 >= 4 || rNum3 == 0) {
           rNum3 = getRandNum();
            continue; //if the number is 4+ or zero, regen
        }
        if (rNum3 == 1) {
            $("#b3").attr("class", "one");
            break;
        }
        if (rNum3 == 2) {
            $("#b3").attr("class", "two");
            break;
        }
        if (rNum3 == 3) {
            $("#b3").attr("class", "three");
            break;
        }
        loopCounter3++;// break;
    }


    
        //match check
    

    if ($("#b1").attr("class") == $("#b2").attr("class") && $("#b2").attr("class") == $("#b3").attr("class")) {
        $("#msg").text("Congratulations!! You won!");
    }
    else {
        $("#msg").text("Sorry. Maybe next time?");
    }
    }
    debugger;
//button
    $("#button1").hover(function() {
        $(this).css("background-color", "darkgreen").text("SPIN NOW?").css("text-size", "17");
       });
    
    $("#button2").click(function () {
        close()
    });
    
        
    
        
   

    