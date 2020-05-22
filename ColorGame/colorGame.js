var numSquare=6;
var colors=[];
var pickedColor;

var squares=document.querySelectorAll(".square"); 
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var buttom=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");


function init(){
    setupModeButtons();
    setupSquares();
    reset();

}

init();

function setupModeButtons(){
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            for(var j=0;j<modeButtons.length;j++){
                modeButtons[j].classList.remove("selected");
            }
            this.classList.add("selected");
            this.textContent==="EASY" ? numSquare=3:numSquare=6;
            reset();  
        });
    }

}

function setupSquares(){
    for(var i=0;i<squares.length;i++){
        squares[i].addEventListener("click",function(){
            var clickedColor=this.style.backgroundColor;
            if (clickedColor===pickedColor){
                messageDisplay.textContent="Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor=clickedColor;
                messageDisplay.textContent="PLAY AGAIN?";
                buttom.textContent="PLAY AGAIN?";
            }else{
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try Again";
            }
        });   
    }
}


function reset(){
    colors=generateRandomColor(numSquare);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    buttom.textContent="new colors";
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent="";
}


buttom.addEventListener("click",function(){
    reset();    
});


function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;

}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}