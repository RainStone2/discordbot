let prefix;
let multiple;
let hp = 5000;
let ff=[0,0]
let t=0
let fi=0
mana=101029381273
damage=10000
let maxhp=5000
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login('ODI3NzczNDE3MDE2NTI0ODUw.YGf6EQ.aZ5ELNQt7CcId6OPlAdMH_JgoIk');

const { deepStrictEqual } = require('assert');
const { constants } = require('buffer');
const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql');  // mysql 모듈 로드
const { getgid, exit } = require('process');
const conn = {  // mysql 접속 설정
    host: 'localhost',
    port: '3306',
    user: 'RainStone2',
    password: '1234',
    database: 'playerinfo'
};

var connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속
const { fileURLToPath } = require('url');
//const client = new Discord.Client();
const https = require('https');
const querystring = require('querystring');
const { time, Console } = require('console');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const { MessageEmbed } = require('discord.js');
function getDictionary(input, callback) {
  let resp = [];
  var params = {
    query: input, 
    m: 'pc', 
    hid: '162226050205664350'
  };

  var naverDictionaryInfo = {
    hostname: 'ko.dict.naver.com',
    port: 443,
    path: '/api3/koko/search?' + querystring.stringify(params),
    // path: '/api3/koko/search?query=%EC%B9%98%EA%B3%BC&m=pc&hid=162226050205664350',
    method: 'GET', 
    // json: true
  };
  const query = async (alias, values) => {
    return new Promise((resolve, reject) => pool.query(sql[alias], values, (error, results) => {
      if (error) {  // 에러가 발생 
        console.log(error);
        reject({
          error
        });
      } else resolve(results); // 쿼리 결과를 전달
    }));
  }
  
  module.exports = {
    query
  };
  var req = https.request(naverDictionaryInfo, (res) => {
    let body = "";
    console.log('statusCode:', res.statusCode);
  
    res.on('data', (d) => {
      // process.stdout.write(d);
      body += d;
    }).on('end', () => {
      try {
        let jsonResp = JSON.parse(body);
        resp['partOfSpeech'] = jsonResp['searchResultMap']['searchResultListMap']['WORD']['items'][0]['meansCollector'][0]['partOfSpeech'];
        resp['value'] = JSON.stringify(jsonResp['searchResultMap']['searchResultListMap']['WORD']['items'][0]['meansCollector'][0]['means'][0]['value']);
        console.log('in the function value : ' + resp['value']);
        callback(resp);
        
        // console.log('jsonRespxx : ' + JSON.stringify(jsonResp['searchResultMap']['searchResultListMap']['WORD']['items'][0]['meansCollector'][0]['means'][0]['value']));
        // if(jsonResp['searchResultMap']['searchResultListMap']['WORD']['items'][0]['meansCollector'][0]['partOfSpeech'] === "명사"){
        // return jsonResp['searchResultMap']['searchResultListMap']['WORD']['items'][0]['meansCollector'][0]['means'][0]['value']
        //console.log('jsonResp : ' + jsonResp['searchResultMap']['searchResultListMap']['WORD']['items'][0]['meansCollector'][0]['means']['value']);
        return resp;
        
      } catch (error) {
        console.error(error.message);
      };
    });
  });
  
  req.on('error', (e) => {
    console.error(e);
  });
  
  req.end();
}


client.on('ready', () => {
  console.log("봇 온!");
});
const questionmap = new Map();
const rmap = new Map();
const pointmap = new Map();
const memomap = new Map();
const ggutmalitguimap = new Map();
const lenggutmalitguimap = new Map();
const usermap = new Map();
const moonjaemap = new Map();
const answermap = new Map();
const answered = new Map();
const moneymap = new Map();
const accountCreated = new Map();
const dungeonCreated = new Map();
const percentmap = new Map();
const earningmap = new Map();
const Dplayer = new Map();
const Dmoney = new Map();
const Djob = new Map();
const Dlevel = new Map();
const Dexp = new Map();
const Dhp = new Map();
const Dmg = new Map();
const Dmana = new Map();
const DungeonMonHp = new Map();
const Darmor = new Map();
const Defense = new Map();
const ArmDef = new Map();
const SThp = new Map();
const STdmg = new Map();
const STmana = new Map();
const Dstat = new Map();
const Slevel = new Map();
const Sexp = new Map();
const WaitingForAtack = new Map();
const EquippedSword = new Map();
const Dequiped = new Map();
const DinvenCount = new Map();
const Dungeonmap = new Map();
const materialReady = new Map();
const Hlevel = new Map();
const Hexp = new Map();
const Dmap = new Map()
const Dk = new Map();
const Wlevel = new Map();
const Wexp = new Map();
const DungeonMonster = new Map();
const Alevel = new Map();
const Aexp = new Map();
const DungeonClearedMap = new Map();
const Tlevel = new Map();
const Texp = new Map();

const Shealth = new Map();
const Sdmg = new Map();
const Smana = new Map();
const Mon = new Map();
const Dinven = new Map();
function random(small, big) {
  return Math.floor(Math.random() * (big - small)) + small;
}

function inventoryFind(num, UserInven){
  for(var index = 0; index < UserInven.length + 1; index++){
    if(UserInven[index] == num){
      return index;
    } 
  }
  return "false";

}
function random(small, big) {
    return Math.floor(Math.random() * (big - small)) + small;
}

function skill(job, num) {
  //console.log("GyuKatchu"+job, num)

  //1.공격:  1,이름,래밸 재한,배수,횟수,마나,z (z는 일반:1   멀티샷:2   여러번:3)
//2.마법:  2,이름,래밸 재한,마법 대미지,횟수,마나
//3.방어:  3,이름,래밸 재한,양(빼기),마나
//4.힐   :  4,이름,래밸 재한,양,마나,횟수

//5.마나:  5,이름,래밸 재한,양
//6.어글:  6,이름,래밸 재한,턴
//"슬래시","연속때리기","전사의방패","래전더리히트","전사의정신","마나모으기","힐","파워힐","지속힐","레전더리힐","어그로","방패","돌진","전설의방패","탱커의본능","마나모으기","파이어볼","토네이도","불빛의서리","아이스스톰","파워샷","멀티샷","트리플샷","레전더리샷","힐샷"
  if (job == 1) {
    if (num == 1) 
      return [1, "슬래시", 3, 3, 1, 100, 1];
    if (num == 2) 
      return [1, "연속때리기", 7, 0.5, 10, 100, 2];
    if (num == 3) 
      return [3, "전사의방패", 10, 500, 300];
    if (num == 4) 
      return [1, "래전더리히트", 20, 2, 4, 300, 2];
    if (num == 5) 
      return [4, "전사의정신", 25, 3000, 500, 1, 1];
  } else if (job == 2) {
    if (num == 1) 
      return [5, "마나모으기", 1, 1000];
    if (num == 2) 
      return [4, "힐", 1, 200, 300, 1, 2];
    if (num == 3) 
      return [4, "파워힐", 10, 1000, 1000, 1, 2];
    if (num == 4) 
      return [4, "지속힐", 10, 300, 1000, 5, 2];
    if (num == 5) 
      return [4, "레전더리힐", 20, 5000, 2000, 1, 2];
  } else if (job == 3) {
    if (num == 1) 
      return [6, "어그로", 1, 5];
    if (num == 2) 
      return [3, "방패", 3, 300, 300];
    if (num == 3) 
      return [1, "돌진", 7, 3, 1, 0, 1];
    if (num == 4) 
      return [3, "전설의방패", 15, 1000, 500];
    if (num == 5) 
      return [4, "탱커의본능", 20, 5000, 700, 1];
  } else if (job == 4) {
    if (num == 1) 
      return [5, "마나모으기", 1, 1000];
    if (num == 2) 
      return [2, "파이어볼", 1, 500, 1, 500];
    if (num == 3) 
      return [2, "토네이도", 5, 300, 3, 800];
    if (num == 4) 
      return [2, "불빛의서리", 10, 100, 15, 1500];
    if (num == 5) 
      return [2, "아이스스톰", 15, 3000, 1, 2000, 1];
  } else if (job == 5) {
    if (num == 1) 
      return [1, "파워샷", 7, 5, 1, 300, 1];
    if (num == 2) 
      return [1, "멀티샷", 15, 1, 4, 500, 2];
    if (num == 3) 
      return [1, "트리플샷", 15, 1, 3, 500, 3];
    if (num == 4) 
      return [1, "레전더리샷", 20, 3, 3, 700, 2];
    if (num == 5) 
      return [4, "힐샷", 25, 3000, 100, 3, 1];
  }

}
/*
function skillmsg(msg, Author) {
  var Dskill = skill(Djob.get(Author), msg)
  if(Dskill != undefined){
    return Dskill
  }
}
*/


function monster_information(num1,num2){
  
  //이름,체력,데미지,쿨타임,스테이지↓,스테이지↑,exp
  if(num1==1){
    if(num2==1) return ["해골"  ,300 ,500 ,1,1,70]  //1
    if(num2==2) return ["맷돼지",1000,100 ,1,2,70]  //1~2
    if(num2==3) return ["기사"  ,700 ,300 ,1,3,70]  //1~3
    if(num2==4) return ["고블린",100 ,500 ,2,3,50]  //2~3
    if(num2==5) return ["트롤"  ,50  ,700 ,2,3,70]  //2~5
    if(num2==6) return ["마녀"  ,1500,500 ,2,5,100]  //3~5
    if(num2==7) return ["슬라임",2000,700 ,4,5,100]  //4~5
    if(num2==8) return ["골램"  ,5000,100 ,4,5,200]  //4~5
    if(num2==9) return ["사신"  ,500 ,3000,5,5,200]  //5
  }
  else{
    if(num2==1) return ["아이스 드래곤"  ,15000 ,3000 ,6]
    if(num2==2) return ["파이어 드래곤"  ,10000 ,5000 ,6]
    if(num2==3) return ["레전더리 드래곤",15000 ,5000 ,6]
    if(num2==4) return ["골램"           ,15000 ,500  ,1]
    if(num2==5) return ["케르배우스"     ,10000 ,2000 ,2]
    if(num2==6) return ["마왕"           ,15000 ,2000 ,3]
    if(num2==7) return ["악마"           ,15000 ,3500 ,4]
    if(num2==8) return ["신"             ,100000,10000,5]
  }
}
function skillmsg(msg) {
  k = 0;
  msgsplitt = msg.split(" ");
  pr2=[]
  msg = msgsplitt[0];
  if (msgsplitt.length == 2 && msgsplitt[1] <= 5 && msgsplitt[1] >= 1){     //skill을 보냈는지 확인하는 함수임
    console.log("IF문에 들어옴")
    for (qq1 = 1; qq1 < 5; qq1++) {
    for (qq2 = 1; qq2 < 5; qq2++) {
      console.log("A : "+qq1 +","+qq2)
      if (msg == skill(qq1, qq2)[1]) {
        k = 1;
        pr2 = [msgsplit[1]];
        for (qq3 = 0; qq3 < skill(qq1, qq2).length; qq3++) {
          pr2[qq3 + 1] = skill(qq1, qq2)[qq3  ];
        }
        //pr2=[msgsplit[1],skill(qq1,qq2)]
        return pr2;
      }
    }
  }
}
/*
for (qq3 = 0; qq3 < skill(1, 1).length; qq3++) {
  pr2[qq3 + 1] = skill(1, 1)[qq3  ];
}
k=1
return pr2;
*/
}
function numtoname(a){
  al=a.length
  b=[]
  b[0]=""
    c=monster_information(1,a[0])
    b[0]=c[0]
  for(p=1;p<al;p++){
    b[p]=""
    c=monster_information(1,a[p])
    b[p]=c[0]
  }
  
  return b
}


let output
const setOutput = (rows) => {
  output = rows;
  console.log(output);
}

function RunSqlWithFunction(testQuery, fnct) {
  connection.query(testQuery, fnct)
  
  };
