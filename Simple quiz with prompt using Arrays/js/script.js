/*
this example is for understanding 2 dimensional arrays
prompt the user for name
prompt the user with minimum 3 questions
after the quiz show the user with correct questions answered and wrong answered questions.
*/
var correctanswered = [];
var wronganswered = [];
var question;
var answer;
var response;
var html;
var listhtml;
var name = prompt('Enter you Name');
var questions = [
                ['How many states are their in United states?',50],
                ['how many cents are their in 1 dollar?' , 100],
                ['what is 2 + 2?', 4]];
function buildtest(arr) {
    listhtml = "<ol>";
    for(var i = 0; i < arr.length; i++) {
        listhtml += "<li>" + arr[i] + "</li>";
    }
    listhtml += "</ol>";
    return listhtml;
}

for(var i = 0; i < questions.length;i++) {
     question = questions[i][0];
     answer = questions[i][1];
     response = parseInt(prompt(question));
     if(answer === response) {
         correctanswered.push(question);
     }
     else {
         wronganswered.push(question);
     }
}

html = "Hello " + name + " you answered " + correctanswered.length + " correctly.";
html += "<p>correct answered are:</p>";
html += buildtest(correctanswered);
html += "<p>wrong answered questions are:</p>";
html += buildtest(wronganswered);
document.write(html);