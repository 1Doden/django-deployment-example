var playerOne = prompt("Player One: Enter Your Name , you will be Blue")
var playerTwo = prompt("Player Two: Enter Your Name, you will be Red")
// $(".player").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.")
// $(".player").text(playerTwo + ": it is your turn, please pick a column to drop your blue chip.")

// red
// $("button").click(function(){
//   $(this).css("background","#e33952")
// })
// blue
// $("button").click(function(){
//   $(this).css("background","#3bb7f5")
// })

var buttonsArr = $("button")

function pOne(b){
  b.css("background","#3bb7f5")
}
function pTwo(b){
  b.css("background","#e33952")
}

col = []
cola = []
colb = []
colc = []
cold = []
cole = []
colf = []

for (var r = 0; r < 7; r++) {
  for (var c = 0; c < 6; c++) {
    if (r===0) {
      col.push(c*7 + r)
    }
    if (r===1) {
      cola.push(c*7 + r)
    }
    if (r===2) {
      colb.push(c*7 + r)
    }
    if (r===3) {
      colc.push(c*7 + r)
    }
    if (r===4) {
      cold.push(c*7 + r)
    }
    if (r===5) {
      cole.push(c*7 + r)
    }
    if (r===6) {
      colf.push(c*7 + r)
    }
  }
}


var index = []
var indexa = []
var indexb = []
var indexc = []
var indexd = []
var indexe = []
var indexf = []

for (var r = 0; r < 7; r++) {
  for (var c = 0; c < 6; c++) {
    if (r===0) {
      index.push(c*7 + r)
    }
    if (r===1) {
      indexa.push(c*7 + r)
    }
    if (r===2) {
      indexb.push(c*7 + r)
    }
    if (r===3) {
      indexc.push(c*7 + r)
    }
    if (r===4) {
      indexd.push(c*7 + r)
    }
    if (r===5) {
      indexe.push(c*7 + r)
    }
    if (r===6) {
      indexf.push(c*7 + r)
    }
  }
}
// if (i%7===0 + 1) {
//   buttonsArr.eq(i).on("click",pTwo)
// }
// var col = []
// var cola = []
//
// for (var i = 0; i < buttonsArr.length; i++) {
//   if (i%7===0) {
//     col.push(i)
//   }
//   if (i%7===0 + 1) {
//     cola.push(i)
//   }
// }
//
// for (var i = 0; i < buttonsArr.length; i++) {
//   if (i%7===0) {
//     buttonsArr.eq(i).on("click",function(){
//       pOne(buttonsArr.eq(col[col.length-1]))
//     })
//   }
// }

// for(row of col){
//   buttonsArr.eq(row).on("click",function(){
//     pOne(buttonsArr.eq(col[col.length-1]))
//     col.pop()
//   })
// }
//
//
// for(row of cola){
//   buttonsArr.eq(row).on("click",function(){
//     pTwo(buttonsArr.eq(cola[cola.length-1]))
//     cola.pop()
//   })
// }

function winCheck(result,index){
  pOneWin = "p1p1p1p1"
  pTwoWin = "p2p2p2p2"
  text = ""
  s = []

  for(var i of index){
    s.push(result[i])
  }

  for (var i = 0; i < s.length; i++) {
    text += s[i]
  }

  if (text.includes(pOneWin)) {
    $("h1").text(playerOne + " has won! Refresh your browser to play again!")
    $("h2").text("")
    $("h3").text("")
  }
  if (text.includes(pTwoWin)) {
    $("h1").text(playerTwo + " has won! Refresh your browser to play again!")
    $("h2").text("")
    $("h3").text("")
  }

}

result = []
for (var i = 0; i < 42; i++) {
  result.push(" ")
}

// result = []
var play = "player1"
$(".player").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.")



for(var row of col){
  buttonsArr.eq(row).on("click",function(){
    if ((play === "player1")&&(col.length > 0)) {

      pOne(buttonsArr.eq(col[col.length-1]))
      result.splice(col[col.length-1],1,"p1")
      col.pop()
      play = "player2"
      $(".player").text(playerTwo + ": it is your turn, please pick a column to drop your blue chip.")
      winCheck(result,index)
    }
    else if ((play === "player2")&&(col.length > 0)) {

      pTwo(buttonsArr.eq(col[col.length-1]))
      result.splice(col[col.length-1],1,"p2")
      col.pop()
      play = "player1"
      $(".player").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.")
      winCheck(result,index)
    }
  })
}