function RunSqlWithParam(testQuery, fnct, value){
  connection.query(testQuery, fnct)
}
function inventorynum(num){
//이름,종류,가격,팔는거/사는거,만들수 있냐 없냐
if(num==1){
  return ["대검","검",3000,0,0]
}else if(num==2){
  return ["전사의 대검","검",7000,0,0]
}else if(num==3){
  return ["철재 대검","검",5000,0,1]
}else if(num==4){
  return ["금 대검","검",7000,0,1]
}else if(num==5){
  return ["다이아 대검","검",10000,0,1]
}else if(num==6){
  return ["파이어 대검","검",20000,0,1]
}else if(num==7){
  return ["체력의 대검","검",10000,0,0]
}

else if(num==8){
  return ["화살","활",20,0,0]
}else if(num==9){
  return ["보우","활",5000,0,0]
}else if(num==10){
  return ["레인보우 보우","활",7000,0,1]
}else if(num==11){
  return ["레전더리 보우","활",10000,0,1]
}else if(num==12){
  return ["석궁","활",7000,0,0]
}

else if(num==13){
  return ["마법사의 지팡이","지팡이",7000,0,0]
}else if(num==14){
  return ["마법사의 아이스 지팡이","지팡이",7000,0,1]
}else if(num==15){
  return ["마법사의 파이어 지팡이","지팡이",7000,0,1]
}else if(num==16){
  return ["힐러의 지팡이","지팡이",7000,0,0]
}

else if(num==17){
  return ["체력의 갑옷","갑옷",5000,0,0]
}else if(num==18){
  return ["마법사의 갑옷","갑옷",5000,0,0]
}else if(num==19){
  return ["귀한 갑옷","갑옷",3000,0,0]
}else if(num==20){
  return ["철재 갑옷","갑옷",7000,0,1]
}else if(num==21){
  return ["다이아 갑옷","갑옷",10000,0,1]
}else if(num==22){
  return ["전설의 갑옷","갑옷",20000,0,1]
}

else if(num==23){
  return ["체력의 포션","포션",20000,0,0]
}else if(num==24){
  return ["회복의 포션","포션",2000,0,0]
}else if(num==25){
  return ["힘의 포션","포션",2000,0,0]
}

else if(num==26){
  return ["돌","돌",50,1,0]
}else if(num==27){
  return ["철","돌",200,1,0]
}else if(num==28){
  return ["금","돌",300,1,0]
}else if(num==29){
  return ["다이아","돌",500,1,0]
}

else if(num==30){
  return ["뼈","몬템",100,1,0]
}else if(num==31){
  return ["가죽","몬템",100,1,0]
}else if(num==32){
  return ["포션","몬템",500,1,0]
}else if(num==33){
  return ["탱탱볼","몬템",700,1,0]
}else if(num==34){
  return ["사신의 대검","몬템",1500,1,0]
}

else if(num==35){
  return ["아이스 조각","보스",500,1,0]
}else if(num==36){
  return ["파이어 조각","보스",5000,1,0]
}else if(num==37){
  return ["전설의 조각","보스",1000,1,0]
}
}

function inventorymaterial(num){
//필요돈,필요재료,갯수

if(num==3){
  return [3000,27,10]
}else if(num==4){
  return [4000,28,10]
}else if(num==5){
  return [5000,29,5]
}else if(num==6){
  return [7000,36,1]
}

else if(num==10){
  return [5000,30,10]
}else if(num==11){
  return [7000,37,3]
}

else if(num==14){
  return [5000,35,2]
}else if(num==15){
  return [5000,36,2]
}

else if(num==20){
  return [3000,27,10]
}else if(num==21){
  return [5000,29,5]
}else if(num==22){
  return [7000,37,3]
}
}

function inventorydamage(num){
//1000:1배
if(num==1){
  return 1200
}else if(num==2){
  return 1500
}else if(num==3){
  return 1400
}else if(num==4){
  return 1700
}else if(num==5){
  return 2000
}else if(num==6){
  return 2500  //할수있으면 화염 대미지도
}else if(num==7){
  return 1300
}
else if(num==8){
  return 100
}
else if(num==9){
  return 1500
}else if(num==10){
  return 2000
}else if(num==11){
  return 3000
}else if(num==12){
  return 1300
}
}
function numtohp(a){
  al=a.length
  b=[]
  b[0]=""
    c=monster_information(1,a[0])
    console.log(c)
    b[0]=c[1]
  for(p=1;p<al;p++){
    b[p]=""
    c=monster_information(1,a[p])
    b[p]=c[1]
    console.log(b)
  }
  
  return b
}
function inventorymagic(num){
//원래 100

if(num==13){
  return 200
}else if(num==14){
  return 300  //지속적임,약함
}else if(num==15){
  return 300  //짧음    ,강함
}else if(num==16){
  return 500
}

else if(num==18){
  return 200
}
}
function mapmonstar(stage){
  rmli=[]
  rm=[]
  for(i=1;i<10;i++){
  mi=monster_information(1,i)
  mi0=mi[0]
  mi4=mi[3]
  mi5=mi[4]
    if(stage>=mi4 && stage<=mi5){
      rmli[rmli.length]=i
    }
  }
  for(i=0;i<5;i++){
    r=random(0,rmli.length)
    rm[rm.length]=rmli[r]
  }
  return rm
}


function maprandom(stage, Author){
  //현재는 5스테이지 까지
  map=[[4,2]]
  now=[4,2]
  mon=[]
  monhp=[]
  pos=[4,2]
  Dhp.set(Author, maxhp)
    mm=mapmonstar(stage)
    mon[0]=mm
    monhp[0]=numtohp(mm)
  for(k=0;k<50;k++){
    r=random(1,9)
    d=0
    if(r<3){
      d=1
      now[0]-=1
    }else if(r<6){
      
      if(now[1]!=4){
        now[1]+=1
        a=0
        ml=map.length
        for(i=0;i<ml;i++){
          if(now[0]==map[i][0]){
            if(now[1]==map[i][1]){
              a=1
            }
          }
        }
        if(!a){
        d=1
        }
        else{
        now[1]-=1
          d=0
        }
      }
      /*
      else{
        now[1]-=1
      }
      */
    }else{
      if(now[1]!=0){
        now[1]-=1
        a=0
        ml=map.length
        for(i=0;i<ml;i++){
          if(now[0]==map[i][0]){
            if(now[1]==map[i][1]){
              a=1
            }
          }
        }
        if(!a){
        d=1
        }
        else{
        now[1]+=1
          d=0
        }
      }
      /*
      else{
        now[1]+=1
      }
      */
    }
    if(d){
      //if(now[0]==0){
      //  
      //}
      //else{
    mm=mapmonstar(stage);
    //mon[mon.length]=[]
    mon[mon.length]=mm;
    map[map.length]=[[]]
    map[map.length-1][0]=now[0]
    map[map.length-1][1]=now[1]
    monhp[monhp.length]=numtohp(mm)
      //}
    }
  }
  /*
  for(k=0;k<10;k++){
    if(now[0]!=6){
    mm=mapmonstar(stage);
    //mon[mon.length]=[]
    now[0]-=1
    mon[mon.length]=mm;
    map[map.length]=[[]]
    map[map.length-1][0]=now[0]
    map[map.length-1][1]=now[1]
    }
  }
  */
  DungeonMonHp.set(Author, monhp)
  Dungeonmap.set(Author, map)
  DungeonMonster.set(Author, mon)
  return map
}
 
