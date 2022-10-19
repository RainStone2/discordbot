exports.run = async (client, msg, args, prefix) => {
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
    
  }
  
  exports.config = {
    name: '청소', // 위 코드를 실행할 명령어 지정
    aliases: ['clear', 'clean'], // 명령어의 별명을 지정(이 단어들을 호출해도 위 코드가 실행됨.)
    category: ['moderator'], // 명령어 카테고리 지정
    des: ['bulkdelete'], // 명령어에 대한 설명
    use: ['!clear/clean <청소 할 메세지의 수>'] // 명령어 사용 방법 기재
  }