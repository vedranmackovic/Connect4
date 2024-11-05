var turn = $("h2");
var game = 0;
var player = 0;
//Row changing color on hover
function changeColorf1(size, color){
    for(var i = 0; i< f1.length; i++){
        f1[i].style.border = size +"px dashed "+ color;
    }
}var f1 = $(".f1");
for(var i = 0; i < f1.length; i++){
    f1[i].onmouseover = function(){changeColorf1("3","green");}
    f1[i].onmouseout = function(){changeColorf1("2","brown");}
}
function changeColorf2(size, color){
    for(var i = 0; i< f2.length; i++){
        f2[i].style.border = size +"px dashed "+ color;
    }
}var f2 = $(".f2");
for(var i = 0; i < f2.length; i++){
    f2[i].onmouseover = function(){changeColorf2("3","green");}
    f2[i].onmouseout = function(){changeColorf2("2","brown");}
}
function changeColorf3(size, color){
    for(var i = 0; i< f3.length; i++){
        f3[i].style.border = size +"px dashed "+ color;
    }
}var f3 = $(".f3");
for(var i = 0; i < f3.length; i++){
    f3[i].onmouseover = function(){changeColorf3("3","green");}
    f3[i].onmouseout = function(){changeColorf3("2","brown");}
}
function changeColorf4(size, color){
    for(var i = 0; i< f4.length; i++){
        f4[i].style.border = size +"px dashed "+ color;
    }
}var f4 = $(".f4");
for(var i = 0; i < f1.length; i++){
    f4[i].onmouseover = function(){changeColorf4("3","green");}
    f4[i].onmouseout = function(){changeColorf4("2","brown");}
}
function changeColorf5(size, color){
    for(var i = 0; i< f5.length; i++){
        f5[i].style.border = size +"px dashed "+ color;
    }
}var f5 = $(".f5");
for(var i = 0; i < f5.length; i++){
    f5[i].onmouseover = function(){changeColorf5("3","green");}
    f5[i].onmouseout = function(){changeColorf5("2","brown");}
}
function changeColorf6(size, color){
    for(var i = 0; i< f6.length; i++){
        f6[i].style.border = size +"px dashed "+ color;
    }
}var f6 = $(".f6");
for(var i = 0; i < f6.length; i++){
    f6[i].onmouseover = function(){changeColorf6("3","green");}
    f6[i].onmouseout = function(){changeColorf6("2","brown");}
}
function changeColorf7(size, color){
    for(var i = 0; i< f7.length; i++){
        f7[i].style.border = size +"px dashed "+ color;
    }
}var f7 = $(".f7");
for(var i = 0; i < f7.length; i++){
    f7[i].onmouseover = function(){changeColorf7("3","green");}
    f7[i].onmouseout = function(){changeColorf7("2","brown");}
}
//start
$(".start").click(function(){
    if(game === 0){
        player1();
        game = 1;

    }
    else{
        alert("Game is already running.");
    }
})
//change players
function player1(){
    turn.css("color","blue");
    turn.text("Player 1's turn");
    player = 1;
}
function player2(){
    turn.css("color","red");
    turn.text("Player 2's turn");
    player = 2;
}
//game for each row
f1.click(function(){
    if(game === 1){
        if(player === 1){
            if(f11 === 0){
                if(f21===0){
                    if(f31===0){
                        if(f41===0){
                            if(f51===0){
                                if(f61===0){
                                    $(".h61").css("background", "blue");
                                    f61=1;
                                    player2();
                                }
                                else{
                                    $(".h51").css("background","blue");
                                    f51=1;
                                    player2();
                                }
                            }
                            else{
                                $(".h41").css("background","blue");
                                f41=1;
                                player2();
                            }
                        }
                        else{
                            $(".h31").css("background","blue");
                            f31=1;
                            player2();
                        }
                    }
                    else{
                        $(".h21").css("background","blue");
                        f21=1;
                        player2();
                    }
                }
                else{
                    $(".h11").css("background","blue");
                    f11=1;
                    player2();
                }
            }
        }
        else if(player === 2){
            if(f11 === 0){
                if(f21===0){
                    if(f31===0){
                        if(f41===0){
                            if(f51===0){
                                if(f61===0){
                                    $(".h61").css("background", "red");
                                    f61=2;
                                    player1();
                                }
                                else{
                                    $(".h51").css("background","red");
                                    f51=2;
                                    player1();
                                }
                            }
                            else{
                                $(".h41").css("background","red");
                                f41=2;
                                player1();
                            }
                        }
                        else{
                            $(".h31").css("background","red");
                            f31=2;
                            player1();
                        }
                    }
                    else{
                        $(".h21").css("background","red");
                        f21=2;
                        player1();
                    }
                }
                else{
                    $(".h11").css("background","red");
                    f11=2;
                    player1();
                }
            }
        }
    }
}) 
f2.click(function(){
    if(game === 1){
        if(player === 1){
            if(f12 === 0){
                if(f22===0){
                    if(f32===0){
                        if(f42===0){
                            if(f52===0){
                                if(f62===0){
                                    $(".h62").css("background", "blue");
                                    f62=1;
                                    player2();
                                }
                                else{
                                    $(".h52").css("background","blue");
                                    f52=1;
                                    player2();
                                }
                            }
                            else{
                                $(".h42").css("background","blue");
                                f42=1;
                                player2();
                            }
                        }
                        else{
                            $(".h32").css("background","blue");
                            f32=1;
                            player2();
                        }
                    }
                    else{
                        $(".h22").css("background","blue");
                        f22=1;
                        player2();
                    }
                }
                else{
                    $(".h12").css("background","blue");
                    f12=1;
                    player2();
                }
            }
        }
        else if(player === 2){
            if(f12 === 0){
                if(f22===0){
                    if(f32===0){
                        if(f42===0){
                            if(f52===0){
                                if(f62===0){
                                    $(".h62").css("background", "red");
                                    f62=2;
                                    player1();
                                }
                                else{
                                    $(".h52").css("background","red");
                                    f52=2;
                                    player1();
                                }
                            }
                            else{
                                $(".h42").css("background","red");
                                f42=2;
                                player1();
                            }
                        }
                        else{
                            $(".h32").css("background","red");
                            f32=2;
                            player1();
                        }
                    }
                    else{
                        $(".h22").css("background","red");
                        f22=2;
                        player1();
                    }
                }
                else{
                    $(".h12").css("background","red");
                    f12=2;
                    player1();
                }
            }
        }
    }
})
f3.click(function(){
    if(game === 1){
        if(player === 1){
            if(f13 === 0){
                if(f23===0){
                    if(f33===0){
                        if(f43===0){
                            if(f53===0){
                                if(f63===0){
                                    $(".h63").css("background", "blue");
                                    f63=1;
                                    player2();
                                }
                                else{
                                    $(".h53").css("background","blue");
                                    f53=1;
                                    player2();
                                }
                            }
                            else{
                                $(".h43").css("background","blue");
                                f43=1;
                                player2();
                            }
                        }
                        else{
                            $(".h33").css("background","blue");
                            f33=1;
                            player2();
                        }
                    }
                    else{
                        $(".h23").css("background","blue");
                        f23=1;
                        player2();
                    }
                }
                else{
                    $(".h13").css("background","blue");
                    f13=1;
                    player2();
                }
            }
        }
        else if(player === 2){
            if(f13 === 0){
                if(f23===0){
                    if(f33===0){
                        if(f43===0){
                            if(f53===0){
                                if(f63===0){
                                    $(".h63").css("background", "red");
                                    f63=2;
                                    player1();
                                }
                                else{
                                    $(".h53").css("background","red");
                                    f53=2;
                                    player1();
                                }
                            }
                            else{
                                $(".h43").css("background","red");
                                f43=2;
                                player1();
                            }
                        }
                        else{
                            $(".h33").css("background","red");
                            f33=2;
                            player1();
                        }
                    }
                    else{
                        $(".h23").css("background","red");
                        f23=2;
                        player1();
                    }
                }
                else{
                    $(".h13").css("background","red");
                    f13=2;
                    player1();
                }
            }
        }
    }
})
f4.click(function(){
    if(game === 1){
        if(player === 1){
            if(f14 === 0){
                if(f24===0){
                    if(f34===0){
                        if(f44===0){
                            if(f54===0){
                                if(f64===0){
                                    $(".h64").css("background", "blue");
                                    f64=1;
                                    player2();
                                }
                                else{
                                    $(".h54").css("background","blue");
                                    f54=1;
                                    player2();
                                }
                            }
                            else{
                                $(".h44").css("background","blue");
                                f44=1;
                                player2();
                            }
                        }
                        else{
                            $(".h34").css("background","blue");
                            f34=1;
                            player2();
                        }
                    }
                    else{
                        $(".h24").css("background","blue");
                        f24=1;
                        player2();
                    }
                }
                else{
                    $(".h14").css("background","blue");
                    f14=1;
                    player2();
                }
            }
        }
        else if(player === 2){
            if(f14 === 0){
                if(f24===0){
                    if(f34===0){
                        if(f44===0){
                            if(f54===0){
                                if(f64===0){
                                    $(".h64").css("background", "red");
                                    f64=2;
                                    player1();
                                }
                                else{
                                    $(".h54").css("background","red");
                                    f54=2;
                                    player1();
                                }
                            }
                            else{
                                $(".h44").css("background","red");
                                f44=2;
                                player1();
                            }
                        }
                        else{
                            $(".h34").css("background","red");
                            f34=2;
                            player1();
                        }
                    }
                    else{
                        $(".h24").css("background","red");
                        f24=2;
                        player1();
                    }
                }
                else{
                    $(".h14").css("background","red");
                    f14=2;
                    player1();
                }
            }
        }
    }
})
f5.click(function(){
    if(game === 1){
        if(player === 1){
            if(f15 === 0){
                if(f25===0){
                    if(f35===0){
                        if(f45===0){
                            if(f55===0){
                                if(f65===0){
                                    $(".h65").css("background", "blue");
                                    f65=1;
                                    player2();
                                }
                                else{
                                    $(".h55").css("background","blue");
                                    f55=1;
                                    player2();
                                }
                            }
                            else{
                                $(".h45").css("background","blue");
                                f45=1;
                                player2();
                            }
                        }
                        else{
                            $(".h35").css("background","blue");
                            f35=1;
                            player2();
                        }
                    }
                    else{
                        $(".h25").css("background","blue");
                        f25=1;
                        player2();
                    }
                }
                else{
                    $(".h15").css("background","blue");
                    f15=1;
                    player2();
                }
            }
        }
        else if(player === 2){
            if(f15 === 0){
                if(f25===0){
                    if(f35===0){
                        if(f45===0){
                            if(f55===0){
                                if(f65===0){
                                    $(".h65").css("background", "red");
                                    f65=2;
                                    player1();
                                }
                                else{
                                    $(".h55").css("background","red");
                                    f55=2;
                                    player1();
                                }
                            }
                            else{
                                $(".h45").css("background","red");
                                f45=2;
                                player1();
                            }
                        }
                        else{
                            $(".h35").css("background","red");
                            f35=2;
                            player1();
                        }
                    }
                    else{
                        $(".h25").css("background","red");
                        f25=2;
                        player1();
                    }
                }
                else{
                    $(".h15").css("background","red");
                    f15=2;
                    player1();
                }
            }
        }
    }
})
f6.click(function(){
    if(game === 1){
        if(player === 1){
            if(f16 === 0){
                if(f26===0){
                    if(f36===0){
                        if(f46===0){
                            if(f56===0){
                                if(f66===0){
                                    $(".h66").css("background", "blue");
                                    f66=1;
                                    player2();
                                }
                                else{
                                    $(".h56").css("background","blue");
                                    f56=1;
                                    player2();
                                }
                            }
                            else{
                                $(".h46").css("background","blue");
                                f46=1;
                                player2();
                            }
                        }
                        else{
                            $(".h36").css("background","blue");
                            f36=1;
                            player2();
                        }
                    }
                    else{
                        $(".h26").css("background","blue");
                        f26=1;
                        player2();
                    }
                }
                else{
                    $(".h16").css("background","blue");
                    f16=1;
                    player2();
                }
            }
        }
        else if(player === 2){
            if(f16 === 0){
                if(f26===0){
                    if(f36===0){
                        if(f46===0){
                            if(f56===0){
                                if(f66===0){
                                    $(".h66").css("background", "red");
                                    f66=2;
                                    player1();
                                }
                                else{
                                    $(".h56").css("background","red");
                                    f56=2;
                                    player1();
                                }
                            }
                            else{
                                $(".h46").css("background","red");
                                f46=2;
                                player1();
                            }
                        }
                        else{
                            $(".h36").css("background","red");
                            f36=2;
                            player1();
                        }
                    }
                    else{
                        $(".h26").css("background","red");
                        f26=2;
                        player1();
                    }
                }
                else{
                    $(".h16").css("background","red");
                    f16=2;
                    player1();
                }
            }
        }
    }
}) 
f7.click(function(){
    if(game === 1){
        if(player === 1){
            if(f17 === 0){
                if(f27===0){
                    if(f37===0){
                        if(f47===0){
                            if(f57===0){
                                if(f67===0){
                                    $(".h67").css("background", "blue");
                                    f67=1;
                                    player2();
                                }
                                else{
                                    $(".h57").css("background","blue");
                                    f57=1;
                                    player2();
                                }
                            }
                            else{
                                $(".h47").css("background","blue");
                                f47=1;
                                player2();
                            }
                        }
                        else{
                            $(".h37").css("background","blue");
                            f37=1;
                            player2();
                        }
                    }
                    else{
                        $(".h27").css("background","blue");
                        f27=1;
                        player2();
                    }
                }
                else{
                    $(".h17").css("background","blue");
                    f17=1;
                    player2();
                }
            }
        }
        else if(player === 2){
            if(f17 === 0){
                if(f27===0){
                    if(f37===0){
                        if(f47===0){
                            if(f57===0){
                                if(f67===0){
                                    $(".h67").css("background", "red");
                                    f67=2;
                                    player1();
                                }
                                else{
                                    $(".h57").css("background","red");
                                    f57=2;
                                    player1();
                                }
                            }
                            else{
                                $(".h47").css("background","red");
                                f47=2;
                                player1();
                            }
                        }
                        else{
                            $(".h37").css("background","red");
                            f37=2;
                            player1();
                        }
                    }
                    else{
                        $(".h27").css("background","red");
                        f27=2;
                        player1();
                    }
                }
                else{
                    $(".h17").css("background","red");
                    f17=2;
                    player1();
                }
            }
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