function mappr(map,pos, Author){
  mpr=""
  ml=map.length
  roomMon = 0
  monhp = DungeonMonHp.get(Author)
  for(i=0;i<5;i++){
    if(i!=0){
      mpr+="\n"
    }
    mpr+="-----------------------------------\n|"
    for(j=0;j<5;j++){
      d=0
      for(k=0;k<ml;k++){
        if(map[k][0]==i && map[k][1]==j){
          d=1
          pp=k+1
        }
      }
      
      
      jj=0
      if(pos[0]==i && pos[1]==j) jj=1
      
      if(!d){
        mpr+="   벽   |"
      }
      else{
        if(jj){
          mpr+="  :grinning:  |"
        }
        else{
          //if(10>pp){
            mpr+="   "+pp+"   |"
          //}
          /*else{
            
            mpr+=" "+pp+"   |"
          }*/
        }
      }
    }
  }
  mpr+="\n-----------------------------------"
  //return pos
  return mpr
}
//
function move_show(msg,map,pos, Author){
  opi=1
  zz=0
  mon = DungeonMonster.get(Author)
  opi = 1;
  zz = 0;
  at=1
  msgsplit = msg.split(" ");
  oo = msgsplit[1] - 1;
  sm = skillmsg(msg);
  
  if (k == 1) {
    
    at=0
    if(sm[1]==1){
    if(sm[6]<mana){
      mana-=sm[6]
    opi = sm[5] + 1;
    mmm = sm[0];
    nth = numtohp(mon[mmm]);
    o = numtoname(mon[mmm]);
    dz = oo;
    if (monhp[mmm][oo] > 0) {
      cdamage = Dmg.get(Author) * sm[4];
      monhp[mmm][oo] -= cdamage;
      pr = [];
      zz = 1;
      hp -= monster_information(1, mon[mmm][oo])[2];
      prr = [];
      for (ii = 0; ii < opi-1; ii++) {
        if (monhp[mmm][oo] <= 0) {
          monhp[mmm][oo] -= cdamage;
          prr[ii] = o[oo] + "를 죽였습니다!\n  >데미지:" + cdamage + "\n  >체력:" + percentage((monhp[mmm][oo] / nth[oo] * 100).toFixed(2)) + "\n  >exp:" + monster_information(1, mon[mmm][oo])[5];
        } else {
          monhp[mmm][oo] -= cdamage;
          prr[ii] = o[oo] + "을 때렸습니다!\n  >데미지:" + cdamage + "\n  >체력:" + percentage((monhp[mmm][oo] / nth[oo] * 100).toFixed(2));
        }
      }
      if (hp <= 0) prr[ii] = o[oo] + "가 당신을 죽였습니다!\n  >데미지:" + monster_information(1, mon[mmm][oo])[2] + "\n  >체력:" + percentage((hp / maxhp * 100).toFixed(2));
      else prr[ii] = o[oo] + "가 당신을 때렸습니다!\n  >데미지:" + monster_information(1, mon[mmm][oo])[2] + "\n  >체력:" + percentage((hp / maxhp * 100).toFixed(2));
      return prr;
    } else {
      at = 1;
      return "이미 죽어있는 몬스터 입니다";
    }
  }
  else{
    at=1
    return "마나가 부족합니다"
  }
  }
  }
  oo=msgsplit[1]-1
  opi = 1;
  zz = 0;
  at=1
  msgsplit = msg.split(" ");
  oo = msgsplit[1] - 1;
  sm = skillmsg(msg);
  if (Dk.get(Author) == 1) {
    
    at=0
    if(sm[1]==1){
    if(sm[6]<mana){
      mana-=sm[6]
    opi = sm[5] + 1;
    mmm = sm[0];
    nth = numtohp(mon[mmm]);
    o = numtoname(mon[mmm]);
    dz = oo;
    if (monhp[mmm][oo] > 0) {
      cdamage = Dmg.get(Author) * sm[4];
      monhp[mmm][oo] -= cdamage;
      pr = [];
      zz = 1;
      hp -= monster_information(1, mon[mmm][oo])[2];
      prr = [];
      for (ii = 0; ii < opi-1; ii++) {
        if (monhp[mmm][oo] <= 0) {
          monhp[mmm][oo] -= cdamage;
          prr[ii] = o[oo] + "를 죽였습니다!\n  >데미지:" + cdamage + "\n  >체력:" + percentage(monhp[mmm][oo] / nth[oo] * 100) + "\n  >exp:" + monster_information(1, mon[mmm][oo])[5];
        } else {
          monhp[mmm][oo] -= cdamage;
          prr[ii] = o[oo] + "을 때렸습니다!\n  >데미지:" + cdamage + "\n  >체력:" + percentage(monhp[mmm][oo] / nth[oo] * 100);
        }
      }
      if (hp <= 0) prr[ii] = o[oo] + "가 당신을 죽였습니다!\n  >데미지:" + monster_information(1, mon[mmm][oo])[2] + "\n  >체력:" + percentage(hp / maxhp * 100);
      else prr[ii] = o[oo] + "가 당신을 때렸습니다!\n  >데미지:" + monster_information(1, mon[mmm][oo])[2] + "\n  >체력:" + percentage(hp / maxhp * 100);
      return prr;
    } else {
      at = 1;
      return "이미 죽어있는 몬스터 입니다";
    }
  }
  else{
    at=1
    return "마나가 부족합니다"
  }
  }
  }
  if (msg=="hp") return hp
  
  if(msgsplit.length==2 && msgsplit[0]=="atk" && msgsplit[1]<6 && msgsplit[1]>0 || skill(Djob.get(Author),msgsplit[0]) != undefined){
    if(!fi || oo==dz){
    for(m=0;m<ml;m++){
        if(map[m][0]==pos[0] && map[m][1]==pos[1]){
        a=1
        mmm=m
      }
    }
    opi=2
    var Skilldamage
    cdamage = Dmg.get(Author)
    monster = DungeonMonster.get(Author)
    monhp = DungeonMonHp.get(Author)
    if(skill(Djob.get(Author), msgsplit[0]) != undefined){
      Dskill = skill(Djob.get(Author),msgsplit[0])
      Skilldamage = Dmg.get(Author) + (STdmg.get(Author)*100) * Dskill[3]

    }
    else{
      Skilldamage = undefined
    }
    nth=numtohp(monster[mmm])
    o=numtoname(monster[mmm])
    dz=oo
    roomMon = DungeonMonHp.get(Author)
    if(monhp[mmm][oo]>0){
      if(Skilldamage != undefined){
        monhp[mmm][oo]-=Skilldamage
      }
      else{
        monhp[mmm][oo] -= cdamage
      }
      pr=[]
      zz=1
      prr=[]
      if(monhp[mmm][oo]<=0){
        fi=false
        monhp[mmm][oo] = 0
        prr[0]=o[oo]+"를 죽였습니다!\n  >데미지:"+cdamage+"\n  >체력:"+percentage((0).toFixed(2))+"\n  >exp:"+monster_information(1,mon[mmm][oo])[5]
        console.log(monhp)
        if(Djob.get(Author) == 1){
          curSexp = Sexp.get(Author)
          Sexp.set(Author,curSexp + Number(monster_information(1,mon[mmm][oo])[5]))
          if(Sexp.get(Author) / workerexp(Slevel.get(Author))){
            curSlev = Slevel.get(Author)
            Slevel.set(Author, curSlev + 1)
            curSexp = Sexp.get(Author)
            Sexp.set(Author, curSexp - workerexp(Slevel.get(Author) - 1))
          }
        }
        //2힐 3메 4아 5탱
        else if(Djob.get(Author) == 2){
          curHexp = Hexp.get(Author)
          Hexp.set(Author,curHexp + Number(monster_information(1,mon[mmm][oo])[5]))
          if(Hexp.get(Author) / workerexp(Hlevel.get(Author))){
            curHlev = Hlevel.get(Author)
            Hlevel.set(Author, curHlev + 1)
            curHexp = Hexp.get(Author)
            Hexp.set(Author, curHexp - workerexp(Hlevel.get(Author) - 1))
          }
        }
        else if(Djob.get(Author) == 3){
          curWexp = Wexp.get(Author)
          Wexp.set(Author,curWexp + Number(monster_information(1,mon[mmm][oo])[5]))
          if(Wexp.get(Author) / workerexp(Wlevel.get(Author))){
            curWlev = Wlevel.get(Author)
            Wlevel.set(Author, curWlev + 1)
            curWexp = Wexp.get(Author)
            Wexp.set(Author, curWexp - workerexp(Wlevel.get(Author) - 1))
          }
        }
        else if(Djob.get(Author) == 4){
          curAexp = Aexp.get(Author)
          Aexp.set(Author,curAexp + Number(monster_information(1,mon[mmm][oo])[5]))
          if(Aexp.get(Author) / workerexp(Alevel.get(Author))){
            curAlev = Alevel.get(Author)
            Alevel.set(Author, curAlev + 1)
            curAexp = Aexp.get(Author)
            Aexp.set(Author, curAexp - workerexp(Alevel.get(Author) - 1))
          }
        }
        else if(Djob.get(Author) == 5){
          curTexp = Texp.get(Author)
          Texp.set(Author,curTexp + Number(monster_information(1,mon[mmm][oo])[5]))
          if(Texp.get(Author) / workerexp(Tlevel.get(Author))){
            curTlev = Tlevel.get(Author)
            Tlevel.set(Author, curTlev + 1)
            curTexp = Texp.get(Author)
            Texp.set(Author, curTexp - workerexp(Tlevel.get(Author) - 1))
          }
        }
        
        }
      else{  prr[0]=o[oo]+"을 때렸습니다!\n  >데미지:"+cdamage+"\n  >체력:"+percentage((monhp[mmm][oo]/nth[oo]*100).toFixed(2))

    }
    hp-=monster_information(1,mon[mmm][oo])[2]
      if(hp<=0){  
        hp = 0
        prr[1]= o[oo]+"(이)가 당신을 죽였습니다!\n  >데미지:"+(monster_information(1,mon[mmm][oo])[2])+"\n  >체력:"+percentage(((hp/maxhp)*100).toFixed(2))
        Dhp.set(Author, hp)
    }
            else { prr[1]= o[oo]+"(이)가 당신을 때렸습니다!\n  >데미지:"+(monster_information(1,mon[mmm][oo])[2])+"\n  >체력:"+percentage(((hp/maxhp)*100).toFixed(2))
            Dhp.set(Author, hp)  
          }
            //}
    //else{
    //  return "이미 죽어있는 몬스터 입니다"
    //}
      return prr
    }
    else{
      opi=1
      return "이미 죽어있는 몬스터 입니다"
    }
    }
    else{
      return "이미 싸우는 중입니다"
    }
  } 
  if(msg=="ms") return pos
  if(msg=="mi") return (mappr(Dungeonmap.get(Author),pos, Author))
  if(msg=="mp") {
    if(Dungeonmap.get(Author) != undefined){
    monhp = DungeonMonHp.get(Author)
    monster = DungeonMonster.get(Author)
    ml = map.length
    pr=""
    for(m=0;m<ml;m++){
        if(map[m][0]==pos[0] && map[m][1]==pos[1]){
        a=1
        mmm=m
      }
    }
    
    ntn=numtoname(monster[mmm])
    nth=numtohp(monster[mmm])
    pr="   ["+(mmm+1)+"번 방의 정보]\n\n----------------------------\n    몬스터\n"
    for(p=0;p<5;p++){
      //return monhp[mmm][p]+"\n"+nth[p]
      pr+="\n  "+(p+1)+"> "+ntn[p]
      if(ntn[p].length==2) pr+="    "
      if(monhp[mmm][p]>0) pr+=percentage(monhp[mmm][p]/nth[p]*100)
      else pr+="죽음"
      
    }
    
    
    pr+="\n\n----------------------------\n        장소\n"
    
    a=0
    for(m=0;m<ml;m++){
        if(map[m][0]+1==pos[0] && map[m][1]==pos[1]){
        a=1
        mmm=m+1
      }
    }
    if(a) pr+="       위> "+mmm+"번방"
    else  pr+="       위> X"
    pr+="\n"
    
    
    a=0
    for(m=0;m<ml;m++){
        if(map[m][0]-1==pos[0] && map[m][1]==pos[1]){
        a=1
        mmm=m+1
      }
    }
    if(a) pr+="    아래> "+mmm+"번방"
    else  pr+="    아래> X"
    pr+="\n"
    
    
    a=0
    for(m=0;m<ml;m++){
        if(map[m][0]==pos[0] && map[m][1]+1==pos[1]){
        a=1
        mmm=m+1
      }
    }
    if(a) pr+="    왼쪽> "+mmm+"번방"
    else  pr+="    왼쪽> X"
    pr+="\n"
    
    
    a=0
    for(m=0;m<ml;m++){
        if(map[m][0]==pos[0] && map[m][1]-1==pos[1]){
        a=1
        mmm=m+1
      }
    }
    if(a) pr+="오른쪽> "+mmm+"번방"
    else  pr+="오른쪽> X"
    
    
    return pr
  }
  else{
    return(".d mi를 통해 맵을 먼저 생성하셔야 합니다.")
  }
}
  if(msg=="w"){
    a=0
    ml=map.length
    for(m=0;m<ml;m++){
        if(map[m][0]==pos[0]-1 && map[m][1]==pos[1]){
        a=1
        mmm=m
      }
    }
    if(a){
      pos[0]--
      return ("앞으로 갔습니다\n"+mappr(map, pos, Author))
    }
    else{
      return ("앞에 아무것도 없습니다")
    }
  }
  if(msg=="a"){
    a=0
    ml=map.length
    for(m=0;m<ml;m++){
        if(map[m][0]==pos[0] && map[m][1]==pos[1]-1){
        a=1
        mmm=m
      }
    }
    if(a){
      pos[1]--
      return ("왼쪽으로 갔습니다\n"+mappr(map, pos, Author))
    }
    else{
      return ("왼쪽에 아무것도 없습니다")
    }
  }
  if(msg=="s"){
    a=0
    ml=map.length
    for(m=0;m<ml;m++){
        if(map[m][0]==pos[0]+1 && map[m][1]==pos[1]){
        a=1
        mmm=m
      }
    }
    if(a){
      pos[0]++
      return ("아래로 갔습니다\n"+mappr(map, pos, Author))
    }
    else{
      return ("아래에 아무것도 없습니다")
    }
  }
  if(msg=="d"){
    a=0
    ml=map.length
    for(m=0;m<ml;m++){
        if(map[m][0]==pos[0] && map[m][1]==pos[1]+1){
        a=1
        mmm=m
      }
    }
    if(a){
      pos[1]++
      return ("오른쪽으로 갔습니다\n"+mappr(map, pos, Author))
    }
    else{
      return ("오른쪽에 아무것도 없습니다")
    }
  }
  return 0
 }
function mapinformation(){
  j=0
  for(i=0;i<100;i++){
    if(now[0]==map[0]){
      if(now[1]==map[1]){
        
      }
    }
  }
  return [mon[j]]
}
function inventorydefens(num){
//원래 10000
if(num==7){
  return 15000
  
}

else if(num==17){
  return 20000
}else if(num==19){
  return 17000
}else if(num==20){
  return 20000
}else if(num==21){
  return 25000
}else if(num==22){
  return 35000
}
} 

function inventoryDurability(num){
if(num==1){
  return 500
}else if(num==2){
  return 700
}else if(num==3){
  return 700
}else if(num==4){
  return 700
}else if(num==5){
  return 1500
}else if(num==6){
  return 2000
}else if(num==7){
  return 1000
}

else if(num==9){
  return 700
}else if(num==10){
  return 1000
}else if(num==11){
  return 1500
}else if(num==12){
  return 1000
}

else if(num==13){
  return 800
}else if(num==14){
  return 1500
}else if(num==15){
  return 1500
}else if(num==16){
  return 1000
}

else if(num==17){
  return 1500
}else if(num==18){
  return 1000
}else if(num==19){
  return 1000
}else if(num==20){
  return 1500
}else if(num==21){
  return 2000
}else if(num==22){
  return 2500
}
}
function inventoryinformation(num) {
  msg=Number(num)
  if(msg<=37){

  var pr=""


  pr+="           "+inventorynum(msg)[0]+"           "


  pr+="\n종류:"+inventorynum(msg)[1]
  for(i=0;i<3-inventorynum(msg)[1].length;i++){
    pr+="    "
  }


  pr+="     가격:"+inventorynum(msg)[2]


  if(inventorynum(msg)[3]==0) pr+="\n살수 있음"
  else pr+="\n팔수 있음"


  if(inventorynum(msg)[4]==1) pr+="         만들기 O"
  else pr+="        만들기 X"


  if(inventorynum(msg)[1]=="검" || inventorynum(msg)[1]=="활"){
    if(msg == 7){
      pr+="\n방어력:"+String(inventorydefens(msg))
    }
    pr+="\n데미지:"+String(inventorydamage(msg))
    
  }
  if(inventorynum(msg)[1]=="지팡이"){
    pr+="\n마법력:"+String(inventorymagic(msg))
  }
  if(inventorynum(msg)[1]=="갑옷"){
    if(msg==18){
    pr+="\n마법력:"+String(inventorymagic(msg))
    }
    else{
    pr+="\n방어력:"+String(inventorydefens(msg))
    }
  }

  if(inventorynum(msg)[4]==1){ 
    pr+="\n재료:"
    pr+="\n필요돈:"+inventorymaterial(msg)[0]
    pr+="\n필요 재료:"+inventorynum(inventorymaterial(msg)[1])[0]+"  X "+inventorymaterial(msg)[2]
  }


  return pr

  }
  else{
    return "그 번호의 인벤토리는 없습니다"
  }
}


