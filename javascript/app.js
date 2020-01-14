var wrong=0;
var right=0;

function answerPage(){
    $("#quiz").empty();
    var rightAnswerDisplay=$("#results").append("<p id='answers'>");
    rightAnswerDisplay.html("correct:"+right+"<br>"+"wrong:"+wrong);
}

var time = 60;

function start() {
    intervalId = setInterval(count, 1000);
  }

function stop(){
    clearInterval(intervalId);
}

function count(){
    time--;
    var timeDisplay=$("<p>");
    timeDisplay.attr("id","time");
    timeDisplay.text(time+"");
    $("#timerResults").empty().append(timeDisplay);
    if(time ===0){
        stop();
        answerPage();}
}

start();

var quizQuestions=[
    {
        question:"who is the most influential player in NBA?",
        a:"Lebron James",
        b:"Kevin Durant",
        c:"Paul Geroge",
        answer:"Lebron James"
    },

    {
        question:"who is the tallest player in NBA?",
        a:"Bol Bol",
        b:"Tacko Fall",
        c:"Boban Marjanovic",
        answer:"Tacko Fall"
    },

    {
        question:"which NBA team has the most rings?",
        a:"Los Angeles Lakers",
        b:"Boston Celtics",
        c:"Golden States Warriors",
        answer:"Boston Celtics"
    },

    {
        question:"which city team has the highest capacity of NBA arena?",
        a:"Los Angeles",
        b:"Chicago",
        c:"New York",
        answer:"Chicago"
    }
];

  
function setup(){

    for (var i = 0 ; i<quizQuestions.length; i++) {
        var a = quizQuestions[i].a;
        var b = quizQuestions[i].b;
        var c = quizQuestions[i].c;
        var question = quizQuestions[i].question;
    
        var questionDiv = $('<div>');
    
        $(questionDiv).addClass('question');
    
        $(questionDiv).attr('id','panel'+i);
    
        $(questionDiv).append(question);
    
    
        var htmlInput =
        `
            <input name = ${i + 'a'} type='radio'><span>${a}</span>
            <input name = ${i + 'b'} type='radio'><span>${b}</span>
            <input name = ${i + 'c'} type='radio'><span>${c}</span>
        `
        
        $(questionDiv).append(htmlInput);
    
        $("#quiz").append(questionDiv);
        
    
    }
    
    $('#quiz').on('change', 'input', function() {
        var userAns =$(this).next().text();
        var questionIndex = $(this).closest('.question').attr('id').match(/\d+/g);
        var correctAns = quizQuestions[questionIndex].answer;
        
        if (userAns === correctAns){
            right++;
        } else {
            wrong++;
        }
    })
    
    }
    
    setup();