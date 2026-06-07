/* =========================
   お気楽屋商店街 Ultimate
   script.js
========================= */

/* ---------- 音声 ---------- */

const radioAudio =
document.getElementById("radioAudio");

const crowAudio =
document.getElementById("crowAudio");

const chimeAudio =
document.getElementById("chimeAudio");

/* ---------- メッセージ ---------- */

const messages = [

"商店街には西日が差し込み、どこかの店からラジオが聞こえる。",

"ラジオだけが鳴っています。外は静かです。",

"猫はどこかで寝ています。",

"急がなくても大丈夫。",

"お気楽屋商店街は今日ものんびり営業中です。",

"何もしない日があってもいい。",

"風だけがゆっくり流れています。"

];

const messageBox =
document.getElementById("message");

function changeMessage(){

const random =
Math.floor(
Math.random()*messages.length
);

messageBox.innerHTML =
messages[random];

}

setInterval(
changeMessage,
15000
);

/* =========================
   星生成
========================= */

const starLayer =
document.getElementById("starLayer");

for(let i=0;i<120;i++){

const star =
document.createElement("div");

star.className =
"star";

star.style.left =
Math.random()*100+"vw";

star.style.top =
Math.random()*55+"vh";

star.style.animationDelay =
Math.random()*5+"s";

starLayer.appendChild(star);

}

/* =========================
   ホタル生成
========================= */

const fireflyLayer =
document.getElementById("fireflyLayer");

for(let i=0;i<25;i++){

const firefly =
document.createElement("div");

firefly.className =
"firefly";

firefly.style.left =
Math.random()*100+"vw";

firefly.style.bottom =
(5+Math.random()*20)+"vh";

firefly.style.animationDelay =
Math.random()*5+"s";

fireflyLayer.appendChild(
firefly
);

}

/* =========================
   雲生成
========================= */

const cloudLayer =
document.getElementById("cloudLayer");

for(let i=0;i<5;i++){

const cloud =
document.createElement("div");

cloud.className =
"cloud";

cloud.style.top =
(5+i*10)+"%";

cloud.style.animationDuration =
(70+i*20)+"s";

cloud.style.opacity =
0.5;

cloudLayer.appendChild(
cloud
);

}

/* =========================
   猫ランダム停止
========================= */

const cat =
document.getElementById("cat");

setInterval(()=>{

cat.style.animationPlayState =
"paused";

setTimeout(()=>{

cat.style.animationPlayState =
"running";

},3000);

},25000);

/* =========================
   雨
========================= */

let rainMode=false;

const rainBtn =
document.getElementById("rainBtn");

rainBtn.onclick = ()=>{

rainMode=!rainMode;

const layer =
document.getElementById(
"weatherLayer"
);

layer.innerHTML="";

if(rainMode){

snowMode=false;

for(let i=0;i<180;i++){

const rain =
document.createElement("div");

rain.className="rain";

rain.style.left =
Math.random()*100+"vw";

rain.style.animationDelay =
Math.random()+"s";

layer.appendChild(rain);

}

}

};

/* =========================
   雪
========================= */

let snowMode=false;

const snowBtn =
document.getElementById("snowBtn");

snowBtn.onclick = ()=>{

snowMode=!snowMode;

const layer =
document.getElementById(
"weatherLayer"
);

layer.innerHTML="";

if(snowMode){

rainMode=false;

for(let i=0;i<100;i++){

const snow =
document.createElement("div");

snow.className="snow";

snow.innerHTML="❄";

snow.style.left =
Math.random()*100+"vw";

snow.style.animationDelay =
Math.random()*10+"s";

layer.appendChild(snow);

}

}

};


/* =========================
   カラス
========================= */

const crowBtn =
document.getElementById("crowBtn");

crowBtn.onclick=()=>{

crowAudio.currentTime=0;

crowAudio.play()
.catch(()=>{

alert(
"crow.mp3 を配置してください"
);

});

};

/* =========================
   アナウンス
========================= */

/* =========================
   アナウンス
========================= */

const chimeBtn =
document.getElementById("chimeBtn");

const chimeAudio =
document.getElementById("chimeAudio");

chimeBtn.addEventListener("click",()=>{

  if(chimeAudio.paused){

    chimeAudio.play()
    .catch(()=>{

      alert(
      "chime.mp3 を配置してください"
      );

    });

  }else{

    chimeAudio.pause();
    chimeAudio.currentTime=0;

  }

});

/* =========================
   深夜モード
========================= */

const nightBtn =
document.getElementById("nightBtn");

const overlay =
document.getElementById(
"nightOverlay"
);

let night=false;

nightBtn.onclick=()=>{

night=!night;

if(night){

overlay.style.opacity="1";

}else{

overlay.style.opacity=".25";

}

};

/* =========================
   カラス飛行
========================= */

const crowLayer =
document.getElementById("crowLayer");

function spawnCrow(){

const crow =
document.createElement("div");

crow.innerHTML="🐦‍⬛";

crow.style.position="absolute";

crow.style.fontSize="32px";

crow.style.top=
Math.random()*35+"vh";

crow.style.left="-50px";

crow.style.transition=
"20s linear";

crowLayer.appendChild(crow);

setTimeout(()=>{

crow.style.left=
"110vw";

},100);

setTimeout(()=>{

crow.remove();

},21000);

}

setInterval(
spawnCrow,
45000
);

/* =========================
   起動メッセージ
========================= */

console.log(
"お気楽屋商店街 Ultimate 起動"
);