function percentage(percent){
  sp=20
  j=percent
  pr=""
  for(i=0;i<percent;i+=10){
    if(percent>9.9){
      pr+="█"
      percent-=10
      sp-=3
      }
  }


  if(percent>9){
    pr+="▉"
    sp-=3
  }else if(percent>8){
    pr+="▊"
    sp-=3
  }else if(percent>6){
    pr+="▋"
    sp-=3
  }else if(percent>5){
    pr+="▌"
    sp-=3
  }else if(percent>3){
    pr+="▍"
    sp-=3
  }else if(percent>2){
    pr+="▎"
    sp-=3
  }else if(percent>1){
    pr+="▏"
    sp-=3
  }
  for(i=0;i<sp;i++){
    pr+=" "
  }
  return pr+j+"%"
}
function workerexp(lev){
  if(lev<10){
    return 150
  }else if(lev<15){
    return 200
  }else if(lev<20){
    return 300
  }else if(lev<25){
    return 500
  }else if(lev<30){
    return 800
  }else if(lev<35){
    return 1000
  }else if(lev<40){
    return 1500
  }else{
    return 2000
  }
}

function levelexp(lev){
  if(lev<10){
    return 500
  }else if(lev<15){
    return 600
  }else if(lev<20){
    return 900
  }else if(lev<25){
    return 1500
  }else if(lev<30){
    return 2500
  }else if(lev<35){
    return 4000
  }else if(lev<40){
    return 6500
  }else{
    return 10000
  }
}

  client.on('message', msg => {
    
  if(accountCreated.get(msg.author) != true){
    moneymap.set(msg.author, 0)
    percentmap.set(msg.author, 1)
    accountCreated.set(msg.author, true)
    earningmap.set(msg.author, 1)
    percentmap.set(msg.author, 1)
    dungeonCreated.set(msg.author, 0)
    Dplayer.set(msg.author, msg.author.username);
    Dexp.set(msg.author, 0);
    Djob.set(msg.author, 1);
    Dlevel.set(msg.author, 4);
    Dmoney.set(msg.author, 10000);
    Dhp.set(msg.author, 1000);
    Dmg.set(msg.author, 200);
    Dmana.set(msg.author, 100);
    Dstat.set(msg.author, 3);
    Defense.set(msg.author, 1000);
    ArmDef.set(msg.author, 0)
    Darmor.set(msg.author, 0)
    Slevel.set(msg.author, 1);
    Sexp.set(msg.author, 0);
    Hlevel.set(msg.author, 1);
    Hexp.set(msg.author, 0);
    Wlevel.set(msg.author, 1);
    Wexp.set(msg.author, 0);
    Alevel.set(msg.author, 1);
    Aexp.set(msg.author, 0);
    Tlevel.set(msg.author, 1);
    Texp.set(msg.author, 0);
    Dinven.set(msg.author, [1, 4, 6, 9, 28, 13, 0, 0, 0, 0]);
    DinvenCount.set(msg.author, [1, 1, 1, 1, 13, 1, 0, 0, 0, 0])
    SThp.set(msg.author, 0);
    STdmg.set(msg.author, 0);
    STmana.set(msg.author, 0);
    Dmana.set(msg.author, 10)
    WaitingForAtack.set(msg.author, false);
    Dequiped.set(msg.author, "미정");
    EquippedSword.set(msg.author, 0);
    dungeonCreated.set(msg.author, 1);
    materialReady.set(msg.author, false)
    Dungeonmap.set(maprandom(5, msg.author))
    console.log(msg.author.id)
      var inven = "'"
    var invenC = "'"
    for(i = 0;i < Dinven.get(msg.author).length;i++){
      inven += Dinven.get(msg.author)[i]+"/"
      invenC += DinvenCount.get(msg.author)[i]+"/"
    }
    inven += "'"
    invenC += "'"
    testQuery = "INSERT INTO `member` (`id`, `money`, `earning`, `percent`, `inventory`, `inventCount`, `name`) VALUES (" + String(msg.author.id) + ", 0, 1, 1, "+String(inven)+", "+ String(invenC)+", '"+String(Dplayer.get(msg.author))+"');";
    
  connection.query(testQuery, function (err, results, fields) { // testQuery 실행
      if (err) {
          console.log(err);
      }
      console.log(results);
});
  }
  if(msg.content.startsWith("clear ")){
    var listnum = msg.content.split(" ")
    var clear = listnum[1]
    if(clear + 1 < 30 && clear + 1 > 1 && typeof(clear) != undefin)
    msg.channel.bulkDelete(Number(clear + 1))
  }
  if(msg.content.startsWith(".d eq ")){
    var pr = Number(msg.content.substring(6));
    if(typeof(pr) == "number" && pr >= 1 && pr <= 16){
      console.log(inventoryinformation(pr))
      msg.channel.send(inventorynum(pr)[0] + "를 착용했습니다.")
      Dequiped.set(msg.author, pr)
      }
  }
  if(msg.content == ".d am"){
    if(Darmor.get(msg.author) >= 17 && Darmor.get(msg.author) <= 22){
      if(Darmor.get(msg.author) == 17){
      var ArmorStatus = "체력의 갑옷"
      }
      if(Darmor.get(msg.author) == 18){
        var ArmorStatus = "마법사 갑옷"
        }
      if(Darmor.get(msg.author) == 19){
      var ArmorStatus = "귀한 갑옷"
      }
      if(Darmor.get(msg.author) == 20){
        var ArmorStatus = "철제 갑옷"
        }
      if(Darmor.get(msg.author) == 21){
      var ArmorStatus = "다이아 갑옷"
      }
      if(Darmor.get(msg.author) == 22){
        var ArmorStatus = "전설의 갑옷"
        }
    }
    else{
      var ArmorStatus = "착용 안함"
    }
    if(inventorynum(Dequiped.get(msg.author)) == undefined){
      weapon = "착용 안함"
    }
    else{
      weapon = String(inventorynum(Dequiped.get(msg.author))[0])
    }
    const ArmorEmbed = new Discord.MessageEmbed()
    .setTitle("갑옷 착용 명령어")
    .addField("착용 중인 갑옷 ",ArmorStatus, true)
    .addField("착용 중인 무기 : ", weapon)
    .addField(".d am1", "체력의 갑옷을 착용합니다.", true)
    .addField(".d am2", "마법사 갑옷을 착용합니다.", true)
    .addField(".d am3", "귀한 갑옷을 착용합니다.", true)
    .addField(".d am4", "철제 갑옷을 착용합니다.", true)
    .addField(".d am5", "다이아 갑옷을 착용합니다.", true)
    .addField(".d am6", "전설의 갑옷을 착용합니다.", true)
    .setFooter("모든 명령어는 인벤토리에 아이템이 있다는 것을 전제로 합니다.")
    msg.channel.send(ArmorEmbed)
  }
  if(msg.content == ".d am1"){
    if(Dinven.get(msg.author).indexOf(17) >= 0){
    msg.channel.send("체력의 갑옷을 착용했습니다.")
    Darmor.set(msg.author, 17)
    ArmDef.set(inventoryDurability(17))
    }
    else{
      msg.channel.send("당신에 인벤토리에 해당 갑옷은 없습니다!")
    }
  }
  if(msg.content == ".d am2"){
    if(Dinven.get(msg.author).indexOf(18) >= 0){
      msg.channel.send("마법사 갑옷을 착용했습니다.")
      Darmor.set(msg.author, 18)
      ArmDef.set(inventoryDurability(18))
      }
      else{
        msg.channel.send("당신에 인벤토리에 해당 갑옷은 없습니다!")
      }
  }
  if(msg.content == ".d am3"){
    if(Dinven.get(msg.author).indexOf(19) >= 0){
      msg.channel.send("귀한 갑옷을 착용했습니다.")
      Darmor.set(msg.author, 19)
      ArmDef.set(inventoryDurability(19))
      }
      else{
        msg.channel.send("당신에 인벤토리에 해당 갑옷은 없습니다!")
      }
  }
  if(msg.content == ".d am4"){
    if(Dinven.get(msg.author).indexOf(20) >= 0){
      msg.channel.send("철제의 갑옷을 착용했습니다.")
      Darmor.set(msg.author, 20)
      ArmDef.set(inventoryDurability(20))
      console.log(ArmDef.get(msg.author))
      }
      else{
        msg.channel.send("당신에 인벤토리에 해당 갑옷은 없습니다!")
      }
  }
  if(msg.content == ".d am5"){
    if(Dinven.get(msg.author).indexOf(21) >= 0){
      msg.channel.send("다이아 갑옷을 착용했습니다.")
      Darmor.set(msg.author, 21)
      ArmDef.set(inventoryDurability(21))
      }
      else{
        msg.channel.send("당신에 인벤토리에 해당 갑옷은 없습니다!")
      }
  }
  if(msg.content == ".d am6"){
    if(Dinven.get(msg.author).indexOf(22) >= 0){
      msg.channel.send("전설의 갑옷을 착용했습니다.")
      Dinven.get(msg.author)  
      Darmor.set(msg.author, 22)
      ArmDef.set(inventoryDurability(22))
      }
      else{
        msg.channel.send("당신에 인벤토리에 해당 갑옷은 없습니다!")
      }
  }
  if(msg.content == ".d inv"){
    RunSqlWithFunction('Select `inventory`, `inventCount` from `member` where id = '+msg.author.id+" order by `inventory` desc, `inventCount` desc",
    function(err, result, field){
    var invenList = "인벤토리 : "
    var invent = result[0].inventory
    var invenTC = result[0].inventCount
    var inventory = invent.split("/")
    var inventoryCount = invenTC.split("/")
    console.log(inventory)
    for(var i = 0;i<= inventory.length - 1;i++){
      if(Number(inventory[i]) != 0 && typeof(inventory) != "undefined"){
        invenList += "\n" + String(Number(i+1)+". " + inventorynum(inventory[i])[0] + ", " + inventoryCount[i]+ "개")
        
    }
    else{
      invenList += "\n"+ String(Number(i+1)+". "+"비어 있음")
    }}
    msg.channel.send(invenList)
})}
  if(msg.content.startsWith(".d sl ")){
    var content = Number(msg.content.substring(6)) - 1;
    if(Dinven.get(msg.author)[content] != 0 && typeof(Dinven.get(msg.author)[content]) != "undefined"){
      var inventory = Dinven.get(msg.author)
      Dinven.set(msg.author, inventory)
      var money = Dmoney.get(msg.author)
      Dmoney.set(msg.author, money + (inventorynum(content))[2])
      msg.channel.send(inventorynum(Dinven.get(msg.author)[content])[0] + "를 팔았습니다! \n" + inventorynum(content)[2] + "원을 벌었습니다!")
      inventory[content] = 0
    }}
    mm = move_show(msg.content,map,pos, msg.author);
  if (mm != 0) {
    if(at==0){
    for (i = 0; i < opi; i++) {
      msg.channel.send(mm[i]);
    }
    }
    else msg.channel.send(mm)
  }
    
    if(msg.content == ".d mi" || msg.content == ".d mp" || msg.content == ".d ms"){
    var stage=5
    var msgSub = msg.content.substring(3)
    console.log(msgSub)
    
    if(msg.content == ".d mi" || msg.content == ".d ms" || msg.content == ".d mp" ){
    if(Dungeonmap.get(msg.author) != undefined){
    mm=move_show(msgSub,map,pos, msg.author)

      if(mm!=0){
        msg.channel.send(mm + "\n선택하세요 w/a/s/d")
      }
    }}
    else{
      msg.channel.send(".d mi를 통해 맵을 만들고 명령을 실행해 주세요")
    }}
    /*
  else if(msg.content == "w" || msg.content == "s" || msg.content == "a" || msg.content == "d"){
    var stage=5
    var mcontent = msg.content
      mm=move_show(mcontent,Dungeonmap.get(msg.author),pos, msg.author)
      if(mm!=0){
        msg.channel.send(mm+'\n'+mappr(Dungeonmap.get(msg.author),pos, msg.author))
      }
  }
  */
  if(msg.content == ".d h"){
    const help = new Discord.MessageEmbed()
    .setTitle("던전 도움말")
    .addField(".d mi", "던전 맵을 봅니다.", true)
    .addField(".d mp", "플레이어가 있는 방의 상태를 봅니다.", true)
    .addField(".d ms", "현재 좌표를 봅니다.", true)
    .addField("hp", "플레이어의 체력을 봅니다.", true)
    .addField(".d inv", "인벤토리를 봅니다.", true)
    .addField(".d am", "갑옷 창을 봅니다.(미완)", true)
    .addField(".d eq", "무기를 착용합니다.", true)
    .addField(".d s", "플레이어의 정보를 봅니다.", true)
    .addField("atk 몬스터 번호", "몬스터를 때립니다.", true)
    .addField(".d cj", "직업을 바꾸는 메뉴를 엽니다.", true)
    .addField(".d mt", "상점 메뉴를 엽니다.", true)
    .addField(".d c", "재료를 이용해 아이템을 만듭니다.")
    .addField(".d b [잘 작동 안함]", "돈을 이용해 아이템을 삽니다.", true)
    .addField(".d ii 인벤토리 번호", "아이템의 정보를 봅니다.", true)
    .addField(".d skill", "사용 가능한 스킬을 봅니다.", true)
    .setColor(0x98F791)
    .setTimestamp()
    .setFooter("made by. 우돌 엔터", "https://cdn.discordapp.com/attachments/967405173033037834/980276007812612106/--001.jpg")
    .setAuthor("우돌봇", "https://cdn.discordapp.com/attachments/827851635405094916/980274050037325834/download20220506192139.png", "https://discord.com/api/oauth2/authorize?client_id=827773417016524850&permissions=8&scope=bot")
    msg.channel.send(help)
  }
  if(msg.content.startsWith("atk ")){
    mm = move_show(msg.content, map, pos, msg.author)
    msg.channel.send(mm)
  }
  if(msg.content == "hp"){
  
    mm=move_show(msg.content,map,pos, msg.author)
  if(mm!=0){
    if(opi!=2){
      msg.channel.send(mm)
    }
    else{
      msg.channel.send(mm[0])
      msg.channel.send(mm[1])
    }
  }}
  if(msg.content == ".d skill"){
    var playerJob = Djob.get(msg.author)
    var jobprefix = ""
    if(playerJob == 1){
      jobprefix = "버서커"
    }
    else if(playerJob == 2){
      jobprefix = "힐러"
    }
    else if(playerJob == 3){
      jobprefix = "메이지"
    }
    else if(playerJob == 4){
      jobprefix = "아처"
    }
    else if(playerJob == 5){
      jobprefix = "탱커"
    }
    var skills = "["+ jobprefix+ "가 사용 가능한 스킬]"
    for(var i = 1;i <= 5;i++){
      skills += "\n-"+skill(playerJob, i)[1]
      if(Dlevel.get(msg.author) < skill(playerJob, i)[2]){
        skills += " [레벨 부족]"
      }
      else{
        skills += " [사용 가능]"
      }
    }
    msg.channel.send(skills)
  }
  if (msg.content === '우돌') {
    msg.reply('우돌이는 2010년 6월 29일 22시 30분경에 태어났으며 잘 살아 있는 겜돌이 입니다');
  }
  if (msg.content === '쿨냥') {
    msg.reply('쿨냥이는 2010년 2월 18일에 태어났으며 우돌이랑 같이 게임하는 매우 우돌이 유튜브에 도움을 주는 사람입니다');
  }
  
  
  
  
  
  
  
  
  
  
  if(msg.content === "가위" || msg.content === "바위" || msg.content === "보") {
    const human = msg.content;
    const list = ["가위", "바위", "보"];
    const random = Math.floor(Math.random() * 3);
    const bot = list[random]
    let winner = "";
    if(human === bot) {
      winner = "비김";
    }
    else{
      human === "가위"? (winner = bot === "바위" ? "봇" : "인간") : "";
      human === "바위"? (winner = bot === "보" ? "봇" : "인간") : "";
      human === "보"? (winner = bot === "가위" ? "봇" : "인간") : "";
    }
    const result = 
`
사람 : ${human} vs 봇 : ${bot}
${winner === "비김" ? "우리는 비겼다 휴먼" : winner + "의 승리다"}
`
    msg.reply(result);
    
  
  }




  if(msg.content === "^우돌봇"){
    const embed = new Discord.MessageEmbed()
    .setAuthor("우돌봇", "https://lh3.googleusercontent.com/a-/AOh14Gi6sB8832CeJJJNfQiG0vwDfsdmYjr32UICPtZx=s600-k-no-rp-mo")
    .setTitle("우돌봇 프로필")
    .setURL("https://www.youtube.com/channel/UC0tqXa-9l_CHd3ipnNE0jeQ")
    .setColor(0x98F791)
    .setDescription("안녕하세요 우돌봇입니다")
    .setThumbnail("https://lh3.googleusercontent.com/a-/AOh14Gi6sB8832CeJJJNfQiG0vwDfsdmYjr32UICPtZx=s600-k-no-rp-mo")
    .addField("취미", "대답하기", true)
    .addField("생년월일", "2021년 4월 3일", true)
    .addField("제작자", "우돌우돌#2268", true)
    .addField("^우돌봇", "우돌봇 프로필을 봅니다", true)
    .addField("가위 또는 바위 또는 보", "봇과 가위바위보를 합니다", true)
    .addField('-shout "하고 싶은 말"', '모두에게 원하는 메시지를 보냅니다', true)
    .addField("우돌", "우돌이에 대한 정보를 봅니다", true)
    .addField("무한", "무야호", true)
    .addField("쿨냥", "쿨냥이의 정보를 봅니다", true)
    .addField("오른쪽 또는 왼쪽", "봇과 참참참을 합니다", true)
    .addField("초대 우돌봇", "우돌봇 초대 링크를 받습니다.", true)
    .addField("시계", "시간을 봅니다", true)
    .addField("뭐먹지", "음식을 추천합니다", true)
    .addField("우돌봇 날씨", "날씨를 보여줍니다", true)
    .addField("ㄱㄱㄷ ㄱㄱ", "구구단 문제를 냅니다.", true)
    .addField("ㄹㅅㅁㄱ", "랜덤 수학 문제를 냅니다", true)
    .addField("%하픽 {닉네임}", "그 닉네임을 가진 사람의 하이픽셀 정보를 봅니다.", true)
    .addField("%스블 {닉네임}", "그 닉네임을 가진 사람의 스카이블럭 정보를 봅니다.", true)
    .addField("<>{끝말잇기를 진행할 단어}", "끝말잇기를 할 수 있습니다.", true)
    .addField("끝말잇기 리셋 {단어}", "끝말잇기 리셋을 합니다.", true)
    .addField("%청소 {숫자}", "숫자에 들어간 숫자만큼 메시지를 청소합니다.", true)
    .addField("밸게 ㄱ", "밸런스 게임을 합니다", true)
    .addField("파이 = ??", "파이값 을 보여 줍니다.",true)
    .addField("!돈", "돈 관련 게임의 도움말을 보여 줍니다.", true)
    .addField(".d h", "던전 도움말을 봅니다.", true)
    .setTimestamp(new Date())
    msg.channel.send(embed)

  }

  if(msg.content == "!돈"){
    const moneyEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle("돈벌기 게임의 명령어입니다.")  
      .addField(".g", "돈을 법니다.")
      .addField(".s", "보유재산을 봅니다.")
      .addField(".%", "확률표를 봅니다.")
      .addField(".b 1", "한번에 얻는 돈의 양을 늘려 줍니다.")
      .addField(".b 2", "좋은 물건을 얻을 가능성이 높아집니다.")
    msg.channel.send(moneyEmbed);

}
    if(msg.content == ".g"){
      RunSqlWithFunction('Select `percent`,`earning` from `member` where id = '+msg.author.id + " order by `percent` desc limit 1",
      function(err,result, field){
      if(msg.author.id != "682358033937989632"){
      const randomint = Math.floor(Math.random()*1000)
      if(randomint <= 1000){
        prefix = "동전"
        multiple = 1}
        else if(randomint <= 200 + (20 * result[0].percent)){
          prefix = "금"
          multiple = 10}
          else if(randomint <= 50 + (10 * result[0].percent)){
            prefix = "다이아몬드"
            multiple = 500}
            else if(randomint <= 10 + (10 * result[0].percent)){
              prefix = "에메랄드"
              multiple = 5000}
            if(randomint <= 5 + (5 * result[0].percent)){
              prefix = "운석"
            multiple = 10000}}
    else{
    var prefix = "우주의 기운"
    multiple = 1000000 
  }
  msg.channel.send(prefix + "을(를) 발견했습니다! " + result[0].earning * Number(multiple) + "원을 벌었습니다!")
})        
        RunSqlWithFunction('Update `member` set `money` = `money` + `earning` * '+ multiple+' where id = ' + msg.author.id, 
        function(err, results, field){
        })
      }
    if(msg.content == ".s"){
      g_money = 2
      console.log("under 2:"+g_money)
      RunSqlWithFunction('select `money` from `member` where id = "' + String(msg.author.id) + '" order by `money` desc limit 1', 
        function(err, results, fields) {
          g_money = results[0].money 
          msg.channel.send("당신에게는 " + g_money + "원이 있습니다!");
          console.log("in func:"+g_money)
        }
      )
      console.log("g_money after fuc : "+g_money)
      ;
      /* console.log("caller : " + RunSql('select `money` from `member` where id = "' + String(msg.author.id) + '" order by `money` desc limit 1')
      )      
      var havingmoney = RunSql('select `money` from `member` where id = "' + String(msg.author.id) + '" order by `money` desc limit 1')
        msg.channel.send("당신에게는 " + havingmoney + "원이 있습니다!");
      
      
        msg.channel.send("당신에게는 돈이 없습니다!");
      */
      
    }
      if(msg.content == ".b 1"){
        var money
                
        RunSqlWithFunction('select `money` from `member` where id = "' + String(msg.author.id) + '"and `money` >= `earning` * 1000 order by `money` desc limit 1', 
        function(err, results, fields) {er
          console.log(results[0].money)

          if(Number(results[0].money) > 0){
            console.log(Number(results[0].money) > 0)
            RunSqlWithFunction('Update `member` set `earning` = `earning` + 1 where id = ' + msg.author.id, 
        function(err, results, fields) {} 
         
        )
        earning = Number(earningmap.get(msg.author))
        lastmoney = moneymap.get(msg.author)
        moneymap.set(msg.author, lastmoney - 1000 * earningmap.get(msg.author))
        earningmap.set(msg.author, earning + 1)
          RunSqlWithFunction('Update `member` set `money` = `money` - (1000 * `earning`) where id = ' + msg.author.id, 
            function(err, results, fields) {
              console.log(results);
            
            }
          );
          msg.channel.send("한번에 얻는 돈의 양이 많아졌다!")
        }
      else{
        msg.channel.send("돈이 부족합니다.")
      }
      })
        
        }
        
        if(msg.content == ".b 2"){
          RunSqlWithFunction('select `money` from `member` where id = "' + String(msg.author.id) + '"and `money` >= `percent` * 1000 order by `money` desc limit 1', 
        function(err, results, fields) {
          console.log(results[0].money)

          if(Number(results[0].money) > 0){
            console.log(Number(results[0].money) > 0)
            RunSqlWithFunction('Update `member` set `percent` = `percent` + 1 where id = ' + msg.author.id, 
        function(err, results, fields) {} 
         
        )
        earning = Number(earningmap.get(msg.author))
        lastmoney = moneymap.get(msg.author)
        moneymap.set(msg.author, lastmoney - 1000 * earningmap.get(msg.author))
        earningmap.set(msg.author, earning + 1)
          RunSqlWithFunction('Update `member` set `money` = `money` - (1000 * percent) where id = ' + msg.author.id, 
            function(err, results, fields) {
              console.log(results);
            
            }
          );
          msg.channel.send("좋은 아이템을 얻을 확률이 늘어났다!")
        }
      else{
        msg.channel.send("돈이 부족합니다.")
      }
    })}
      if(msg.content == ".%"){
        RunSqlWithFunction('Select `percent` from `member` where id = '+msg.author.id,function(err, result, field){
        console.log(result)
          percentembed = new MessageEmbed()
          .setTitle(msg.author.username + "의 확률표")
          .addField("동전 확률", String(100 - ((20 + 5 + 1 + 0.5) + 4.5 * result[0].percent)) + "%")
          .addField("금 확률", String(20 + (2 * result[0].percent)) + "%")
          .addField("다이아몬드 확률", String(5 + (1 * result[0].percent)) + "%")
          .addField("에메랄드 확률", String(1 + (1 * result[0].percent)) + "%")
          .addField("운석 확률", String(0.5 + (0.5 * result[0].percent)) + "%")
        msg.channel.send(percentembed);
        })}
//

  if(msg.content == ".d s"){
    //1-S 2-H 3-W 4-A 5-T
    if(Djob.get(msg.author) == 1){
      var job = "버서커"
    }
    else if(Djob.get(msg.author) == 2){
      var job = "힐러"
    }
    else if(Djob.get(msg.author) == 3){
      var job = "메이지"
    }
    else if(Djob.get(msg.author) == 4){
      var job = "아처"
    }
    else if(Djob.get(msg.author) == 5){
      var job = "탱커"
    }
    else{
      var job = "미정"
    }
    const DstatEmbed = new Discord.MessageEmbed()
    .setTitle(Dplayer.get(msg.author) + "님의 스텟")
    .addField("현재 직업", job)
    .addField("레벨", Dlevel.get(msg.author), true)
    .addField("체력", Dhp.get(msg.author), true)
    .addField("돈", Dmoney.get(msg.author), true)
    .addField("데미지", Dmg.get(msg.author), true)
    .addField("마나", Dmana.get(msg.author), true)
    .addField("방어력", ArmDef.get(msg.author) + Defense.get(msg.author), true)
    .addField("버서커 : " + Slevel.get(msg.author)+ "레벨", percentage((Sexp.get(msg.author) / workerexp(Slevel.get(msg.author)) * 100).toFixed(2)))
    .addField("힐러 : " + Hlevel.get(msg.author)+ "레벨", percentage((Hexp.get(msg.author) / workerexp(Hlevel.get(msg.author)) * 100).toFixed(2)))
    .addField("메이지 : " + Wlevel.get(msg.author)+ "레벨",percentage((Wexp.get(msg.author) / workerexp(Wlevel.get(msg.author)) * 100).toFixed(2)))
    .addField("아처 : " + Alevel.get(msg.author)+ "레벨",percentage((Aexp.get(msg.author) / workerexp(Alevel.get(msg.author)) * 100).toFixed(2)))
    .addField("탱커 : " + Tlevel.get(msg.author)+ "레벨",percentage((Texp.get(msg.author) / workerexp(Tlevel.get(msg.author)) * 100).toFixed(2)))
    .addField("Tip. 만약 직업이 미정이라면", ".d c로 직업 변경 도움말을 확인해 보세요!")
    msg.channel.send(DstatEmbed)
    console.log(((Sexp.get(msg.author)+", "+ workerexp(Slevel.get(msg.author)))))
  }
  if(msg.content == ".d st"){
    const Statembed = new Discord.MessageEmbed()
    .setTitle(msg.author.username + "님의 던전 스텟")
    .addField("체력", SThp.get(msg.author))
    .addField("근력", STdmg.get(msg.author))
    .addField("마법", STmana.get(msg.author))
    msg.channel.send(Statembed);
  }
  if(msg.content == ".d sk"){
    const skEmbed = new Discord.MessageEmbed()
    .setTitle("배부할 스텟을 선택해 주세요.")
    .addField(".d s1", "체력")
    .addField(".d s2", "근력")
    .addField(".d s3", "마법")    
    msg.channel.send(skEmbed)
  }
  ad=msg.content

  a=ad.split(" ")
  if(a[0]==".d" && a[1]=="ii"){
    msg.channel.send(inventoryinformation(a[2]))
  }
    
  if(msg.content == "연결 끊기"){
    connection.end()
  }
  if(msg.content == ".d s1"){
    var stat = Dstat.get(msg.author);
    if(stat > 0){
      var DhpSt = SThp.get(msg.author)
      msg.channel.send("체력 스탯이 1 올랐습니다!")
      Dstat.set(msg.author, stat - 1);
      SThp.set(msg.author, DhpSt + 1);
    }
    else{
      msg.channel.send("포인트가 부족합니다.")
    }
  }
  else if(msg.content == ".d s2"){
    var stat = Dstat.get(msg.author);
    if(stat > 0){
      var DdmgSt = STdmg.get(msg.author)
      msg.channel.send("근력 스탯이 1 올랐습니다!")
      Dstat.set(msg.author, stat - 1);
      STdmg.set(msg.author, DdmgSt + 1);
    }
    else{
      msg.channel.send("포인트가 부족합니다.")
    }
  }
  else if(msg.content == ".d s3"){
    var stat = Dstat.get(msg.author);
    if(stat > 0){
      var DmanaSt = SThp.get(msg.author)
      msg.channel.send("마법 스탯이 1 올랐습니다!")
      Dstat.set(msg.author, stat - 1);
      STmana.set(msg.author, DmanaSt + 1);
    }
    else{
      msg.channel.send("포인트가 부족합니다.")
    }
  }
  if(msg.content.includes(" ")){
    Splitmsg = msg.content.split(" ")
    var Skill = skill(Djob.get(msg.author),Splitmsg[1])
    if(Skill != undefined){
      
    }
  }
  if(msg.content == ".d cj"){
    msg.channel.send(".d cb -> 버서커로 직업 변경\n.d ch -> 힐러로 직업 변경\n.d cw -> 메이지로 직업 변경\n.d ca -> 아처로 직업 변경\n.d ct -> 탱커로 직업 변경")
  }
  if(msg.content == ".d mt"){
    const StoreEmbed = new Discord.MessageEmbed()
    .setTitle("무기상점")
    .setColor("#73F2F0")
    .setDescription("상점 도움말입니다.")
    .addField(".d cmt", "전투 상점입니다.")
    .addField(".d imt", "아이템 상점입니다.")
    msg.channel.send(StoreEmbed);
  }
  if(msg.content == ".d cmt"){
    const CombatStoreEmbed1 = new Discord.MessageEmbed()
    .setTitle("전투상점   «0-1»")
    .setDescription("전투 관련 상점입니다.")
    .addField("(1) "+inventorynum(1)[0], "가격 : " + (inventorynum(1))[2] + "\n재료 : 필요 없음", true)
    .addField("(2) "+inventorynum(2)[0], "가격 : " + (inventorynum(2))[2] + "\n재료 : 필요 없음", true)
    .addField("(3) "+inventorynum(3)[0], "가격 : " + (inventorymaterial(3))[0]+"\n" + "재료 : " + inventorynum((inventorymaterial(3))[1])[0] + " x "+(inventorymaterial(3))[2],true)
    .addField("(4) "+inventorynum(4)[0], "가격 : " + (inventorymaterial(4))[0]+"\n" + "재료 : " + inventorynum((inventorymaterial(4))[1])[0] + " x "+(inventorymaterial(4))[2],true)
    .addField("(5) "+inventorynum(5)[0], "가격 : " + (inventorymaterial(5))[0]+"\n" + "재료 : " + inventorynum((inventorymaterial(5))[1])[0] + " x "+(inventorymaterial(5))[2],true)
    .addField("(6) "+inventorynum(6)[0], "가격 : " + (inventorymaterial(6))[0]+"\n" + "재료 : " + inventorynum((inventorymaterial(6))[1])[0] + " x "+(inventorymaterial(6))[2], true)
    .addField("(10) "+inventorynum(10)[0], "가격 : " + (inventorymaterial(10))[0]+"\n" + "재료 : " + inventorynum((inventorymaterial(10))[1])[0] + " x "+(inventorymaterial(10))[2],true)
    .addField("(11) "+inventorynum(11)[0], "가격 : " + (inventorymaterial(11))[0]+"\n" + "재료 : " + inventorynum((inventorymaterial(11))[1])[0] + " x "+(inventorymaterial(11))[2],true)
    .addField("(13) "+inventorynum(13)[0], "가격 : " + (inventorynum(1))[2] + "\n재료 : 필요 없음", true)
    .addField("(14) "+inventorynum(14)[0], "가격 : " + (inventorymaterial(14))[0]+"\n" + "재료 : " + inventorynum((inventorymaterial(14))[1])[0] + " x "+(inventorymaterial(14))[2], true)
    .addField("(15) "+inventorynum(15)[0], "가격 : " + (inventorymaterial(15))[0]+"\n" + "재료 : " + inventorynum((inventorymaterial(15))[1])[0] + " x "+(inventorymaterial(15))[2], true)
    .addField("(16) "+inventorynum(16)[0], "가격 : " + (inventorynum(16))[2] + "\n재료 : 필요 없음", true)
    .addField("(17) "+inventorynum(17)[0], "가격 : " + (inventorynum(17))[2] + "\n재료 : 필요 없음", true)
    .addField("(18) "+inventorynum(18)[0], "가격 : " + (inventorynum(18))[2] + "\n재료 : 필요 없음", true)
    .addField("(20) "+inventorynum(20)[0], "가격 : " + (inventorymaterial(20))[0]+"\n" + "재료 : " + inventorynum((inventorymaterial(20))[1])[0] + " x "+(inventorymaterial(20))[2],true)
    .addField("(21) "+inventorynum(21)[0], "가격 : " + (inventorymaterial(21))[0]+"\n" + "재료 : " + inventorynum((inventorymaterial(21))[1])[0] + " x "+(inventorymaterial(21))[2],true)
    .addField("(22) "+inventorynum(22)[0], "가격 : " + (inventorymaterial(22))[0]+"\n" + "재료 : " + inventorynum((inventorymaterial(22))[1])[0] + " x "+(inventorymaterial(22))[2],true)
    msg.channel.send(CombatStoreEmbed1)
  }
  if(msg.content == ".d imt"){
    const StoreEmbed2 = new Discord.MessageEmbed()
    .setTitle("전투상점   «1-1»")
    .setDescription("포션 상점입니다.")
    .addField("(23) "+inventorynum(23)[0],"가격 : "+inventorynum(23)[2],true)
    .addField("(24) "+inventorynum(24)[0],"가격 : "+inventorynum(24)[2],true)
    .addField("(25) "+inventorynum(25)[0],"가격 : "+inventorynum(25)[2],true)
    msg.channel.send(StoreEmbed2)
  }
  if(msg.content.startsWith(".d c ")){
    var inventory = Dinven.get(msg.author)
    var marketmsg = msg.content.split(" ")
    var invenCount = DinvenCount.get(msg.author)
    if(inventorynum(Number(marketmsg[2]))[3] == 0){
    if(Number(marketmsg[2]) >= 1 && Number(marketmsg[2]) <= 37 && inventorynum(marketmsg[2])[4] == 1){
      console.log(inventoryFind(inventorymaterial(marketmsg[2])[1], inventory))
      console.log(inventorymaterial(marketmsg[2])[1])
      console.log(inventorymaterial(marketmsg[2]))
      console.log("inventoryFind : "+inventoryFind(inventorymaterial(marketmsg[2])[1], inventory))
      if(inventoryFind(inventorymaterial(marketmsg[2])[1], inventory) != "false"){
        var materialIndex = inventoryFind(inventorymaterial(marketmsg[2])[1], inventory)
        var pastCount = invenCount[materialIndex]
        RunSqlWithFunction('Select inventCount from member where id = '+msg.author.id, function(err, result, field){
        var invenC = result[0].inventCount
        var invenCount = invenC.split("/")
        if(Number(invenCount[materialIndex]) - inventorymaterial(marketmsg[2])[2] >= 0){
          invenCount[materialIndex] -= inventorymaterial(marketmsg[2])[2]
          console.log("invenCount : "+invenCount)
          DinvenCount.set(msg.author, invenCount)
          console.log("DinvenCOunt : "+DinvenCount.get(msg.author))
          materialReady.set(msg.author, true)
        }
        else{
          msg.channel.send("재료가 부족한 것 같네요.")
        }})
   }
      }
      if(materialReady.get(msg.author) == true){
        
        RunSqlWithFunction('Select `inventory`, `inventCount` from `member` where id = '+msg.author.id+" order by `inventory` desc, `inventCount` desc",
        function(err, result, field){
        var Currentmoney = Dmoney.get(msg.author)
    if(Currentmoney - inventorynum(marketmsg[2])[2] >= 0){
        Dmoney.set(msg.author, Currentmoney - inventorymaterial(marketmsg[2])[0])
        
        if(inventoryFind(marketmsg[2], inventory) == "false"){
        DinvenIndex = inventory.indexOf(0)
        }
        else{
          DinvenIndex = inventoryFind(marketmsg[2], inventory)
        }
        
    var invent = result[0].inventory
    var invenTC = result[0].inventCount
    var Dinventory = invent.split("/")
    var invenCo = invenTC.split("/")
    Dinventory[DinvenIndex] = Number(marketmsg[2])
    Dinven.set(msg.author, inventory)
    var invenCount = invenCo
    var itemCount = Number(invenCount[DinvenIndex])
    invenCount[DinvenIndex] = itemCount + 1
    DinvenCount.set(msg.author, invenCount)
    var invenC = "'"
    var inven = "'"
    for(i = 0;i < DinvenCount.get(msg.author).length;i++){
      invenC += invenCo[i]+"/"
      inven += Dinventory[i]+"/"
    }
    invenC += "'"
    inven += "'" 
    console.log("invenC : "+invenC)
    RunSqlWithFunction("Update `member` set `inventCount` = " + invenC+ ", inventory = "+ inven +" where id = "+msg.author.id, function(err, result, fields){})
    msg.channel.send(inventorynum(marketmsg[2])[0] + "를 만들었습니다! " + Dmoney.get(msg.author) + "원 남았습니다!")
    }
    else{
      msg.channel.send("돈이 부족합니다.")
     }})}}}
  
  if(msg.content.startsWith(".d b ")){
    var inventory = Dinven.get(msg.author)
    var marketmsg = msg.content.split(" ")
    var invenCount = DinvenCount.get(msg.author)
    if(inventorynum(Number(marketmsg[2]))[3] == 0 && Number(marketmsg[2]) >= 1 && Number(marketmsg[2]) <= 37){
      materialReady.set(msg.author, true)
    }
    if(materialReady.get(msg.author) == true){
    RunSqlWithFunction('Select inventory, inventCount from member where id = '+msg.author.id,function(err, result, field){
      invento = result[0].inventory
      invenCo = result[0].inventCount
      var Currentmoney = Dmoney.get(msg.author)
    if(Currentmoney - inventorynum(marketmsg[2])[2] >= 0){
    Dmoney.set(msg.author, Currentmoney - inventorynum(marketmsg[2])[2])
    var inventory = result[0].inventory
      if(inventoryFind(marketmsg[2], inventory) == "false"){
      DinvenIndex = inventory.indexOf(0)
      }
      else{
        DinvenIndex = inventoryFind(marketmsg[2], inventory)
      }
      inventory[DinvenIndex] = Number(marketmsg[2])
      Dinven.set(msg.author, inventory)
      var invenCount = result[0].inventCount
      var itemCount = invenCount[DinvenIndex]
      invenCount[DinvenIndex] = itemCount + 1
      //DinvenCount.set(msg.author, invenCount)
      var invenC
      for(i = 0;i < DinvenCount.get(msg.author).length;i++){
        invenC += invenCo[i]+"/"
        inven += invento[i]+"/"
      }
      invenC += "'"
      inven += "'" 
      console.log("invenC : "+invenC)
      RunSqlWithFunction("Update `member` set `inventCount` = " + invenC+ ", inventory = "+ inven +" where id = "+msg.author.id, function(err, result, fields){})
      msg.channel.send(inventorynum(marketmsg[2])[0] + "를 샀습니다! " + Dmoney.get(msg.author) + "원 남았습니다!")
    }
    else{
      msg.channel.send("돈이 부족합니다.")
    }})
  }
 
    }
    if(msg.content == ".d dmg"){
      msg.channel.send("Salmon Sushi : "+damage)
    }
  if(msg.content == ".d cb"){
    msg.channel.send("직업을 버서커로 바꿨습니다.")
    hp = Dhp.get(msg.author)
    damg = Dmg.get(msg.author)
    Dhp.set(msg.author, hp * 1.5)
    Dmg.set(msg.author, damg * 1.5)
    Djob.set(msg.author, 1)
  }
  else if(msg.content == ".d ch"){
    msg.channel.send("직업을 힐러로 바꿨습니다.")
    hp = Dhp.get(msg.author)
    damg = Dmg.get(msg.author)
    Djob.set(msg.author, 2)
  }
  else if(msg.content == ".d cm"){
    msg.channel.send("직업을 메이지로 바꿨습니다.")
    hp = Dhp.get(msg.author)
    damg = Dmg.get(msg.author)
    mana = Dmana.get(msg.author)
    Dmana.set(msg.author, mana*2)
    Djob.set(msg.author, 3)
  }
  else if(msg.content == ".d ca"){
    msg.channel.send("직업을 아처로 바꿨습니다.")
    hp = Dhp.get(msg.author)
    damg = Dmg.get(msg.author)
    Dhp.set(msg.author, hp*0.7)
    Dmg.set(msg.author, damg*1.7)
    Djob.set(msg.author, 4)
  }
  else if(msg.content == ".d ct"){
    msg.channel.send("직업을 탱커로 바꿨습니다.")
    hp = Dhp.get(msg.author)
    damg = Dmg.get(msg.author)
    Dhp.set(msg.author, hp*2)
    Djob.set(msg.author, 5)
  }
  /*
  if(msg.content == ".d sd"){
    msg.channel.send(mappr(maprandom()))
  }
  */
  if (msg.content === '제작자') {
    msg.reply('https://discord.gg/pcsMCJBj3S에서 제작자를 만나보세요!');
  }
  if(msg.content.startsWith("랜덤")){
    const random = Math.floor(Math.random() * 2);
    List = ["턴제", "쿨타임"]
    msg.channel.send(List[random])
  }
    
    if(msg.content.startsWith('-shout')){
      const strShout = msg.content.substring(6);
      msg.channel.send(strShout)


    };
 
    if (msg.content === ('뭐먹지')){
      const eatlist = ['떡볶이', "계란말이", '라면', "부대찌개", '생선구이', "소고기", '돼지고기 볶음', "치킨"]; 
      const random1 = Math.floor(Math.random() * 8);
      const eatresult = eatlist[random1];
      msg.reply(eatresult);
    }
    if(msg.content === "오른쪽" || msg.content === "왼쪽"){
      const humancham = msg.content;
      const chamlist = ["오른쪽", "왼쪽"];
      const random2 = Math.floor(Math.random() * 2);
      const botcham = chamlist[random2];
      let chamwinner = "";
      if (humancham === botcham){
        chamwinner = "봇";
      }
      else{

        chamwinner = "인간"

      }
      const chamresult = 
      `
      사람 : ${humancham} vs 봇 : ${botcham}
      ${chamwinner === "봇" ? "내가 이겼다 휴먼" : chamwinner + "의 승리다"}
      `
          msg.reply(chamresult);
      
      }

    
    if(msg.content === "시계"){
      const embed2 = new Discord.MessageEmbed()
      .setTitle("시계")
      .setTimestamp(new Date())
      msg.channel.send(embed2)
    }

    if(msg.content === "구독"){
      console.log(msg.author)


    }
      if(msg.content === "초대 우돌봇"){
        msg.reply("우돌봇 초대 코드 : https://discord.com/api/oauth2/authorize?client_id=827773417016524850&permissions=3490314486&scope=bot")
      

      }
      if(msg.content === "우돌봇 날씨"){
        msg.reply("웹에서 쿠키 가져오는 중...")
        msg.reply("완료!")
        msg.reply("weather.com에서 날씨 정보 가져오는 중...")
        msg.reply("완료!")
        msg.reply("처리 중...")
        msg.reply("완료!")
        msg.reply("현재 비가 올 확률은 W%입니다! (단, W는 0보다 크고 100보다 작습니다.")
      }
      if(msg.content === "rw"){
        msg.reply("https://www.weather.com")
      }
      if(msg.content === "우돌봇 구구단"){
        const n1 = Math.floor(Math.random() * 9);
        const n2 = Math.floor(Math.random() * 9);
        msg.reply(n1 + " x " + n2)
        msg.reply("= ?")
        msg.reply("정답을 입력하기 전에 &을 적어주세요. EX : &32, &81")
          
          
        

        questionmap.set(msg.author, n1 * n2)
        
      }
    
        if(msg.content.startsWith("&")){
        const playermessage = msg.content
        const playerresult = playermessage.substring(1)
        const playermessageresult = Number(playerresult)
          if(playermessageresult === questionmap.get(msg.author)){
          msg.reply("정답입니다!")

        }
        else{
          msg.reply("틀렸습니다!")
      }
      
        } 
        if(msg.content === "ㄹㅅㅁㄱ"){ //랜덤 수학 문제 ㄱㄱ
          const xpmd = [" * ", " / ", " + ", " - "]
          const rn1 = Math.floor(Math.random() * 99);
          const rn2 = Math.floor(Math.random() * 99);
          const rindex = Math.floor(Math.random() * 3)
          if(rindex === 0){
            msg.reply(rn1 + " X " + rn2)
            msg.reply("= ? ")
            msg.reply("정답을 입력하기 전에 #를 입력해 주세요! EX : #77, #28")
            rmap.set(msg.author, rn1 * rn2)
          }
            
          if(rindex === 1){
            msg.reply(rn1 + " / " + rn2)
            msg.reply("= ? ")
            msg.reply("정답을 입력하기 전에 #를 입력해 주세요! EX : #77, #28")
            msg.reply("소수점으로 내려갈 가능성이 다수이니 1의 자리로 버림해 주세요")
            rmap.set(msg.author, parseInt(rn1 / rn2))
          }
            
          if(rindex === 2){
            msg.reply(rn1 + " + " + rn2)
            msg.reply("= ? ")
            msg.reply("정답을 입력하기 전에 #를 입력해 주세요! EX : #77, #28")
            rmap.set(msg.author, rn1 + rn2)
          }
            
          if(rindex === 3){
            msg.reply(rn1 + " - " + rn2)
            msg.reply("= ? ")
            msg.reply("정답을 입력하기 전에 #를 입력해 주세요! EX : #77, #28")
            rmap.set(msg.author, rn1 - rn2)
            
          }
            }
            if(msg.content.startsWith("#")){
              const rplayermessage = msg.content
              const rplayerresult = rplayermessage.substring(1)
              
              const rplayermessageresult = Number(rplayerresult)
                if(rplayermessageresult === rmap.get(msg.author)){
                msg.reply("정답입니다!")  
              } 
              else{
                msg.reply("틀렸습니다!")
              }
              }
              if(msg.content.startsWith("%하픽 ")){
                const playernickname = msg.content.substring(4);
                msg.channel.send("https://plancke.io/hypixel/player/stats/" + playernickname)
              }  
              if(msg.content.startsWith("%스블 ")){
                const playerskyblock = msg.content.substring(4)
                msg.channel.send("https://sky.lea.moe/stats/" + playerskyblock)
              }
              if(msg.content.startsWith("%길드 ")){
                const playernickname = msg.content.substring(4);
                msg.channel.send("https://plancke.io/hypixel/guild/player/" + playernickname)
              }
              if(msg.content.startsWith("메모 써 ")){
                memothing = msg.content.substring(5);
                
                memomap.set(msg.author, memothing);
                msg.reply(memothing + " 를 메모에 저장했습니다!") 
                console.log(memomap)
              }
              if(msg.content === "메모 보여줘"){
                msg.reply(memomap.get(msg.author))
              }
              if(msg.content === "메모 삭제"){
                memomap.delete(msg.author)
                msg.reply("메모를 지웠습니다!")
              }
              if(msg.content.startsWith(".a")){
                msg.channel.bulkDelete(1)
                const embed2 = new Discord.MessageEmbed()
                .setAuthor(msg.author.username, "https://lh3.googleusercontent.com/a-/AOh14Gi6sB8832CeJJJNfQiG0vwDfsdmYjr32UICPtZx=s600-k-no-rp-mo")
                .setTitle(msg.content.substring(3))
                .setColor(0x98F791)
                .setDescription("")
                
                
                msg.channel.send(embed2)
            
              }
              if(msg.content.startsWith("<>")){
                const playerggutmalitgui = msg.content.substring(2) //유저가 적은 말을 저장
                const lastggutmalitgui = ggutmalitguimap.get(msg.channel.id) //원래 저장되어 있는 단어를 가져오기
                const playerggutlen = playerggutmalitgui.length - 1 //원래 저장되어 있는 단어의 길이를 가져오기
              if(playerggutmalitgui.length >= 0){
              if(playerggutmalitgui[0] === lastggutmalitgui[playerggutlen]){ 
                if(playerggutlen > 0){
                /*유저가 적은 말의 첫번째 글자가 저장되어 있던 단어의 맨
                마지막 글자와 같다면 
                */
                console.log(playerggutmalitgui) //이 단어를 콘솔에 띄우기
                
                getDictionary(playerggutmalitgui, function(resp) {
                  console.log("resp[value] : " + resp['value']);
                  ggutmalitguimap.set(msg.channel.id, playerggutmalitgui) //저장하기
                  lenggutmalitguimap.set(msg.channel.id, playerggutlen) //단어 길이 저장하기
                  const ggutembed = new Discord.MessageEmbed()
                    .setAuthor(msg.author.username, "https://lh3.googleusercontent.com/a-/AOh14Gi6sB8832CeJJJNfQiG0vwDfsdmYjr32UICPtZx=s600-k-no-rp-mo")
                    .setTitle(playerggutmalitgui)
                    .setDescription("우돌봇은 네이버 사전을 이용하고 있어요!")
                    .addField("뜻", resp['value'])
                    .setColor(0x98F791)
                    .setTimestamp(new Date())
                  console.log(ggutmalitguimap)
                  msg.channel.bulkDelete(1)
                  msg.reply(ggutembed)
                  console.log(msg.content.id)
                  
                  } 
                );
            
                
            }
          }
            else{
              msg.channel.bulkDelete(1)
              msg.channel.send("글자 수가 2글자 이상이 되게 또는 첫 글자가 전 단어의 제일 뒷 자리의 글자와 같게 해 주세요!")
              
            }       
              }

              
            }
            if(msg.content === "파이 = ??"){
              msg.channel.send("3.14159 26535 89793 23846 26433 83279 50288 41971 69399 37510 58209 74944 59230 78164 06286 20899 86280 34825 34211 70679 82148 08651 32823 06647 09384 46095 50582 23172 53594 08128 48111 74502 84102 70193 85211 05559 64462 29489 54930 38196 44288 10975 66593 34461 28475 64823 37867 83165 27120 19091 45648 56692 34603 48610 45432 66482 13393 60726 02491 41273 72458 70066 06315 58817 48815 20920 96282 92540 91715 36436 78925 90360 01133 05305 48820 46652 13841 46951 94151 16094 33057 27036 57595 91953 09218 61173 81932 61179 31051 18548 07446 23799 62749 56735 18857 52724 89122 79381 83011 94912 98336 73362 44065 66430 86021 39494 63952 24737 19070 21798 60943 70277 05392 17176 29317 67523 84674 81846 76694 05132 00056 81271 45263 56082 77857 71342 75778 96091 73637 17872 14684 40901 22495 34301 46549 58537 10507 92279 68925 89235 42019 95611 21290 21960 86403 44181 59813 62977 47713 09960 51870 72113 49999 99837 29780 49951 05973 17328 16096 31859 50244 59455 34690 83026 42522 30825 33446 85035 26193 11881 71010 00313 78387 52886 58753 32083 81420 61717 76691 47303 59825 34904 28755 46873 11595 62863 88235 37875 93751 95778 18577 80532 17122 68066 13001 92787 66111 95909 21642 01989 38095 25720 10654 85863 27886 59361 53381 82796 82303 01952 03530 18529 68995 77362 25994 13891 24972 17752 83479 13151 55748 57242 45415 06959 50829 53311 68617 27855 88907 50983 81754 63746 49393 19255 06040 09277 01671 13900 98488 24012 85836 16035 63707 66010 47101 81942 95559 61989 46767 83744 94482 55379 77472 68471 04047 53464 62080 46684 25906 94912 93313 67702 89891 52104 75216 20569 66024 05803 81501 93511 25338 24300 35587 64024 74964 73263 91419 92726 04269 92279 67823 54781 63600 93417 21641 21992 45863 15030 28618 29745 55706 74983 85054 94588 58692 69956 90927 21079 75093 02955 32116 53449 87202 75596 02364 80665 49911 98818 34797 75356 63698 07426 54252 78625 51818 41757 46728 90977 77279 38000 81647 06001 61452 49192 17321 72147 72350")
            }
            if(msg.content.startsWith("끝말잇기 리셋 ")){
              ggutmalitguimap.set(msg.channel.id, msg.content.substring(8))
              lenggutmalitguimap.set(msg.channel.id, 1)
              msg.channel.bulkDelete(1)
              const resetembed = new Discord.MessageEmbed()
              .setAuthor("끝말잇기 초기화!")
              .setTitle(ggutmalitguimap.get(msg.channel.id
                ))
              .setDescription("로 초기화 되었습니다!")
              .setColor(0x98F791)
              msg.channel.send(resetembed)
              msg.channel.send("https://tenor.com/view/matrix-agent-bulletproof-speed-gif-7432265")
              msg.channel.send("푸헤헤헤 최첨단 리셋술!")
            }
           /* 
          if(msg.content == "통화방"){
            const { voice } = msg.member
            if(!voice.channelID){
              msg.channel.send("통화방에 들어가 주세요!")
            }
            else{
            voice.channel.join().then((connection) => {
              connection.play(path.join(__dirname, 'How Beautiful.m4a'))
            })
          }
        }
        if(msg.content == "통화끝"){
          const { voice } = msg.member
          if(!voice.channelID){
            msg.channel.send("통화방에 있지 않습니다.")
          }
          else{
          voice.channel.leave()
        }}*/
          if(msg.content.startsWith("♪공지 ")){
            const messagegongji = msg.content.substring(4)
            const countlist = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            
            msg.channel.bulkDelete(1)
            for(count in countlist){
              msg.channel.send(count + "번째 반복한다. " + messagegongji)              
            }
          
          }
          if(msg.content === "밸게 ㄱ"){
            
            if(usermap.get(msg.author.username === "")){
              msg.reply("[밸게 ㄱ] 를 입력하여 밸런스 게임을 진행하고 해 주세요!")
            }
            const randombalancegamelist = ["키 커지기vs근육 생기기", "(학교 강당에서 마이크 잡고) 소리지르기vs반야심경 읽기", "위인전에 있는 나vs대통령 자리에 있는 나", "(클럽에서 신나는 음악 틀었을때) 관종같이 춤추기vs무표정으로 가만히 서있기", "돈없는 커플vs돈 많은 모솔", "스프없이 라면먹고 10만원 받기vs스프넣은 라면먹고 10만원 내기", "회사 사장vs1000만 유튜버", "거지랑 뽀뽀하기vs강도랑 뽀뽀하기", "지루한 1시간 비행기타기 vs신나는 20시간 비행기타기", "자판기 털기vs사람많은 이마트에서 외국돈으로 계산하기", "평생 청각장애인으로 살기vs평생 이어폰만 끼기", "(군대18개월동안)조교로 일하기vsPX병으로 일하기", "화만 내면서 살기 vs 어떤일을 받든 웃으면서 살기", "바다 vs 산", "돈 vs 친구", "공부 vs 게임", "음식 vs 옷", "에어컨 없는 여름vs난방 없는 겨울", "머리카락 없는 남,여친vs머릿속이 빈 남,여친", "손가락 4개vs손가락 6개","3분에 1만원 버는 메뚜기 유재석 vs 이자 죽을 때까지 못 갚는 토니 스타크", "매일 3안타는 치는 유민상 vs 1땅볼도 못하는 박병호"]
            const randomindex = Math.floor(Math.random() * randombalancegamelist.length);
            msg.channel.send(randombalancegamelist[randomindex])
            msg.channel.send("왼 또는 오른 로 대답하여 주세요")
            usermap.set(msg.author.username, "true")
            moonjaemap.set(msg.author.username, randomindex)
            answered.set(msg.author.username, "false")
          }
          if(msg.content === "왼"){
            if(usermap.get(msg.author.username) === ""){
              msg.reply("[밸게 ㄱ] 를 입력하여 밸런스 게임을 진행하고 해 주세요!")
            }
            if(usermap.get(msg.author.username) === "true"){
              msg.reply("그렇군요! ...메모메모... 왼쪽이라고 한다...")
              usermap.set(msg.author.username, "")
              answermap.set(msg.author.username, "왼쪽")
              answered.set(msg.author.username, "true")
              msg.channel.send("[밸게기] 를 입력하여 기록을 보세요!")
            }
          }
          if(msg.content === "오른"){
            if(usermap.get(msg.author.username) === ""){
              msg.reply("[밸게 ㄱ]를 입력하여 밸런스 게임을 진행하고 해 주세요!")
            }
            if(usermap.get(msg.author.username) === "true"){
              msg.reply("그렇군요! ...메모메모... 오른쪽이라고 한다...")
              usermap.set(msg.author.username, "")
              answermap.set(msg.author.username, "오른쪽")
              answered.set(msg.author.username, "true")
              msg.channel.send("[밸게기] 를 입력하여 기록을 보세요!")
            }

          }
          if(msg.content === "밸게기"){
            if(answered.get(msg.author.username) === "false"){
              msg.reply("질문에 답을 하고 해 주세요!")
            }
            if(answered.get(msg.author.username) === "true"){
              
              const randombalancegamelist = ["키 커지기vs근육 생기기", "(학교 강당에서 마이크 잡고) 소리지르기vs반야심경 읽기", "위인전에 있는 나vs대통령 자리에 있는 나", "(클럽에서 신나는 음악 틀었을때) 관종같이 춤추기vs무표정으로 가만히 서있기", "돈없는 커플vs돈 많은 모솔", "스프없이 라면먹고 10만원 받기vs스프넣은 라면먹고 10만원 내기", "회사 사장vs1000만 유튜버", "거지랑 뽀뽀하기vs강도랑 뽀뽀하기", "지루한 1시간 비행기타기 vs신나는 20시간 비행기타기", "자판기 털기vs사람많은 이마트에서 외국돈으로 계산하기", "평생 청각장애인으로 살기vs평생 이어폰만 끼기", "(군대18개월동안)조교로 일하기vsPX병으로 일하기", "화만 내면서 살기 vs 어떤일을 받든 웃으면서 살기", "바다 vs 산", "돈 vs 친구", "공부 vs 게임", "음식 vs 옷", "에어컨 없는 여름vs난방 없는 겨울", "머리카락 없는 남,여친vs머릿속이 빈 남,여친", "손가락 4개vs손가락 6개","3분에 1만원 버는 메뚜기 유재석 vs 이자 죽을 때까지 못 갚는 토니 스타크", "매일 3안타는 치는 유민상 vs 1땅볼도 못하는 박병호", "날아다니는 대신 돈 못 벌기 vs 못 걷지만 초당 10만원"]
              const moonjae = "바로 전 문제는 " + randombalancegamelist[moonjaemap.get(msg.author.username)] + " 이었습니다."
              const resultt = "당신의 대답은 [" + answermap.get(msg.author.username) + "]"
              const balanceembed = new Discord.MessageEmbed()
            
                .setAuthor(msg.author.username, "https://lh3.googleusercontent.com/a-/AOh14Gi6sB8832CeJJJNfQiG0vwDfsdmYjr32UICPtZx=s600-k-no-rp-mo")
                .setTitle(moonjae)
                .addField(resultt, "을(를) 골랐습니다!")
                .setTimestamp(new Date())
                .setColor(0x98F791)
              msg.channel.send(balanceembed)
            }
            
          }
          const packageJSON = require("./package.json");
      }
    )
client.login('ODI3NzczNDE3MDE2NTI0ODUw.GibEMC.qcaTFFZAKuwP68uGt416iV1mhUdFAWH4ipltiQ');