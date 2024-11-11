var turn = $("h2");
var game = 0;
var player = 0;
var winner = 0;
var info = 0;
var color = "";
var columns = [, 6, 6, 6, 6, 6, 6, 6];
var f1 = $(".f1");
var f2 = $(".f2");
var f3 = $(".f3");
var f4 = $(".f4");
var f5 = $(".f5");
var f6 = $(".f6");
var f7 = $(".f7");
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
        window[classX][j].onmouseout = function(){changeColor(classX, 2, "brown");}   
    }
    //Game for each row
    window[classX].click(function(){
        if(game === 1){
            var row = columns[column];
            let rowcol =""+row+column;
            if(columns[column]>0){
                $(".h"+rowcol).css("background", color);
                columns[column]--;
                window["f"+rowcol]= player;
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
        turn.css("color",color);
        player = 2;
    }
    else if(n===2){
        color = "blue";
        turn.css("color",color);
        player = 1;
    }
    turn.text("Player "+player+"'s turn");    
}
//draw
function draw(){
    if (f11 !== 0 && f12 !== 0 && f13 !== 0 && f14 !== 0 && f15 !== 0 && f16 !== 0 && f17 !== 0 && winner === 0){
        turn.css("color","purple");
        turn.text("DRAW!");
    }
}
//winner
function victory(){
    switch(true){
        //vertical
        case f61 === 1 && f51 === 1 && f41 === 1 && f31 === 1: Win(1); break;
        case f61 === 2 && f51 === 2 && f41 === 2 && f31 === 2: Win(2); break;
        case f51 === 1 && f41 === 1 && f31 === 1 && f21 === 1: Win(1); break;
        case f51 === 2 && f41 === 2 && f31 === 2 && f21 === 2: Win(2); break;
        case f41 === 1 && f31 === 1 && f21 === 1 && f11 === 1: Win(1); break;
        case f41 === 2 && f31 === 2 && f21 === 2 && f11 === 2: Win(2); break;
        case f62 === 1 && f52 === 1 && f42 === 1 && f32 === 1: Win(1); break;
        case f62 === 2 && f52 === 2 && f42 === 2 && f32 === 2: Win(2); break;
        case f52 === 1 && f42 === 1 && f32 === 1 && f22 === 1: Win(1); break;
        case f52 === 2 && f42 === 2 && f32 === 2 && f22 === 2: Win(2); break;
        case f42 === 1 && f32 === 1 && f22 === 1 && f12 === 1: Win(1); break;
        case f42 === 2 && f32 === 2 && f22 === 2 && f12 === 2: Win(2); break;
        case f63 === 1 && f53 === 1 && f43 === 1 && f33 === 1: Win(1); break;
        case f63 === 2 && f53 === 2 && f43 === 2 && f33 === 2: Win(2); break;
        case f53 === 1 && f43 === 1 && f33 === 1 && f23 === 1: Win(1); break;
        case f53 === 2 && f43 === 2 && f33 === 2 && f23 === 2: Win(2); break;
        case f43 === 1 && f33 === 1 && f23 === 1 && f13 === 1: Win(1); break;
        case f43 === 2 && f33 === 2 && f23 === 2 && f13 === 2: Win(2); break;
        case f64 === 1 && f54 === 1 && f44 === 1 && f34 === 1: Win(1); break;
        case f64 === 2 && f54 === 2 && f44 === 2 && f34 === 2: Win(2); break;
        case f54 === 1 && f44 === 1 && f34 === 1 && f24 === 1: Win(1); break;
        case f54 === 2 && f44 === 2 && f34 === 2 && f24 === 2: Win(2); break;
        case f44 === 1 && f34 === 1 && f24 === 1 && f14 === 1: Win(1); break;
        case f44 === 2 && f34 === 2 && f24 === 2 && f14 === 2: Win(2); break;
        case f65 === 1 && f55 === 1 && f45 === 1 && f35 === 1: Win(1); break;
        case f65 === 2 && f55 === 2 && f45 === 2 && f35 === 2: Win(2); break;
        case f55 === 1 && f45 === 1 && f35 === 1 && f25 === 1: Win(1); break;
        case f55 === 2 && f45 === 2 && f35 === 2 && f25 === 2: Win(2); break;
        case f45 === 1 && f35 === 1 && f25 === 1 && f15 === 1: Win(1); break;
        case f45 === 2 && f35 === 2 && f25 === 2 && f15 === 2: Win(2); break;
        case f66 === 1 && f56 === 1 && f46 === 1 && f36 === 1: Win(1); break;
        case f66 === 2 && f56 === 2 && f46 === 2 && f36 === 2: Win(2); break;
        case f56 === 1 && f46 === 1 && f36 === 1 && f26 === 1: Win(1); break;
        case f56 === 2 && f46 === 2 && f36 === 2 && f26 === 2: Win(2); break;
        case f46 === 1 && f36 === 1 && f26 === 1 && f16 === 1: Win(1); break;
        case f46 === 2 && f36 === 2 && f26 === 2 && f16 === 2: Win(2); break;
        case f67 === 1 && f57 === 1 && f47 === 1 && f37 === 1: Win(1); break;
        case f67 === 2 && f57 === 2 && f47 === 2 && f37 === 2: Win(2); break;
        case f57 === 1 && f47 === 1 && f37 === 1 && f27 === 1: Win(1); break;
        case f57 === 2 && f47 === 2 && f37 === 2 && f27 === 2: Win(2); break;
        case f47 === 1 && f37 === 1 && f27 === 1 && f17 === 1: Win(1); break;
        case f47 === 2 && f37 === 2 && f27 === 2 && f17 === 2: Win(2); break;
        //horizontal
        case f61 === 1 && f62 === 1 && f63 === 1 && f64 === 1: Win(1); break;
        case f61 === 2 && f62 === 2 && f63 === 2 && f64 === 2: Win(2); break;
        case f62 === 1 && f63 === 1 && f64 === 1 && f65 === 1: Win(1); break;
        case f62 === 2 && f63 === 2 && f64 === 2 && f65 === 2: Win(2); break;
        case f63 === 1 && f64 === 1 && f65 === 1 && f66 === 1: Win(1); break;
        case f63 === 2 && f64 === 2 && f65 === 2 && f66 === 2: Win(2); break;
        case f64 === 1 && f65 === 1 && f66 === 1 && f67 === 1: Win(1); break;
        case f64 === 2 && f65 === 2 && f66 === 2 && f67 === 2: Win(2); break;
        case f51 === 1 && f52 === 1 && f53 === 1 && f54 === 1: Win(1); break;
        case f51 === 2 && f52 === 2 && f53 === 2 && f54 === 2: Win(2); break;
        case f52 === 1 && f53 === 1 && f54 === 1 && f55 === 1: Win(1); break;
        case f52 === 2 && f53 === 2 && f54 === 2 && f55 === 2: Win(2); break;
        case f53 === 1 && f54 === 1 && f55 === 1 && f56 === 1: Win(1); break;
        case f53 === 2 && f54 === 2 && f55 === 2 && f56 === 2: Win(2); break;
        case f54 === 1 && f55 === 1 && f56 === 1 && f57 === 1: Win(1); break;
        case f54 === 2 && f55 === 2 && f56 === 2 && f57 === 2: Win(2); break;
        case f41 === 1 && f42 === 1 && f43 === 1 && f44 === 1: Win(1); break;
        case f41 === 2 && f42 === 2 && f43 === 2 && f44 === 2: Win(2); break;
        case f42 === 1 && f43 === 1 && f44 === 1 && f45 === 1: Win(1); break;
        case f42 === 2 && f43 === 2 && f44 === 2 && f45 === 2: Win(2); break;
        case f43 === 1 && f44 === 1 && f45 === 1 && f46 === 1: Win(1); break;
        case f43 === 2 && f44 === 2 && f45 === 2 && f46 === 2: Win(2); break;
        case f44 === 1 && f45 === 1 && f46 === 1 && f47 === 1: Win(1); break;
        case f44 === 2 && f45 === 2 && f46 === 2 && f47 === 2: Win(2); break;
        case f31 === 1 && f32 === 1 && f33 === 1 && f34 === 1: Win(1); break;
        case f31 === 2 && f32 === 2 && f33 === 2 && f34 === 2: Win(2); break;
        case f32 === 1 && f33 === 1 && f34 === 1 && f35 === 1: Win(1); break;
        case f32 === 2 && f33 === 2 && f34 === 2 && f35 === 2: Win(2); break;
        case f33 === 1 && f34 === 1 && f35 === 1 && f36 === 1: Win(1); break;
        case f33 === 2 && f34 === 2 && f35 === 2 && f36 === 2: Win(2); break;
        case f34 === 1 && f35 === 1 && f36 === 1 && f37 === 1: Win(1); break;
        case f34 === 2 && f35 === 2 && f36 === 2 && f37 === 2: Win(2); break;
        case f21 === 1 && f22 === 1 && f23 === 1 && f24 === 1: Win(1); break;
        case f21 === 2 && f22 === 2 && f23 === 2 && f24 === 2: Win(2); break;
        case f22 === 1 && f23 === 1 && f24 === 1 && f25 === 1: Win(1); break;
        case f22 === 2 && f23 === 2 && f24 === 2 && f25 === 2: Win(2); break;
        case f23 === 1 && f24 === 1 && f25 === 1 && f26 === 1: Win(1); break;
        case f23 === 2 && f24 === 2 && f25 === 2 && f26 === 2: Win(2); break;
        case f24 === 1 && f25 === 1 && f26 === 1 && f27 === 1: Win(1); break;
        case f24 === 2 && f25 === 2 && f26 === 2 && f27 === 2: Win(2); break;
        case f11 === 1 && f12 === 1 && f13 === 1 && f14 === 1: Win(1); break;
        case f11 === 2 && f12 === 2 && f13 === 2 && f14 === 2: Win(2); break;
        case f12 === 1 && f13 === 1 && f14 === 1 && f15 === 1: Win(1); break;
        case f12 === 2 && f13 === 2 && f14 === 2 && f15 === 2: Win(2); break;
        case f13 === 1 && f14 === 1 && f15 === 1 && f16 === 1: Win(1); break;
        case f13 === 2 && f14 === 2 && f15 === 2 && f16 === 2: Win(2); break;
        case f14 === 1 && f15 === 1 && f16 === 1 && f17 === 1: Win(1); break;
        case f14 === 2 && f15 === 2 && f16 === 2 && f17 === 2: Win(2); break;
        // growing /
        case f41 === 1 && f32 === 1 && f23 === 1 && f14 === 1: Win(1); break;
        case f41 === 2 && f32 === 2 && f23 === 2 && f14 === 2: Win(2); break;
        case f51 === 1 && f42 === 1 && f33 === 1 && f24 === 1: Win(1); break;
        case f51 === 2 && f42 === 2 && f33 === 2 && f24 === 2: Win(2); break;
        case f42 === 1 && f33 === 1 && f24 === 1 && f15 === 1: Win(1); break;
        case f42 === 2 && f33 === 2 && f24 === 2 && f15 === 2: Win(2); break;
        case f61 === 1 && f52 === 1 && f43 === 1 && f34 === 1: Win(1); break;
        case f61 === 2 && f52 === 2 && f43 === 2 && f34 === 2: Win(2); break;
        case f52 === 1 && f43 === 1 && f34 === 1 && f25 === 1: Win(1); break;
        case f52 === 2 && f43 === 2 && f34 === 2 && f25 === 2: Win(2); break;
        case f43 === 1 && f34 === 1 && f25 === 1 && f16 === 1: Win(1); break;
        case f43 === 2 && f34 === 2 && f25 === 2 && f16 === 2: Win(2); break;
        case f62 === 1 && f53 === 1 && f44 === 1 && f35 === 1: Win(1); break;
        case f62 === 2 && f53 === 2 && f44 === 2 && f35 === 2: Win(2); break;
        case f53 === 1 && f44 === 1 && f35 === 1 && f26 === 1: Win(1); break;
        case f53 === 2 && f44 === 2 && f35 === 2 && f26 === 2: Win(2); break;
        case f44 === 1 && f35 === 1 && f26 === 1 && f17 === 1: Win(1); break;
        case f44 === 2 && f35 === 2 && f26 === 2 && f17 === 2: Win(2); break;
        case f63 === 1 && f54 === 1 && f45 === 1 && f36 === 1: Win(1); break;
        case f63 === 2 && f54 === 2 && f45 === 2 && f36 === 2: Win(2); break;
        case f54 === 1 && f45 === 1 && f36 === 1 && f27 === 1: Win(1); break;
        case f54 === 2 && f45 === 2 && f36 === 2 && f27 === 2: Win(2); break;
        case f64 === 1 && f55 === 1 && f46 === 1 && f37 === 1: Win(1); break;
        case f64 === 2 && f55 === 2 && f46 === 2 && f37 === 2: Win(2); break;
        // decline \
        case f64 === 1 && f53 === 1 && f42 === 1 && f31 === 1: Win(1); break;
        case f64 === 2 && f53 === 2 && f42 === 2 && f31 === 2: Win(2); break;
        case f65 === 1 && f54 === 1 && f43 === 1 && f32 === 1: Win(1); break;
        case f65 === 2 && f54 === 2 && f43 === 2 && f32 === 2: Win(2); break;
        case f54 === 1 && f43 === 1 && f32 === 1 && f21 === 1: Win(1); break;
        case f54 === 2 && f43 === 2 && f32 === 2 && f21 === 2: Win(2); break;
        case f66 === 1 && f55 === 1 && f44 === 1 && f33 === 1: Win(1); break;
        case f66 === 2 && f55 === 2 && f44 === 2 && f33 === 2: Win(2); break;
        case f55 === 1 && f44 === 1 && f33 === 1 && f22 === 1: Win(1); break;
        case f55 === 2 && f44 === 2 && f33 === 2 && f22 === 2: Win(2); break;
        case f44 === 1 && f33 === 1 && f22 === 1 && f11 === 1: Win(1); break;
        case f44 === 2 && f33 === 2 && f22 === 2 && f11 === 2: Win(2); break;
        case f67 === 1 && f56 === 1 && f45 === 1 && f34 === 1: Win(1); break;
        case f67 === 2 && f56 === 2 && f45 === 2 && f34 === 2: Win(2); break;
        case f56 === 1 && f45 === 1 && f34 === 1 && f23 === 1: Win(1); break;
        case f56 === 2 && f45 === 2 && f34 === 2 && f23 === 2: Win(2); break;
        case f45 === 1 && f34 === 1 && f23 === 1 && f12 === 1: Win(1); break;
        case f45 === 2 && f34 === 2 && f23 === 2 && f12 === 2: Win(2); break;
        case f57 === 1 && f46 === 1 && f35 === 1 && f24 === 1: Win(1); break;
        case f57 === 2 && f46 === 2 && f35 === 2 && f24 === 2: Win(2); break;
        case f46 === 1 && f35 === 1 && f24 === 1 && f13 === 1: Win(1); break;
        case f46 === 2 && f35 === 2 && f24 === 2 && f13 === 2: Win(2); break;
        case f47 === 1 && f36 === 1 && f25 === 1 && f14 === 1: Win(1); break;
        case f47 === 2 && f36 === 2 && f25 === 2 && f14 === 2: Win(2); break;
    }
}
function Win(p){
    turn.css("color","green");
    turn.css("font-size","10vh");
    player = 3;
    turn.text("PLAYER *" + p + "* WINS!!!");
    winner = p;
    game = 2;
}
//Restart
$(".restart").click(function(){
    game = 0;
    player = 0;
    winner = 0;
    turn.css("color","black");
    turn.text("Press start!");
    turn.css("font-size","5vh");
    for(var i = 1; i < 7;i++){
        for(var j = 1; j <= 7; j++){
            $(".h"+i+j).css("background","wheat");
        }
    }
    for(var i = 1; i < 7; i++){
        for(var j = 1; j <= 7; j++){
            backTo0("f"+i+j);
            columns[j]=6;
        }
    }
})
function backTo0(fxx){
    window[fxx] = 0;
}
//Info
$(".info").click(function(){
    if(game === 1)
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
var f11 = 0;
var f21 = 0;
var f31 = 0;
var f41 = 0;
var f51 = 0;
var f61 = 0;
var f12 = 0;
var f22 = 0;
var f32 = 0;
var f42 = 0;
var f52 = 0;
var f62 = 0;
var f13 = 0;
var f23 = 0;
var f33 = 0;
var f43 = 0;
var f53 = 0;
var f63 = 0;
var f14 = 0;
var f24 = 0;
var f34 = 0;
var f44 = 0;
var f54 = 0;
var f64 = 0;
var f15 = 0;
var f25 = 0;
var f35 = 0;
var f45 = 0;
var f55 = 0;
var f65 = 0;
var f16 = 0;
var f26 = 0;
var f36 = 0;
var f46 = 0;
var f56 = 0;
var f66 = 0;
var f17 = 0;
var f27 = 0;
var f37 = 0;
var f47 = 0;
var f57 = 0;
var f67 = 0;