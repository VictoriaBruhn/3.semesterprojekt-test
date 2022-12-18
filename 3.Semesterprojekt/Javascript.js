var ogText;


// what quiz question you have reached
var qNumber =1;
//if answer is right or wrong
var answer=0;





function ChangeSlide(arg)
{
    var gladText = "Play bow er et signal som hunden bruger til at invitere en anden hund, person eller et andet dyr til leg. <br> Hvert individ kan have hver sin variant af play bow, afhængigt at erfaring og race. Generelt kendetegnes play bow sådan her: <br> 1. Afslappet krop og ansigt <br> 2. Toplinjen vinkler ned mod hovedet <br> 3. Ører er fremaf eller i midten <br> 4. Forbenene rør jorden fra pote til albue <br> 5. Halen logrer " ;
    var utilpasText = "Tegn på at en hund er utilpas kan være: <br> <br> Den slikker sig meget om munden imens den kigger meget væk. <br>Ørene sidder bagud og hunden sidder ned.<br>Smasken sammen med de tidligere ting.";
    var aggressionText = "<b>Tegn på komfort:</b><br>Afslappet og doven krop.<br>Maven helt opad.<br>Ingen øjenkontakt<br><br><b>Tegn på utilpashed:</b><br>Stif krop<br>Den holder øje med dig<br> Den logrer ikke med halen.";
    if (document.getElementById(arg + "Video1")){
    
        ogText = document.getElementById(arg +"Text").innerHTML
    // change text:
        switch(arg){
            case "glad":
                document.getElementById(arg + "Text").innerHTML = gladText;
                break;

            case "utilpas":
                document.getElementById(arg + "Text").innerHTML = utilpasText;
                break;

            case "aggression":
                document.getElementById(arg + "Text").innerHTML = aggressionText;
                break;
                
            default:
                break;
        }
    // change video:
        var gladVideoElement = document.getElementById(arg + "Video");
        gladVideoElement.style.display = "none";
        var gladVideoElement1 = document.getElementById(arg + "Video1");
        gladVideoElement1.removeAttribute("id");
        gladVideoElement1.id = arg +"Video2";

    }
    // changes text back
    else if(document.getElementById(arg + "Video2")){
        var gladTextElement = document.getElementById(arg + "Text");
        gladTextElement.innerHTML = ogText;

    // change video:
        var gladVideoElement = document.getElementById(arg + "Video2");
        gladVideoElement.removeAttribute("id");
        gladVideoElement.id = arg + "Video1";
        var gladVideoElement = document.getElementById(arg + "Video");
        gladVideoElement.style.display = "inline";

    }

}
function showAnswer()
{
    //Right  
if(document.querySelector('input[name="spm'+qNumber+'"]:checked').value==1)
{
    
    document.getElementById("r"+String(qNumber)).style.display = "inherit";
   
    document.getElementById("w"+String(qNumber)).style.display = "none";
    

}
    //Wrong
else if(document.querySelector('input[name="spm'+qNumber+'"]:checked').value==0)
{
   
    document.getElementById("w"+String(qNumber)).style.display ="inherit";
    
    document.getElementById("r"+String(qNumber)).style.display = "none";

}

}
function nextQ()
{
    qNumber++;
    // var elem = document.getElementById("qMod"+String(qNumber));
    //             elem.scrollIntoView();
}


/* -----------------------------til pop ups--------------------------------*/

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function vendehovedet() {
    var popup = document.getElementById("vendehovedet");
    popup.classList.toggle("show");
  }

  function vendesig() {
    var popup = document.getElementById("vendesig");
    popup.classList.toggle("show");
  }

  function lick() {
    var popup = document.getElementById("lick");
    popup.classList.toggle("show");
  }

  function gabe() {
    var popup = document.getElementById("gabe");
    popup.classList.toggle("show");
  }

  function blik() {
    var popup = document.getElementById("blik");
    popup.classList.toggle("show");
  }  

  function logre() {
    var popup = document.getElementById("logre");
    popup.classList.toggle("show");
  }
  function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}
