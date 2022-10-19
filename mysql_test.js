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

var testQuery = "INSERT INTO `member` (`id`,`name`) VALUES ('1','RainStone2');";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});

var testQuery = "SELECT * FROM member";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
 
connection.end(); // DB 접속 종료
