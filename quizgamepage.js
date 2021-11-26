function send(){
    var Number1 = document.getElementById("wor1").value;
    var Number2 = document.getElementById("wor2").value;
    var ActualAnswer = parseInt(Number1) * parseInt(Number2);
    var QuestionNumber = "<h4>" + Number1 + " X " + Number2 + "</h4>";
    var InputBox = "<br> Answer: <input type='text' id='input_check_box'>";
    var CheckButton = "<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>"
    var Row = QuestionNumber + InputBox + CheckButton;
    document.getElementById("output").innerHTML = Row;
    var Number1 = document.getElementsByClassName("number1").value = "";
    var Number2 = document.getElementsByClassName("number2").value = "";
}