function diceGame(){

let player1=Math.floor(Math.random()*6)+1
let player2=Math.floor(Math.random()*6)+1


let random1="images/dice"+player1+".png"
let random2="images/dice"+player2+".png"

document.getElementById("p1dice").setAttribute("src",random1)
document.getElementById("p2dice").setAttribute("src",random2)

if(player1>player2){
    let result="PLayer 1 Wins!!"
    document.getElementById("Result").textContent=result
}
else if(player2>player1){
    let result="PLayer 2 Wins!!"
    document.getElementById("Result").textContent=result

}
else{
    let result="Draw!!"
    document.getElementById("Result").textContent=result
}

}