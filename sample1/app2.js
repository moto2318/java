/* // メイン部分
let alertString;

// 作成した関数を呼び出し、変数へ格納
alertString = addString("WebCamp");

//変数の中身をアラートで表示する
alert(alertString);

// 作成した関数
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}*/



//複数の関数表示
// let user_hand = prompt('じゃんけんの手をぐー、チョキ、パーから選んでください');

// let js_hand = getJShand();

// let judge = winLose(user_hand, js_hand);

// alert('あなたの選んだ手は' + user_hand + 'です。\nJavascriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です');

// function getJShand(){
//    let js_hand_num = Math.floor(Math.random() * 3);
//    let hand_name;

//    if(js_hand_num == 0){  
//    hand_name = "ぐー";
//    } else if(js_hand_num == 1){
//       hand_name = "チョキ";
//    } else if(js_hand_num == 2){
//       hand_name = "パー";
//    }

//    return hand_name;
// }

// function winLose(user, js){
//    let winLoseStr;
//    if(user == "ぐー"){
//       if(js == "ぐー"){
//          winLoseStr = "あいこ";
//       } else if(js == "チョキ"){
//          winLoseStr = "勝ち";
//       } else if(js == "パー"){
//          winLoseStr = "負け";
//       }
//    } else if(user == "チョキ"){
//       if(js == "ぐー"){
//          winLoseStr = "負け";
//       } else if(js == "チョキ"){
//          winLoseStr = "あいこ";
//       } else if(js == "パー"){
//          winLoseStr = "勝ち";
//       }
//    } else if(user == "パー"){
//       if(js == "ぐー"){
//          winLoseStr = "勝ち";
//       } else if(js == "チョキ"){
//          winLoseStr = "負け";
//       } else if(js == "パー"){
//          winLoseStr = "あいこ";
//       }
//    }

//    return winLoseStr;
// }