var turn = $("h2");
var gameBody = $(".Game");
var field = $(".Field");
var game = 0;
var player = 0;
var winner = 0;
var winCount = 0;
var info = 0;
var fieldColor = "black";
var color = "";
var columns = [, 6, 6, 6, 6, 6, 6, 6];
var f1 = $(".f1");
var f2 = $(".f2");
var f3 = $(".f3");
var f4 = $(".f4");
var f5 = $(".f5");
var f6 = $(".f6");
var f7 = $(".f7");
const holes = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]
//Row changing color on hover
function changeColor(className, size, color){
    for(var i = 0; i < window[className].length; i++){
        window[className][i].style.border = size + "px dashed " + color;
    }
}
for(var i = 1; i <= 7 ; i++){
    let column = i;
    let classX = "f"+ i; 
    for(var j = 0; j < window[classX].length; j++){
        window[classX][j].onmouseover = function(){changeColor(classX, 3, "green");}
        window[classX][j].onmouseout = function(){changeColor(classX, 2, fieldColor);}   
    }
    //Game for each row
    window[classX].click(function(){
        if(game === 1){
            var row = columns[column];
            if(columns[column]>0){
                $(".h"+row+column).css("background", color);
                holes[row-1][column-1] = player;
                columns[column]--;
                playerRound(player);
            }                    
        }
        victory();
        draw();
    })
}
//start
$(".start").click(function(){
    if(info === 0){
        if(game === 0){
            playerRound(2);
            game = 1;
        }
        else{
            alert("Game is already running.");
        }
    }
    else{
        alert("You are looking at info!!!\nPress Back button!")
    }
})
//change players
function playerRound(n){
    if(n===1){
        color = "red";
        fieldColor = "firebrick";
        turn.css("color",color);
        gameBody.css("border", "4px double firebrick");
        field.css("border", "2px dashed " + fieldColor);
        player = 2;
    }
    else if(n===2){
        color = "blue";
        fieldColor = "blue";
        turn.css("color",color);
        field.css("border", "2px dashed blue");
        gameBody.css("border", "4px double " + fieldColor);
        player = 1;
    }
    turn.text("Player "+player+"'s turn");    
}
//game end
function victory(){
    //vertical
    for(let c = 0; c < 7; c++){
        for(let r = 5; r >= 3; r--){
            if(holes[r][c] === 1 && holes[r-1][c] === 1 && holes[r-2][c] === 1 && holes[r-3][c] === 1){
                winCount++;
                Win(1);
                for(let i = 0; i < 4; i++)
                    $(".h" + (r-i+1) + (c+1)).css("border", "4px solid darkblue");
            } 
            else if(holes[r][c] === 2 && holes[r-1][c] === 2 && holes[r-2][c] === 2 && holes[r-3][c] === 2){
                winCount++;
                Win(2);
                for(let i = 0; i < 4; i++)
                    $(".h" + (r-i+1) + (c+1)).css("border", "4px solid darkred");
            }
        }
    }
    //horizontal
    for(let r = 5; r >= 0; r--){
        for(let c = 0; c < 4; c++){
            if(holes[r][c] === 1 && holes[r][c+1] === 1 && holes[r][c+2] === 1 && holes[r][c+3] === 1){
                winCount++;
                Win(1);
                for(let i = 1; i <= 4; i++)
                    $(".h" + (r+1) + (c+i)).css("border", "4px solid darkblue");
            } 
            else if(holes[r][c] === 2 && holes[r][c+1] === 2 && holes[r][c+2] === 2 && holes[r][c+3] === 2){
                winCount++;
                Win(2);
                for(let i = 1; i <= 4; i++)
                    $(".h" + (r+1) + (c+i)).css("border", "4px solid darkred");
            }
        }
    }
    // growing /
    for(let r = 5; r >= 3; r--){
        for(let c = 0; c < 4; c++){
            if(holes[r][c] === 1 && holes[r-1][c+1] === 1 && holes[r-2][c+2] === 1 && holes[r-3][c+3] === 1){
                winCount++;
                Win(1);
                for(let i = 1; i <= 4; i++)
                    $(".h" + (r-i+2) + (c+i)).css("border", "4px solid darkblue");
            }  
            else if(holes[r][c] === 2 && holes[r-1][c+1] === 2 && holes[r-2][c+2] === 2 && holes[r-3][c+3] === 2){
                winCount++;
                Win(2);
                for(let i = 1; i <= 4; i++)
                    $(".h" + (r-i+2) + (c+i)).css("border", "4px solid darkred");
            }      
        }
    }
    // decline \
    for(let r = 5; r >= 3; r--){
        for(let c = 6; c >= 3; c--){
            if(holes[r][c] === 1 && holes[r-1][c-1] === 1 && holes[r-2][c-2] === 1 && holes[r-3][c-3] === 1){
                winCount++;
                Win(1);
                for(let i = 0; i < 4; i++)
                    $(".h" + (r-i+1) + (c-i+1)).css("border", "4px solid darkblue");
            }   
            else if(holes[r][c] === 2 && holes[r-1][c-1] === 2 && holes[r-2][c-2] === 2 && holes[r-3][c-3] === 2){
                winCount++;
                Win(2);
                for(let i = 0; i < 4; i++)
                    $(".h" + (r-i+1) + (c-i+1)).css("border", "4px solid darkred");
            }  
        }
    }
}
function Win(p){
    fieldColor = "green";
    turn.css("color","green");
    gameBody.css("border", "4px solid green");
    field.css("border", "3px dashed green");
    player = 3;
    if(isMobile()){
        if(winCount === 1)
            turn.html("*Player " + p + "*<br>WIN!!!");
        else if(winCount === 2)
            turn.html("*Player " + p + "*<br>SUPER WIN!!!");
        else if(winCount === 3)
            turn.html("*Player " + p + "*<br>MEGA WIN!!!");
        else if(winCount === 4)
            turn.html("*Player " + p + "*<br>ULTRA WIN!!!");
        else
            turn.html("*Player " + p + "*<br>PLUS ULTRAAA!!!");
        gameBody.addClass("shakeY");
    }
    else{
        if(winCount === 1)
            turn.html("*Player " + p + "* WIN!!!");
        else if(winCount === 2)
            turn.html("*Player " + p + "* SUPER WIN!!!");
        else if(winCount === 3)
            turn.html("*Player " + p + "* MEGA WIN!!!");
        else if(winCount === 4)
            turn.html("*Player " + p + "* ULTRA WIN!!!");
        else
            turn.html("*Player " + p + "* PLUS ULTRAAA!!!");
        gameBody.addClass("shakeX");
    }
    gameBody.on("animationend", function(){
        gameBody.removeClass("shakeX");
        gameBody.removeClass("shakeY");
    })
    winner = p;
    game = 2;
}
function draw(){
    if (holes[0].every(x => x !== 0) &&  winner === 0){
        turn.css("color","purple");
        turn.text("DRAW!");
    } 
}
//Restart
$(".restart").click(function(){
    game = 0;
    player = 0;
    winner = 0;
    winCount = 0;
    fieldColor = "black";
    turn.css("color","black");
    turn.text("Press start!");
    field.css("border", "2px dashed black");
    gameBody.css("border", "2px solid black");
    for(var i = 1; i < 7;i++){
        for(var j = 1; j <= 7; j++){
            $(".h"+i+j).css("background","wheat");
            $(".h"+i+j).css("border","1px solid black");
            columns[j]=6;
            holes[i-1][j-1] = 0;
        }
    }
})
//Info
$(".info").click(function(){
    if(game === 1 || game === 2)
        alert("Game is running!!!\nIf you want to see info restart game and press Info button!");
    else if(game === 0){
        if(info === 0){
            $(".Game").css("display","none");
            $(".description").css("display","flex");
            $(".info").text("Back");
            info++;
        }
        else if(info === 1){
            $(".Game").css("display","grid");
            $(".description").css("display","none");
            $(".info").text("Info");
            info--;
        }
    }
})
//Mobile Check
function isMobile(){
    return window.innerWidth <= 850;
}