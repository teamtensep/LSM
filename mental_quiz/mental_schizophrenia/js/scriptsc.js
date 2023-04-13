
let index=0;
let attempt=0;
let score=0;
let wrong=0;
let msg="happy";
let questions=quiz.sort(function(){
   return 0.5 -Math.random();
});

let totalquestion
=questions.length;


$(function(){
   
   let totaltime=200;
   let min=0;
   let sec=0;
   let counter=0;
   let timer=setInterval(function(){
    counter++;
    min=Math.floor((totaltime - counter)/60);
    sec=totaltime-(min*60)-counter;
    $(".timerbox span").text(min+ ":" +sec);
    if(counter == totaltime){
      alert("Time's up.Press ok to show the result.");
      result();
      clearInterval(timer);
    }
   },1000);

   printQuestion(index);

});


function printQuestion(i){
   console.log(questions[0]);

   $(".questionbox").text(questions[i].question);
   $(".optionbox span").eq(0).text(questions[i].option[0]);
   $(".optionbox span").eq(1).text(questions[i].option[1]);
   $(".optionbox span").eq(2).text(questions[i].option[2]);
   $(".optionbox span").eq(3).text(questions[i].option[3]);

}


//function to check answer

function checkanswer(option){
   attempt++;
   let optionClicked=$(option).data("opt");
   // console.log(questions[index]);

   if(optionClicked== questions[index].answer){
      $(option).addClass("right");
      score++;
   }
   else{
      $(option).addClass("wrong");
      wrong++;
   }

   $(".scorebox span").text(score);

   $(".optionbox span").attr("onclick","");
}



//function to next question start

function shownext(){

   if(index >= (questions.length-1)){
      showresult(0);
      return;
   }
   index++;
   $(".optionbox span").removeClass();
   $(".optionbox span").attr("onclick","checkanswer(this)");
   printQuestion(index);
}


//function for result

function showresult(j){
   // if(j ==1 && index < questions.length -1 && !confirm("Quiz has not ended yet.press ok to skip quiz &get your result.")
   // ){return;}
   
   result();
   
}


//result function
function result(){
   // $("#questionscreen").hide();
   // $("#resultscreen").show();

   // $("#totalquestion").text(totalquestion);
   // $("#attemptquestion").text(attempt);
   // document.getElementById("p1").innerHTML = "New text!";
   if(score>=3){
      // alert("happy");
      // alert("yes you have");
      // location.href("D:\SEM 5\mental_quiz\mental\index.html");
      // resultp();
      pageRedirecty();
   }
   else{
      pageRedirectn();
      
   }
   // $("#wronganswers").text(wrong);

}

// function resultp(){
//    // $("#attemptquestion").text(score);
//    // document.getElementById("wronganswers").innerHTML = "yes you have!";
//    // location.href("D:\SEM 5\mental_quiz\mental\index.html");
//    alert("happy");
// }


function pageRedirecty() {
   // alert("happy");
   $(location).prop('href','schizophreniay.html');
}

function pageRedirectn() {
   // alert("happy");
   $(location).prop('href','schizophrenian.html');
}