// for(row of cola){
//   buttonsArr.eq(row).on("click",function(){
//     if (play === "player1") {
//       pOne(buttonsArr.eq(cola[cola.length-1]))
//       cola.pop()
//       play = "player2"
//       $(".player").text(playerTwo + ": it is your turn, please pick a column to drop your blue chip.")
//     }
//     else if (play === "player2") {
//       pTwo(buttonsArr.eq(cola[cola.length-1]))
//       cola.pop()
//       play = "player1"
//       $(".player").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.")
//     }
//   })
// }


// for(row of col){
//   if (play === "player1") {
//     buttonsArr.eq(row).on("click",function(){
//       pOne(buttonsArr.eq(col[col.length-1]))
//       col.pop()
//     })
//     play = "player2"
//     continue;
//   }
//   if (play === "player2") {
//     buttonsArr.eq(row).on("click",function(){
//       pTwo(buttonsArr.eq(col[col.length-1]))
//       col.pop()
//     })
//     play = "player1"
//     continue;
//   }
// }



// if (play === "player1") {
//   for(row of col){
//     buttonsArr.eq(row).on("click",function(){
//       pOne(buttonsArr.eq(col[col.length-1]));
//       col.pop();
//       play = "player2";
//     })
//   }
// }
// if (play === "player2") {
//   for(row of col){
//     buttonsArr.eq(row).on("click",function(){
//       pTwo(buttonsArr.eq(col[col.length-1]));
//       col.pop();
//       play = "player1";
//     })
//   }
// }


// for (var i = 0; i < col.length; i++) {
//
//   if (play === "player1") {
//     console.log("P1 ",col[i])
//     play = "player2"
//     continue;
//   }
//   if (play === "player2") {
//     console.log("P2 ",col[i])
//     play = "player1"
//   }
// }

// for (var row of col) {
//
//   if (play === "player1") {
//     console.log("P1 ",row)
//     play = "player2"
//     continue;
//
//   }
//   if (play === "player2") {
//     console.log("P2 ",row)
//     play = "player1"
//   }
// }


// s = [1,1,2,3,4,5,6,6,9,9,9,8,7,5,1,6]
// text = ""
// for (var i = 0; i < s.length; i++) {
//   text += s[i]
// }
// console.log(text.includes("999"))

for(var row of cola){
  buttonsArr.eq(row).on("click",function(){
    if ((play === "player1")&&(cola.length > 0)) {

      pOne(buttonsArr.eq(cola[cola.length-1]))
      result.splice(cola[cola.length-1],1,"p1")
      cola.pop()
      play = "player2"
      $(".player").text(playerTwo + ": it is your turn, please pick a column to drop your blue chip.")
      winCheck(result,indexa)
    }
    else if ((play === "player2")&&(cola.length > 0)) {

      pTwo(buttonsArr.eq(cola[cola.length-1]))
      result.splice(cola[cola.length-1],1,"p2")
      cola.pop()
      play = "player1"
      $(".player").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.")
      winCheck(result,indexa)
    }
  })
}

for(var row of colb){
  buttonsArr.eq(row).on("click",function(){
    if ((play === "player1")&&(colb.length > 0)) {

      pOne(buttonsArr.eq(colb[colb.length-1]))
      result.splice(colb[colb.length-1],1,"p1")
      colb.pop()
      play = "player2"
      $(".player").text(playerTwo + ": it is your turn, please pick a column to drop your blue chip.")
      winCheck(result,indexb)
    }
    else if ((play === "player2")&&(colb.length > 0)) {

      pTwo(buttonsArr.eq(colb[colb.length-1]))
      result.splice(colb[colb.length-1],1,"p2")
      colb.pop()
      play = "player1"
      $(".player").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.")
      winCheck(result,indexb)
    }
  })
}

for(var row of colc){
  buttonsArr.eq(row).on("click",function(){
    if ((play === "player1")&&(colc.length > 0)) {

      pOne(buttonsArr.eq(colc[colc.length-1]))
      result.splice(colc[colc.length-1],1,"p1")
      colc.pop()
      play = "player2"
      $(".player").text(playerTwo + ": it is your turn, please pick a column to drop your blue chip.")
      winCheck(result,indexc)
    }
    else if ((play === "player2")&&(colc.length > 0)) {

      pTwo(buttonsArr.eq(colc[colc.length-1]))
      result.splice(colc[colc.length-1],1,"p2")
      colc.pop()
      play = "player1"
      $(".player").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.")
      winCheck(result,indexc)
    }
  })
}

