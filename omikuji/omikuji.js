//変数
let username;
let userresult;

//名前入力受付
username = prompt("お名前を教えて下さい。");

if (username == ""){
    username = "名無し";
}

document.getElementById("name").innerHTML = username;

//おみくじ結果処理
let rand = Math.floor(Math.random() * 5);

if (rand == 0){
    userresult = "大吉";
}
if (rand == 1) {
    userresult = "中吉";
  }
  if (rand == 2) {
    userresult = "小吉";
  }
  if (rand == 3) {
    userresult = "吉";
  }
  if (rand == 4) {
    userresult = "凶";
  }

  document.getElementById("result").innerHTML = userresult;