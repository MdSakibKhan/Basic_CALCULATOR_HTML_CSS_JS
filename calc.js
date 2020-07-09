/*
 * Implement all your JavaScript in this file!
 */

var result="";
var temp = "";
var operator = "";
var hasOperator= false;
var reservedOperator;
var reservedNumber;
var equalCount=0;

$('#button0').click(
    function () {
        var v = $('#button0').val();
        temp += v;
        $('#display').val(temp);
    });
$('#button1').click(
    function () {
        var v = $('#button1').val();
        temp += v;
        $('#display').val(temp);
    });
$('#button2').click(
    function () {
        var v = $('#button2').val();
        temp += v;
        $('#display').val(temp);
    });
$('#button3').click(
    function () {
        var v = $('#button3').val();
        temp += v;
        $('#display').val(temp);
    });
$('#button4').click(
    function () {
        var v = $('#button4').val();
        temp += v;
        $('#display').val(temp);
    });
$('#button5').click(
    function () {
        var v = $('#button5').val();
        temp += v;
        $('#display').val(temp);
    });
$('#button6').click(
    function () {
        var v = $('#button6').val();
        temp += v;
        $('#display').val(temp);
    });
$('#button7').click(
    function () {
        var v = $('#button7').val();
        temp += v;
        $('#display').val(temp);
    });
$('#button8').click(
    function () {
        var v = $('#button8').val();
        temp += v;
        $('#display').val(temp);
    });
$('#button9').click(
    function () {
        var v = $('#button9').val();
        temp += v;
        $('#display').val(temp);
    });
$('#addButton').click(
    function () {
        equalCount=0;
        if(hasOperator==true && result !="" && temp==""){
            operator = "+";
        }
        if(hasOperator==true && result !="" && temp!=""){
            calc();
        }
       
       if(result ==""){
        result = temp;
        temp = "";
        operator = "+";
        hasOperator=true;
       }
       else if(result!="" && hasOperator==false){
        operator = "+";
        hasOperator=true;
       }
    });
$('#subtractButton').click(
    function () {
        equalCount=0;
        if(hasOperator==true && result !="" && temp==""){
            operator = "-";
        }
        if(hasOperator==true && result !="" && temp!=""){
            calc();
        }
        if(result ==""){
            result = temp;
        temp = "";
        operator = "-";
        hasOperator=true;
        }
        else if(result!="" && hasOperator==false){
            operator = "-";
            hasOperator=true;
           }
    });
$('#multiplyButton').click(
    function () {
        equalCount=0;
        if(hasOperator==true && result !="" && temp==""){
            operator = "*";
        }
        if(hasOperator==true && result !="" && temp!=""){
            calc();
        }
        if(result ==""){
        result = temp;
        temp = "";
        operator = "*";
        hasOperator=true;}
        else if(result!="" && hasOperator==false){
            operator = "*";
            hasOperator=true;
           }
    });
$('#divideButton').click(
    function () {
        equalCount=0;
        if(hasOperator==true && result !="" && temp==""){
            operator = "/";
        }
        if(hasOperator==true && result !="" && temp!=""){
            calc();
        }
        if(result ==""){
            result = temp;
        temp = "";
        operator = "/";
        hasOperator=true;
        }
        else if(result!="" && hasOperator==false){
            operator = "/";
            hasOperator=true;
        }
    });
    $('#equalsButton').click(function(){
        if(hasOperator==true && result!="" && temp!="" && equalCount==0) {
            calc();
            operator="";
            equalCount++;
            hasOperator=false;
        }
        else if(equalCount>0) {
            operator = reservedOperator;
            temp = reservedNumber;
            calc();
        }
    });
    function calc(){
        if(result!="" && temp!=""){
        var v1 = parseInt(result);
        var v2 = parseInt(temp);
        reservedOperator = operator;
        reservedNumber = v2;
        var res;
        if(operator=="+"){
             res = v1+v2;
        }
        if(operator=="-"){
             res = v1-v2;
        }
        if(operator=="*"){
             res = v1*v2;
        }
        if(operator=="/"){
             res = v1/v2;
        }
        
        result= ""+res;
        temp="";
        $('#display').val(result);
    }
    }

    $('#clearButton').click(function(){
        result = "";
        temp="";
        operator="";
        equalCount=0;
        reservedOperator="";
        reservedNumber=0;
        $('#display').val("");
    });