for(var row of cold){
  buttonsArr.eq(row).on("click",function(){
    if ((play === "player1")&&(cold.length > 0)) {

      pOne(buttonsArr.eq(cold[cold.length-1]))
      result.splice(cold[cold.length-1],1,"p1")
      cold.pop()
      play = "player2"
      $(".player").text(playerTwo + ": it is your turn, please pick a column to drop your blue chip.")
      winCheck(result,indexd)
    }
    else if ((play === "player2")&&(cold.length > 0)) {

      pTwo(buttonsArr.eq(cold[cold.length-1]))
      result.splice(cold[cold.length-1],1,"p2")
      cold.pop()
      play = "player1"
      $(".player").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.")
      winCheck(result,indexd)
    }
  })
}

for(var row of cole){
  buttonsArr.eq(row).on("click",function(){
    if ((play === "player1")&&(cole.length > 0)) {

      pOne(buttonsArr.eq(cole[cole.length-1]))
      result.splice(cole[cole.length-1],1,"p1")
      cole.pop()
      play = "player2"
      $(".player").text(playerTwo + ": it is your turn, please pick a column to drop your blue chip.")
      winCheck(result,indexe)
    }
    else if ((play === "player2")&&(cole.length > 0)) {

      pTwo(buttonsArr.eq(cole[cole.length-1]))
      result.splice(cole[cole.length-1],1,"p2")
      cole.pop()
      play = "player1"
      $(".player").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.")
      winCheck(result,indexe)
    }
  })
}

for(var row of colf){
  buttonsArr.eq(row).on("click",function(){
    if ((play === "player1")&&(colf.length > 0)) {

      pOne(buttonsArr.eq(colf[colf.length-1]))
      result.splice(colf[colf.length-1],1,"p1")
      colf.pop()
      play = "player2"
      $(".player").text(playerTwo + ": it is your turn, please pick a column to drop your blue chip.")
      winCheck(result,indexf)
    }
    else if ((play === "player2")&&(colf.length > 0)) {

      pTwo(buttonsArr.eq(colf[colf.length-1]))
      result.splice(colf[colf.length-1],1,"p2")
      colf.pop()
      play = "player1"
      $(".player").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.")
      winCheck(result,indexf)
    }
  })
}

// testcr = []
// for (var r = 0; r < 7; r++) {
//   for (var c = 0; c < 6; c++) {
//     testcr.push(c*7+r)
//   }}
//
//
// for (var column = 0; column < 7; column++) {
//   for (var rows = 0; rows < 3; rows++) {
//     // if ((rows===(rows+1))&&((rows+1)===(rows+2))&&((rows+2)===(rows+3))) {
//     //   console.log("WIN!")
//     // }
//     console.log("col: " + column,"row: " + rows)
//   }
// }

function wins(result){
  for (var row = 0; row < 7; row++) {
    if (row === 0) {
      for (num = 0; num < 4; num++) {
        if (((result[num])===(result[num+1]))&&((result[num+1])===(result[num+2]))&&((result[num+2])===(result[num+3]))&&(result[num]!==" ")) {
          console.log("test works")
        }
      }
    }
    else if (row > 0) {
      for (num = 0; num < 4; num++) {
        if (((result[num+row*6+row])===(result[num+row*6+row+1]))&&((result[num+row*6+row+1])===(result[num+row*6+row+2]))&&((result[num+row*6+row+2])===(result[num+row*6+row+3]))&&(result[num+row*6+row+3]!==" ")) {
          console.log("test works 2")
        }
      }
    }
    else {
      console.log("test works 3")
    }
  }
}

// if (text.includes(pOneWin)) {
//   $("h1").text(playerOne + " has won! Refresh your browser to play again!")
//   $("h2").text("")
//   $("h3").text("")
// }
// if (text.includes(pTwoWin)) {
//   $("h1").text(playerTwo + " has won! Refresh your browser to play again!")
//   $("h2").text("")
//   $("h3").text("")
