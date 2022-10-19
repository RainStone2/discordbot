const express = require("express");
const mysql = require("./mysql"); // mysql 폴더의 index.js
const app = express();

app.listen(3000, () => {
    // 3000번 포트로 웹 서버 실행
    console.log('Server started. port 3000.');
  });

  app.get('/api/dungeon_info', async (req, res) => {
    // localhost:3000/customers 접속 시 실행
    const dungeon = await mysql.query('dungeon'); //sql.js 파일에 작성된 customerList 쿼리를 실행
    console.log(dungeon);
    res.send(dungeon); // 결과를 클라이언트로 보냄
  });
  