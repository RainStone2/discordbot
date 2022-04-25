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
const fs = require('fs');
const mysql = require('mysql');
const sql = require('./sql.js');
const pool = mysql.createPool({
  connectionLimit : 10,
  prot : 3306,
  host : '127.0.0.1',
  user : 'RainStone2',
  password : 'RainStone2',
  database : 'bot_playerinfo'
});
const { getgid } = require('process');
const { fileURLToPath } = require('url');
//const client = new Discord.Client();
const https = require('https');
const querystring = require('querystring');
const { time } = require('console');
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
const Darmor = new Map();
const SThp = new Map();
const STdmg = new Map();
const STmana = new Map();
const Dstat = new Map();
const Slevel = new Map();
const Sexp = new Map();
const WaitingForAtack = new Map();
const EquippedSword = new Map();
const Dequiped = new Map();

const Hlevel = new Map();
const Hexp = new Map();

const Wlevel = new Map();
const Wexp = new Map();

const Alevel = new Map();
const Aexp = new Map();

const Tlevel = new Map();
const Texp = new Map();

const Shealth = new Map();
const Sdmg = new Map();
const Smana = new Map();

const Dinven = new Map();
function random(small, big) {
  return Math.floor(Math.random() * (big - small)) + small;
}

function inventoryFind(num, UserInven){
  for(var index = 0; index < UserInven.length + 1; index++){
    if(UserInven[index] == num){
      console.log(index)
      return index;
    }
  }

}
function monster_information(num1,num2){

  //이름,체력,데미지,쿨타임,스테이지

  if(num1==1){
    if(num2==1) return ["해골"  ,300,100 ,2  ,1]  //1
    if(num2==2) return ["맷돼지",500,500 ,3  ,1]  //1~2
    if(num2==3) return ["기사"  ,500,300 ,1  ,1]  //1~3
    if(num2==4) return ["고블린",200,30  ,0.3,2]  //2~3
    if(num2==5) return ["트롤"  ,250,30  ,0.2,2]  //2~5
    if(num2==6) return ["마녀"  ,500,300 ,1  ,3]  //3~5
    if(num2==7) return ["슬라임",700,300 ,1.5,4]  //4~5
    if(num2==8) return ["사신"  ,700,1000,10 ,5]  //5
  }
  else{
    if(num2==9) return ["아이스 드래곤"  ,5000  ,700  ,1.5,6]
    if(num2==10) return ["파이어 드래곤"  ,5000  ,1000 ,2  ,6]
    if(num2==11) return ["레전더리 드래곤",7000  ,1000 ,1  ,6]
    if(num2==12) return ["골램"           ,25000 ,3000 ,3  ,1]
    if(num2==13) return ["케르배우스"     ,10000 ,500  ,0.3,2]
    if(num2==14) return ["마왕"           ,10000 ,3000 ,2.5,3]
    if(num2==15) return ["악마"           ,15000 ,3500 ,2  ,4]
    if(num2==16) return ["신"             ,100000,10000,0.1,5]
  }
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
//필요돈,필요재료,겟수

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
function maprandom(){
  map=[[4,2]]
  now=[4,2]
  for(i=0;i<10;i++){
    r=random(1,4)
    if(r==1){
      now[0]-=1
    }else if(r==2){
      if(now[1]!=4){
        now[1]+=1
        d=1
        for(i=0;i<map.length;i++){
          e=map[i].includes(now)
          if(e){
              d=0
          }
        }
        if(d==0){
          now[1]+=1
          now[0]-=1
        }
      }
      else{
        now[0]-=1
      }
    }else{
      if(now[1]!=0){
        now[1]-=1
        d=1
        for(i=0;i<map.length;i++){
          e=map[i].includes(now)
          if(e){
              d=0
          }
        }
        if(d==0){
          now[1]+=1
          now[0]-=1
        }
      }
      else{
        now[0]-=1
      }
    }


    map[map.length]=[[0,0]]
    map[map.length-1][0]=now[0]
    map[map.length-1][1]=now[1]


  }

  for(i=0;i<10;i++){
    now[0]-=1
    map[map.length]=[[0,0]]
    map[map.length-1][0]=now[0]
    map[map.length-1][1]=now[1]
  }


  return map
}

function mappr(map){
  ml=map.length
  mpr=""
  for(i=0;i<5;i++){
    if(i!=0){
      mpr+="\n"
    }
    for(j=0;j<5;j++){
      d=0
      for(m=0;m<ml;m++){
        if(map[m][0]==i && map[m][1]==j){
          d=1
        }
      }
      if(d){
        mpr+=" 방 |"
      }else{
        mpr+="     |"
      }
    }
    mpr+="\n--------------------------------"
  }
  return mpr
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


function percentage(persent){
  sp=20
  j=persent
  pr=""
  for(i=0;i<persent;i+=10){
    if(persent>9.9){
      pr+="█"
      persent-=10
      sp-=3
      }
  }


  if(persent>9){
    pr+="▉"
    sp-=3
  }else if(persent>8){
    pr+="▊"
    sp-=3
  }else if(persent>6){
    pr+="▋"
    sp-=3
  }else if(persent>5){
    pr+="▌"
    sp-=3
  }else if(persent>3){
    pr+="▍"
    sp-=3
  }else if(persent>2){
    pr+="▎"
    sp-=3
  }else if(persent>1){
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
    Djob.set(msg.author, 0);
    Dlevel.set(msg.author, 1);
    Dmoney.set(msg.author, 10000);
    Dhp.set(msg.author, 1000);
    Dmg.set(msg.author, 200);
    Dmana.set(msg.author, 100);
    Dstat.set(msg.author, 3)
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
    Dinven.set(msg.author, [1, 35, 26, 32, 0, 0, 0, 0, 0, 0]);
    SThp.set(msg.author, 0);
    STdmg.set(msg.author, 0);
    STmana.set(msg.author, 0);
    WaitingForAtack.set(msg.author, false);
    Dequiped.set(msg.author, "미정");
    EquippedSword.set(msg.author, 0);
    dungeonCreated.set(msg.author, 1);
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
    console.log(inventorynum(Dequiped.get(msg.author)))
    const ArmorEmbed = new Discord.MessageEmbed()
    .setTitle("갑옷 착용 명령어")
    .addField("착용 중인 갑옷 ",ArmorStatus, true)
    .addField("착용 중인 무기 : ",String(inventorynum(Dequiped.get(msg.author))[0]))
    .addField(".d am1", "체력의 갑옷을 착용합니다.", true)
    .addField(".d am2", "마법사 갑옷을 착용합니다.", true)
    .addField(".d am3", "귀한 갑옷을 착용합니다.", true)
    .addField(".d am4", "철제 갑옷을 착용합니다.", true)
    .addField(".d am5", "다이아 갑옷을 착용합니다.", true)
    .addField(".d am6", "전설의 갑옷을 착용합니다.", true)
    msg.channel.send(ArmorEmbed)
  }
  if(msg.content == ".d am1"){
    if(inventoryFind(17, Dinven.get(msg.author)) >= 0){
    msg.channel.send("체력의 갑옷을 착용했습니다.")
    Darmor.set(msg.author, 17)
    }
    else{
      msg.channel.send("당신에 인벤토리에 해당 갑옷은 없습니다!")
    }
  }
  if(msg.content == ".d am2"){
    if(inventoryFind(18, Dinven.get(msg.author)) >= 0){
      msg.channel.send("마법사 갑옷을 착용했습니다.")
      Darmor.set(msg.author, 18)
      }
      else{
        msg.channel.send("당신에 인벤토리에 해당 갑옷은 없습니다!")
      }
  }
  if(msg.content == ".d am3"){
    if(inventoryFind(19, Dinven.get(msg.author)) >= 0){
      msg.channel.send("귀한 갑옷을 착용했습니다.")
      Darmor.set(msg.author, 19)
      }
      else{
        msg.channel.send("당신에 인벤토리에 해당 갑옷은 없습니다!")
      }
  }
  if(msg.content == ".d am4"){
    if(inventoryFind(20, Dinven.get(msg.author)) >= 0){
      msg.channel.send("철제의 갑옷을 착용했습니다.")
      Darmor.set(msg.author, 20)
      }
      else{
        msg.channel.send("당신에 인벤토리에 해당 갑옷은 없습니다!")
      }
  }
  if(msg.content == ".d am5"){
    if(inventoryFind(21, Dinven.get(msg.author)) >= 0){
      msg.channel.send("다이아 갑옷을 착용했습니다.")
      Darmor.set(msg.author, 21)
      }
      else{
        msg.channel.send("당신에 인벤토리에 해당 갑옷은 없습니다!")
      }
  }
  if(msg.content == ".d am6"){
    if(inventoryFind(22, Dinven.get(msg.author)) >= 0){
      msg.channel.send("전설의 갑옷을 착용했습니다.")
      Dinven.get(msg.author)  
      Darmor.set(msg.author, 22)
      }
      else{
        msg.channel.send("당신에 인벤토리에 해당 갑옷은 없습니다!")
      }
  }
  if(msg.content == ".d inv"){
    var invenList = ""
    for(var i = 0;i<=Dinven.get(msg.author).length - 1;i++){
      if(Dinven.get(msg.author)[i] != 0 && typeof(Dinven.get(msg.author)[i]) != "undefined"){
        invenList += "\n" + String(Number(i+1)+". " + inventorynum(Dinven.get(msg.author)[i])[0])
        console.log(inventorynum(Dinven.get(msg.author)))
    }
    else{
      invenList += "\n"+ String(Number(i+1)+". "+"비어 있음")
  }}
    msg.channel.send(invenList)
  }
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
  if(msg.content == ".d at"){
    if(WaitingForAtack.get(msg.author) == true){

    }
  }

  if (msg.content === '우돌') {
    msg.reply('우돌이는 2010년 6월 29일 10시 30분경에 태어났으며 잘 살아 있는 겜돌이 입니다');
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
    .addField("제작자", "우돌우돌#2268", true)
    .addField("^우돌봇", "우돌봇 프로필을 봅니다", true)
    .addField("이 봇에게 메시지를 지울 권한을 주세요.", "제작자에게 계속 에러가 갈 수 있습니다", true)
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
    .addField("<>{끝말잇기를 진행할 단어}", "끝말잇기를 진행할 수 있습니다. 만약 먹히지 않는다면 DM으로 말씀해 주세요", true)
    .addField("%청소 {숫자}", "숫자에 들어간 숫자만큼 메시지를 청소합니다.", true)
    .addField("밸게 ㄱ", "밸런스 게임을 합니다")
    .addField("파이 = ??", "파이값 을 보여 줍니다.",true)
    .addField("!돈", "돈 관련 게임의 도움말을 보여 줍니다.")
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
      if(msg.author.id != "682358033937989632"){
      const randomint = Math.floor(Math.random()*1000)
      if(randomint <= 1000){
        var prefix = "동전"
        var multiple = 1
          if(randomint <= 200 + (20 * percentmap.get(msg.author))){
            var prefix = "금"
            var multiple = 10
            if(randomint <= 50 + (10 * percentmap.get(msg.author))){
              var prefix = "다이아몬드"
              var multiple = 500
              if(randomint <= 10 + (10 * percentmap.get(msg.author))){
                var prefix = "에메랄드"
                var multiple = 5000
                  if(randomint <= 5 + (5 * percentmap.get(msg.author))){
                    var prefix = "운석"
                    var multiple = 10000
      }}}}}  
    }
    else{
     var prefix = "우주의 기운"
     var multiple = 1000000 
    }
      msg.channel.send(prefix + "을(를) 발견했습니다! " + earningmap.get(msg.author) * Number(multiple) + "원을 벌었습니다!")
      lastmoney = Number(moneymap.get(msg.author));
      moneymap.set(msg.author, lastmoney += 1 * Number(multiple));
      console.log(moneymap.get(msg.author))
      
    }
    if(msg.content == ".s"){
      console.log(Number(moneymap.get(msg.author)))
      if(moneymap.get(msg.author) >= 1){
        msg.channel.send("당신에게는 " + Number(moneymap.get(msg.author)) + "원이 있습니다!");
      }
      else{
        msg.channel.send("당신에게는 돈이 없습니다!");
      }
    }
      if(msg.content == ".b 1"){
        if(moneymap.get(msg.author) >= 1000 * earningmap.get(msg.author)){
          earning = Number(earningmap.get(msg.author))
          lastmoney = moneymap.get(msg.author)
          moneymap.set(msg.author, lastmoney - 1000 * earningmap.get(msg.author))
          earningmap.set(msg.author, earning + 1)
          msg.channel.send("한번에 얻는 돈의 양이 많아졌다!")
        }
        else if(moneymap.get(msg.author) < 1000 * earningmap.get(msg.author)){
          msg.channel.send("돈이 부족합니다.")
        }
          
        }
        
        if(msg.content == ".b 2"){
          if(moneymap.get(msg.author) >= 1000 * percentmap.get(msg.author)){
            percent = Number(percentmap.get(msg.author))
            lastmoney = moneymap.get(msg.author)
            moneymap.set(msg.author, lastmoney - 1000 * percentmap.get(msg.author))
            percentmap.set(msg.author, percent + 1)
            msg.channel.send("좋은 아이템을 발견할 확률이 늘어났다!")
          }
          else if(moneymap.get(msg.author) < 1000 * percentmap.get(msg.author)){
            msg.channel.send("돈이 부족합니다.")
          }
      }
      if(msg.content == ".%"){
        percentembed = new MessageEmbed()
          .setTitle(msg.author.username + "의 확률표")
          .addField("동전 확률", String(100 - ((20 + 5 + 1 + 0.5) + 4.5 * percentmap.get(msg.author))) + "%")
          .addField("금 확률", String(20 + (2 * percentmap.get(msg.author))) + "%")
          .addField("다이아몬드 확률", String(5 + (1 * percentmap.get(msg.author))) + "%")
          .addField("에메랄드 확률", String(1 + (1 * percentmap.get(msg.author))) + "%")
          .addField("운석 확률", String(0.5 + (0.5 * percentmap.get(msg.author))) + "%")
        msg.channel.send(percentembed);
        }


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
    .addField("버서커 : " + Slevel.get(msg.author)+ "레벨", percentage((Sexp.get(msg.author) / workerexp(Slevel.get(msg.author)) * 100).toFixed(2)))
    .addField("힐러 : " + Hlevel.get(msg.author)+ "레벨", percentage((Hexp.get(msg.author) / workerexp(Hlevel.get(msg.author)) * 100).toFixed(2)))
    .addField("메이지 : " + Wlevel.get(msg.author)+ "레벨",percentage((Wexp.get(msg.author) / workerexp(Wlevel.get(msg.author)) * 100).toFixed(2)))
    .addField("아처 : " + Alevel.get(msg.author)+ "레벨",percentage((Aexp.get(msg.author) / workerexp(Alevel.get(msg.author)) * 100).toFixed(2)))
    .addField("탱커 : " + Tlevel.get(msg.author)+ "레벨",percentage((Texp.get(msg.author) / workerexp(Tlevel.get(msg.author)) * 100).toFixed(2)))
    .addField("Tip. 만약 직업이 미정이라면", ".d c로 직업 변경 도움말을 확인해 보세요!")
    msg.channel.send(DstatEmbed)
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
  if(msg.content == ".d c"){
    msg.channel.send(".d cb -> 버서커로 직업 변경\n.d ch -> 힐러로 직업 변경\n.d cw -> 메이지로 직업 변경\n.d ca -> 아처로 직업 변경\n.d ct -> 탱커로 직업 변경")
  }
  if(msg.content == ".d mt"){
    const StoreEmbed = new Discord.MessageEmbed()
    .setTitle("무기상점")
    .setColor("#73F2F0")
    .setDescription("상점 도움말입니다.")
    .addField(".cmt", "전투 상점입니다.")
    .addField(".imt", "아이템 상점입니다.")
    msg.channel.send(StoreEmbed);
  }
  if(msg.content == ".d cmt"){
    const CombatStoreEmbed1 = new Discord.MessageEmbed()
    .setTitle("전투상점   «0-1»")
    .setDescription("전투 관련 상점입니다.")
    .addField(inventorynum(1)[0], "가격 : " + (inventorymaterial(1))[0]+"\n" + "재료 : " + (inventorymaterial(1))[1] + " x "+(inventorymaterial(1))[2])
    msg.channel.send(CombatStoreEmbed1)
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
  
  if (msg.content === '제작자') {
    msg.reply('https://discord.gg/pcsMCJBj3S에서 제작자를 만나보세요!');
  }
  
    
    if(msg.content.startsWith('-shout')){
      const str1 = msg.content;
      msg.reply(str1.substring(6))


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
        console.log(playerresult)
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
            console.log(rn1 * rn2)
          if(rindex === 1){
            msg.reply(rn1 + " / " + rn2)
            msg.reply("= ? ")
            msg.reply("정답을 입력하기 전에 #를 입력해 주세요! EX : #77, #28")
            msg.reply("소수점으로 내려갈 가능성이 다수이니 1의 자리로 버림해 주세요")
            rmap.set(msg.author, parseInt(rn1 / rn2))
          }
            console.log(parseInt(rn1 / rn2))
          if(rindex === 2){
            msg.reply(rn1 + " + " + rn2)
            msg.reply("= ? ")
            msg.reply("정답을 입력하기 전에 #를 입력해 주세요! EX : #77, #28")
            rmap.set(msg.author, rn1 + rn2)
          }
            console.log(rn1 + rn2)
          if(rindex === 3){
            msg.reply(rn1 + " - " + rn2)
            msg.reply("= ? ")
            msg.reply("정답을 입력하기 전에 #를 입력해 주세요! EX : #77, #28")
            rmap.set(msg.author, rn1 - rn2)
            console.log(rn1 - rn2)
          }
       
            }
            if(msg.content.startsWith("#")){
              const rplayermessage = msg.content
              const rplayerresult = rplayermessage.substring(1)
              console.log(rplayerresult)
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
              if(msg.content.startsWith("우")){
                console.log(msg.author)
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
            if(msg.content.includes === ""){
              console.log(String(msg.channel.id));
              console.log(String(msg.author.username));
            }
            if(msg.content === "파이 = ??"){
              msg.channel.send("3.14159 26535 89793 23846 26433 83279 50288 41971 69399 37510 58209 74944 59230 78164 06286 20899 86280 34825 34211 70679 82148 08651 32823 06647 09384 46095 50582 23172 53594 08128 48111 74502 84102 70193 85211 05559 64462 29489 54930 38196 44288 10975 66593 34461 28475 64823 37867 83165 27120 19091 45648 56692 34603 48610 45432 66482 13393 60726 02491 41273 72458 70066 06315 58817 48815 20920 96282 92540 91715 36436 78925 90360 01133 05305 48820 46652 13841 46951 94151 16094 33057 27036 57595 91953 09218 61173 81932 61179 31051 18548 07446 23799 62749 56735 18857 52724 89122 79381 83011 94912 98336 73362 44065 66430 86021 39494 63952 24737 19070 21798 60943 70277 05392 17176 29317 67523 84674 81846 76694 05132 00056 81271 45263 56082 77857 71342 75778 96091 73637 17872 14684 40901 22495 34301 46549 58537 10507 92279 68925 89235 42019 95611 21290 21960 86403 44181 59813 62977 47713 09960 51870 72113 49999 99837 29780 49951 05973 17328 16096 31859 50244 59455 34690 83026 42522 30825 33446 85035 26193 11881 71010 00313 78387 52886 58753 32083 81420 61717 76691 47303 59825 34904 28755 46873 11595 62863 88235 37875 93751 95778 18577 80532 17122 68066 13001 92787 66111 95909 21642 01989 38095 25720 10654 85863 27886 59361 53381 82796 82303 01952 03530 18529 68995 77362 25994 13891 24972 17752 83479 13151 55748 57242 45415 06959 50829 53311 68617 27855 88907 50983 81754 63746 49393 19255 06040 09277 01671 13900 98488 24012 85836 16035 63707 66010 47101 81942 95559 61989 46767 83744 94482 55379 77472 68471 04047 53464 62080 46684 25906 94912 93313 67702 89891 52104 75216 20569 66024 05803 81501 93511 25338 24300 35587 64024 74964 73263 91419 92726 04269 92279 67823 54781 63600 93417 21641 21992 45863 15030 28618 29745 55706 74983 85054 94588 58692 69956 90927 21079 75093 02955 32116 53449 87202 75596 02364 80665 49911 98818 34797 75356 63698 07426 54252 78625 51818 41757 46728 90977 77279 38000 81647 06001 61452 49192 17321 72147 72350")
            }
            if(msg.content.startsWith("끝말잇기 리셋 ")){
              ggutmalitguimap.set(msg.channel.id, msg.content.substring(8))
              lenggutmalitguimap.set(msg.channel.id, 1)
              console.log(ggutmalitguimap)
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
           if(msg.content.includes("@everyone")){
           console.log(msg.author.username) 
           msg.channel.bulkDelete(1)
           }
           if(msg.content.startsWith("%청소 ")){
            const chungsoinput = msg.content.substring(4)
            console.log(msg.author.username)
            msg.channel.bulkDelete(chungsoinput)
           
           
          }
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

client.on("messageCreate", async (message) => {

    if (message.author.bot) return;

    if (message.content == "!stats") {
        const discordJSVersion = packageJSON.dependencies["discord.js"];
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Bot stats - ${client.user.tag}`)
            .addField("Discord.js version", discordJSVersion);
        message.channel.send({
            embeds: [embed]
        });
    }
    
});
      


      }
      
      
    
      
    )
client.login('ODI3NzczNDE3MDE2NTI0ODUw.YGf6EQ.aZ5ELNQt7CcId6OPlAdMH_JgoIk');

